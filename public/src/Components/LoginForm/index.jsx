import { useState } from "react";
import "./style.css";
import {Link} from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Done");
    }
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is Required";
    } else if (/^\S+@\S+\.\S+$/) {
        error.email = "Write a Correct Email";
    } else {
      error.email = " ";
    }

    if (!password) {
      error.password = "Password is Required";
    } else if (password.length < 5) {
      error.password = "Write a strong password";
    } else {
      error.password = " ";
    }
    return error;
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email ..."
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              value={password}
              placeholder=" password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
              {errors.password && <p className="error">{errors.password}</p>}

          </div>
          <button>Login</button>
        </form>
        <Link to="/signup"> Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
