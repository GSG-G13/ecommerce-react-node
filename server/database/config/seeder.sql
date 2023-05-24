BEGIN;

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
  CART (quantity, user_id, product_id)
VALUES
  (2, 1, 1),
  (1, 1, 3),
  (1, 2, 2),
  (3, 3, 4);

INSERT INTO
  USERS (name, email, password)
SELECT
  'User' || generate_series,
  'user' || generate_series || '@example.com',
  'password' || generate_series
FROM
  generate_series(1, 30);


  INSERT INTO products (name, description, price, image, category)
  VALUES
  ('Motorola Moto 360', 'The new Moto 360 combines edge-to-edge glass with an exceptionally thin, polished bezel, giving you the largest viewing area. Whether...', 299.99, 'images/product-01.jpg', 'Smartwatch'),
  ('Product 2', 'Description for Product 2', 199.99, 'images/product-02.jpg', 'Category 2'),
  ('Product 3', 'Description for Product 3', 99.99, 'images/product-03.jpg', 'Category 1');


COMMIT;