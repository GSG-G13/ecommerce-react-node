BEGIN -- INERT DUMMY DATA
INSERT INTO
  USERS (name, email, password)
VALUES
  ('John Doe', 'johndoe@gmail.com', 'password123'),
  (
    'Jane Smith',
    'janesmith@hotmail.com',
    'password456'
  ),
  (
    'Bob Johnson',
    'bjohnson@yahoo.com',
    'password789'
  );

INSERT INTO
  PRODUCTS (name, price, image)
VALUES
  (
    'Samsung Galaxy S21',
    99900,
    'https://www.example.com/images/samsung_s21.jpg'
  ),
  (
    'Apple iPhone 12 Pro',
    109900,
    'https://www.example.com/images/iphone_12_pro.jpg'
  ),
  (
    'Google Pixel 5',
    79900,
    'https://www.example.com/images/pixel_5.jpg'
  ),
  (
    'Sony PlayStation 5',
    49900,
    'https://www.example.com/images/playstation_5.jpg'
  );

INSERT INTO
  CART (quantity, user_id, product_id)
VALUES
  (2, 1, 1),
  (1, 1, 3),
  (1, 2, 2),
  (3, 3, 4);

END;