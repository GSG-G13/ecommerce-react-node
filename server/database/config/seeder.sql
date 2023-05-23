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

COMMIT;