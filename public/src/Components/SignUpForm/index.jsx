import { useState } from 'react';
import './style.css';
import axios from 'axios';
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (errors.email === false && errors.password === false) {
      axios
        .post('/api/v1/user/signup', { name :"ahmed", email, password, confirmPassword })
        .then((res) => {
          console.log(res);
          if (res.data.status === 'success') {
            alert('SignUp Success');
          }
        });
    } else {
      alert('Error');
    }
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = 'Email is Required';
    } else if (!/\S+@\S+\.\S+/.test(email || ' ')) {
      error.email = 'Write a Correct Email';
    } else {
      error.email = false;
    }

    if (!password) {
      error.password = 'Password is Required';
    } else if (password.length < 5) {
      error.password = 'Write a strong password';
    } else {
      error.password = false;
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password doesn't not match";
    }

    return error;
  };

  return (
    <div className="signUp-form">
      <h2>SignUp Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            placeholder="confirm your Password .."
            value={confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
