# SQL & NoSQL Exercises


## Table of Contents

**Part 1 — SQL Exercises**
- 1.01 Schema Reference
- 1.02 Basic Queries
- 1.03 Filtering & Sorting
- 1.04 Aggregate Functions
- 1.05 GROUP BY & HAVING
- 1.06 JOINs
- 1.07 Subqueries
- 1.08 CTEs (WITH)
- 1.09 Window Functions
- 1.10 INSERT, UPDATE, DELETE
- 1.11 DDL & Indexes

**Part 2 — MongoDB Exercises**
- 2.01 Schema Reference
- 2.02 Basic find()
- 2.03 Comparison & Logical Operators
- 2.04 Arrays & Element Operators
- 2.05 Insert, Update, Delete
- 2.06 Aggregation Pipeline


---


# Part 1 — SQL Exercises


## 1.01 Schema Reference

All SQL exercises use the following four tables. Read this carefully before starting.

```sql
CREATE TABLE users (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(150) UNIQUE NOT NULL,
    country    VARCHAR(50),
    age        INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE products (
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price    DECIMAL(10,2) NOT NULL,
    stock    INTEGER DEFAULT 0
);

CREATE TABLE orders (
    id         SERIAL PRIMARY KEY,
    user_id    INTEGER REFERENCES users(id),
    status     VARCHAR(20) DEFAULT 'pending',
    total      DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id         SERIAL PRIMARY KEY,
    order_id   INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity   INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL
);
```

Sample data to have in mind:
- `users.country` values: 'Portugal', 'Spain', 'France', 'Germany', 'Brazil'
- `orders.status` values: 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
- `products.category` values: 'Electronics', 'Clothing', 'Books', 'Food', 'Sports'


## 1.02 Basic Queries

### Exercise 1 — Select all columns from users

Return every row and every column from the `users` table.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users;
```

</details>

### Exercise 2 — Select specific columns

Return only the `name` and `email` of all users.

<details>
<summary>Show Answer</summary>

```sql
SELECT name, email FROM users;
```

</details>

### Exercise 3 — Column aliases

Return `name` as `full_name` and `email` as `email_address`.

<details>
<summary>Show Answer</summary>

```sql
SELECT name AS full_name, email AS email_address FROM users;
```

</details>

### Exercise 4 — Remove duplicates

Return the list of distinct countries from the `users` table (no duplicates).

<details>
<summary>Show Answer</summary>

```sql
SELECT DISTINCT country FROM users;
```

</details>

### Exercise 5 — Limit results

Return only the first 10 users.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users LIMIT 10;
```

</details>


## 1.03 Filtering & Sorting

### Exercise 6 — WHERE with equality

Return all users from Portugal.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users WHERE country = 'Portugal';
```

</details>

### Exercise 7 — WHERE with comparison

Return all products with a price greater than 50.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM products WHERE price > 50;
```

</details>

### Exercise 8 — WHERE with AND

Return users who are from Portugal AND older than 25.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users
WHERE country = 'Portugal' AND age > 25;
```

</details>

### Exercise 9 — WHERE with OR

Return users from Portugal or Spain.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users
WHERE country = 'Portugal' OR country = 'Spain';
```

</details>

### Exercise 10 — IN operator

Return users from Portugal, Spain, or France using `IN`.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users
WHERE country IN ('Portugal', 'Spain', 'France');
```

</details>

### Exercise 11 — BETWEEN

Return products with a price between 10 and 100 (inclusive).

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM products
WHERE price BETWEEN 10 AND 100;
```

</details>

### Exercise 12 — LIKE pattern matching

Return users whose name starts with the letter 'A'.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users WHERE name LIKE 'A%';
```

`%` matches any sequence of characters. `_` matches exactly one character.

</details>

### Exercise 13 — IS NULL

Return orders that have no `total` set (NULL).

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM orders WHERE total IS NULL;
```

Note: you cannot use `= NULL`. You must use `IS NULL`.

</details>

### Exercise 14 — ORDER BY ascending

Return all products ordered by price from cheapest to most expensive.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM products ORDER BY price ASC;
```

`ASC` is the default so it can be omitted, but it's good practice to be explicit.

</details>

### Exercise 15 — ORDER BY descending + LIMIT

Return the 5 most expensive products.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM products ORDER BY price DESC LIMIT 5;
```

</details>

### Exercise 16 — ORDER BY multiple columns

Return users ordered by country (A→Z) and then by name (A→Z) within each country.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users ORDER BY country ASC, name ASC;
```

</details>

### Exercise 17 — OFFSET (pagination)

Return the second page of users (10 per page), i.e. users 11 to 20.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 10;
```

`OFFSET 10` skips the first 10 rows. Always pair with `ORDER BY` to get consistent pages.

</details>


## 1.04 Aggregate Functions

### Exercise 18 — COUNT all rows

Count the total number of users.

<details>
<summary>Show Answer</summary>

```sql
SELECT COUNT(*) FROM users;
```

</details>

### Exercise 19 — COUNT non-null values

Count how many users have a `country` set (not NULL).

<details>
<summary>Show Answer</summary>

```sql
SELECT COUNT(country) FROM users;
```

`COUNT(column)` ignores NULLs. `COUNT(*)` counts all rows including NULLs.

</details>

### Exercise 20 — SUM

Calculate the total revenue from all orders.

<details>
<summary>Show Answer</summary>

```sql
SELECT SUM(total) AS total_revenue FROM orders;
```

</details>

### Exercise 21 — AVG

Calculate the average product price.

<details>
<summary>Show Answer</summary>

```sql
SELECT AVG(price) AS avg_price FROM products;
```

</details>

### Exercise 22 — MIN and MAX

Return the cheapest and most expensive product price.

<details>
<summary>Show Answer</summary>

```sql
SELECT MIN(price) AS cheapest, MAX(price) AS most_expensive FROM products;
```

</details>

### Exercise 23 — ROUND

Return the average product price rounded to 2 decimal places.

<details>
<summary>Show Answer</summary>

```sql
SELECT ROUND(AVG(price), 2) AS avg_price FROM products;
```

</details>


## 1.05 GROUP BY & HAVING

### Exercise 24 — GROUP BY

Count how many users exist per country.

<details>
<summary>Show Answer</summary>

```sql
SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country;
```

</details>

### Exercise 25 — GROUP BY with ORDER BY

Count orders per status and order the result by count descending.

<details>
<summary>Show Answer</summary>

```sql
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status
ORDER BY order_count DESC;
```

</details>

### Exercise 26 — GROUP BY with aggregate

Calculate the total revenue and average order value per user.

<details>
<summary>Show Answer</summary>

```sql
SELECT user_id,
       COUNT(*)        AS order_count,
       SUM(total)      AS total_spent,
       ROUND(AVG(total), 2) AS avg_order_value
FROM orders
GROUP BY user_id;
```

</details>

### Exercise 27 — HAVING

Return only the countries that have more than 5 users.

<details>
<summary>Show Answer</summary>

```sql
SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country
HAVING COUNT(*) > 5;
```

`WHERE` filters rows before grouping. `HAVING` filters groups after grouping. You cannot use `WHERE` with aggregate functions.

</details>

### Exercise 28 — HAVING with alias

Return users who have placed more than 3 orders.

<details>
<summary>Show Answer</summary>

```sql
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 3
ORDER BY order_count DESC;
```

</details>

### Exercise 29 — GROUP BY with category

Return the number of products and average price per category, only for categories with an average price above 30.

<details>
<summary>Show Answer</summary>

```sql
SELECT category,
       COUNT(*)             AS product_count,
       ROUND(AVG(price), 2) AS avg_price
FROM products
GROUP BY category
HAVING AVG(price) > 30
ORDER BY avg_price DESC;
```

</details>


## 1.06 JOINs

### Exercise 30 — INNER JOIN

Return all orders with the corresponding user's name and email.

<details>
<summary>Show Answer</summary>

```sql
SELECT o.id        AS order_id,
       u.name      AS customer_name,
       u.email,
       o.status,
       o.total
FROM orders o
INNER JOIN users u ON o.user_id = u.id;
```

`INNER JOIN` returns only rows where the condition matches in both tables. Orders without a user (orphaned) would be excluded.

</details>

### Exercise 31 — LEFT JOIN

Return all users and their orders. Include users who have never placed an order (show NULL for order columns).

<details>
<summary>Show Answer</summary>

```sql
SELECT u.name, u.email, o.id AS order_id, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

`LEFT JOIN` keeps all rows from the left table (`users`) even if there is no matching row in the right table (`orders`).

</details>

### Exercise 32 — Find users with no orders

Using a LEFT JOIN, return only the users who have never placed an order.

<details>
<summary>Show Answer</summary>

```sql
SELECT u.name, u.email
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
```

When the left join finds no match, all right-side columns are NULL. Filtering `WHERE o.id IS NULL` keeps only the unmatched rows.

</details>

### Exercise 33 — Three-table JOIN

Return each order item with the order ID, the product name, quantity, and unit price.

<details>
<summary>Show Answer</summary>

```sql
SELECT oi.order_id,
       p.name       AS product_name,
       oi.quantity,
       oi.unit_price
FROM order_items oi
INNER JOIN products p ON oi.product_id = p.id
INNER JOIN orders   o ON oi.order_id   = o.id;
```

</details>

### Exercise 34 — Four-table JOIN

Return a full receipt: customer name, order date, product name, quantity, unit price, and line total.

<details>
<summary>Show Answer</summary>

```sql
SELECT u.name                              AS customer,
       o.created_at::date                  AS order_date,
       p.name                              AS product,
       oi.quantity,
       oi.unit_price,
       (oi.quantity * oi.unit_price)       AS line_total
FROM orders o
INNER JOIN users       u  ON o.user_id    = u.id
INNER JOIN order_items oi ON oi.order_id  = o.id
INNER JOIN products    p  ON oi.product_id = p.id
ORDER BY o.id, p.name;
```

</details>

### Exercise 35 — JOIN with GROUP BY

Return each user's name and the total amount they have spent across all orders.

<details>
<summary>Show Answer</summary>

```sql
SELECT u.name, SUM(o.total) AS total_spent
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC;
```

</details>

### Exercise 36 — Find products never ordered

Return the names of products that have never appeared in any order.

<details>
<summary>Show Answer</summary>

```sql
SELECT p.name
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
WHERE oi.id IS NULL;
```

</details>


## 1.07 Subqueries

### Exercise 37 — Subquery in WHERE

Return all users who have placed at least one order.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM users
WHERE id IN (SELECT DISTINCT user_id FROM orders);
```

Alternative using EXISTS (often faster):
```sql
SELECT * FROM users u
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
```

</details>

### Exercise 38 — Subquery with aggregate

Return all orders whose total is above the average order total.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM orders
WHERE total > (SELECT AVG(total) FROM orders);
```

The subquery runs first, computes the average, then the outer query filters.

</details>

### Exercise 39 — Subquery in FROM (derived table)

Calculate the average number of orders per user.

<details>
<summary>Show Answer</summary>

```sql
SELECT AVG(order_count) AS avg_orders_per_user
FROM (
    SELECT user_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
) AS user_order_counts;
```

A subquery in the `FROM` clause is called a derived table. It must have an alias.

</details>

### Exercise 40 — Correlated subquery

Return users whose age is above the average age of users in their own country.

<details>
<summary>Show Answer</summary>

```sql
SELECT u.name, u.country, u.age
FROM users u
WHERE u.age > (
    SELECT AVG(u2.age)
    FROM users u2
    WHERE u2.country = u.country
);
```

A correlated subquery references the outer query (`u.country`). It runs once for each row in the outer query — can be slow on large tables. Consider using a window function instead.

</details>

### Exercise 41 — NOT IN

Return products that are NOT in the 'Electronics' or 'Books' categories.

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM products
WHERE category NOT IN ('Electronics', 'Books');
```

Careful: if any value in the subquery list is NULL, `NOT IN` returns no rows. Prefer `NOT EXISTS` when the subquery can return NULLs.

</details>


## 1.08 CTEs (WITH)

### Exercise 42 — Basic CTE

Using a CTE, find the top 3 customers by total spending.

<details>
<summary>Show Answer</summary>

```sql
WITH customer_spending AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
)
SELECT u.name, cs.total_spent
FROM customer_spending cs
INNER JOIN users u ON u.id = cs.user_id
ORDER BY cs.total_spent DESC
LIMIT 3;
```

A CTE (`WITH` clause) is a named temporary result set. It makes complex queries more readable by breaking them into named steps.

</details>

### Exercise 43 — Multiple CTEs

Using two CTEs, find users who spent above average AND placed more than 2 orders.

<details>
<summary>Show Answer</summary>

```sql
WITH user_stats AS (
    SELECT user_id,
           COUNT(*)   AS order_count,
           SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
),
avg_spending AS (
    SELECT AVG(total_spent) AS avg_spent FROM user_stats
)
SELECT u.name, us.order_count, us.total_spent
FROM user_stats us
CROSS JOIN avg_spending av
INNER JOIN users u ON u.id = us.user_id
WHERE us.total_spent > av.avg_spent
  AND us.order_count > 2
ORDER BY us.total_spent DESC;
```

</details>

### Exercise 44 — CTE for readability

Using a CTE, find the most ordered product (by total quantity sold).

<details>
<summary>Show Answer</summary>

```sql
WITH product_sales AS (
    SELECT product_id, SUM(quantity) AS total_qty
    FROM order_items
    GROUP BY product_id
)
SELECT p.name, ps.total_qty
FROM product_sales ps
INNER JOIN products p ON p.id = ps.product_id
ORDER BY ps.total_qty DESC
LIMIT 1;
```

</details>


## 1.09 Window Functions

### Exercise 45 — ROW_NUMBER

Number all orders per user by date (oldest order = 1).

<details>
<summary>Show Answer</summary>

```sql
SELECT user_id,
       id AS order_id,
       created_at,
       ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) AS order_number
FROM orders;
```

`PARTITION BY` restarts the numbering for each user. `ORDER BY` determines the sequence within each partition.

</details>

### Exercise 46 — RANK vs DENSE_RANK

Rank users by total spending. Show both RANK and DENSE_RANK.

<details>
<summary>Show Answer</summary>

```sql
SELECT u.name,
       SUM(o.total) AS total_spent,
       RANK()       OVER (ORDER BY SUM(o.total) DESC) AS rank,
       DENSE_RANK() OVER (ORDER BY SUM(o.total) DESC) AS dense_rank
FROM orders o
INNER JOIN users u ON u.id = o.user_id
GROUP BY u.id, u.name;
```

`RANK` skips numbers after a tie (1, 2, 2, 4). `DENSE_RANK` does not skip (1, 2, 2, 3).

</details>

### Exercise 47 — Running total

Calculate the running total of order revenue ordered by date.

<details>
<summary>Show Answer</summary>

```sql
SELECT id AS order_id,
       created_at,
       total,
       SUM(total) OVER (ORDER BY created_at) AS running_total
FROM orders
ORDER BY created_at;
```

`SUM(total) OVER (ORDER BY created_at)` adds each row's total to all previous totals — a cumulative sum.

</details>

### Exercise 48 — LAG — compare to previous value

For each order, show the current total and the previous order total for the same user.

<details>
<summary>Show Answer</summary>

```sql
SELECT user_id,
       id           AS order_id,
       created_at,
       total,
       LAG(total) OVER (PARTITION BY user_id ORDER BY created_at) AS prev_order_total,
       total - LAG(total) OVER (PARTITION BY user_id ORDER BY created_at) AS change
FROM orders
ORDER BY user_id, created_at;
```

`LAG(col)` returns the value from the previous row in the partition. The first row returns NULL (no previous).

</details>

### Exercise 49 — LEAD — compare to next value

For each order, show the current total and the next order total for the same user.

<details>
<summary>Show Answer</summary>

```sql
SELECT user_id,
       id AS order_id,
       total,
       LEAD(total) OVER (PARTITION BY user_id ORDER BY created_at) AS next_order_total
FROM orders
ORDER BY user_id, created_at;
```

`LEAD(col)` looks forward instead of backward. The last row in each partition returns NULL.

</details>

### Exercise 50 — NTILE — divide into quartiles

Divide users into 4 groups (quartiles) by total spending.

<details>
<summary>Show Answer</summary>

```sql
WITH spending AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
)
SELECT u.name,
       s.total_spent,
       NTILE(4) OVER (ORDER BY s.total_spent DESC) AS quartile
FROM spending s
INNER JOIN users u ON u.id = s.user_id;
```

`NTILE(4)` divides the result set into 4 equally-sized buckets. Quartile 1 = top spenders.

</details>

### Exercise 51 — First order per user

Return only the first order placed by each user (using window functions, not a correlated subquery).

<details>
<summary>Show Answer</summary>

```sql
SELECT * FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) AS rn
    FROM orders
) ranked
WHERE rn = 1;
```

Filter on the window function result using a subquery or CTE, since you cannot use window functions directly in WHERE.

</details>


## 1.10 INSERT, UPDATE, DELETE

### Exercise 52 — INSERT a single row

Insert a new user: name='Beatriz', email='beatriz@example.com', country='Portugal', age=25.

<details>
<summary>Show Answer</summary>

```sql
INSERT INTO users (name, email, country, age)
VALUES ('Beatriz', 'beatriz@example.com', 'Portugal', 25);
```

`id` and `created_at` are omitted because they have defaults (SERIAL and DEFAULT NOW()).

</details>

### Exercise 53 — INSERT multiple rows

Insert three products at once.

<details>
<summary>Show Answer</summary>

```sql
INSERT INTO products (name, category, price, stock)
VALUES
    ('Mechanical Keyboard', 'Electronics', 89.99, 50),
    ('Python Cookbook',     'Books',       29.99, 200),
    ('Running Shoes',       'Sports',      59.99, 75);
```

</details>

### Exercise 54 — UPDATE a single row

Update the email of user with id=1 to 'new@example.com'.

<details>
<summary>Show Answer</summary>

```sql
UPDATE users
SET email = 'new@example.com'
WHERE id = 1;
```

Always include a `WHERE` clause in UPDATE. Without it, every row in the table is updated.

</details>

### Exercise 55 — UPDATE multiple columns

Update user id=5: set country to 'Spain' and age to 30.

<details>
<summary>Show Answer</summary>

```sql
UPDATE users
SET country = 'Spain', age = 30
WHERE id = 5;
```

</details>

### Exercise 56 — UPDATE with arithmetic

Reduce the stock of product id=3 by 10 units.

<details>
<summary>Show Answer</summary>

```sql
UPDATE products
SET stock = stock - 10
WHERE id = 3;
```

</details>

### Exercise 57 — UPDATE based on subquery

Mark all orders from users in 'Germany' as 'cancelled'.

<details>
<summary>Show Answer</summary>

```sql
UPDATE orders
SET status = 'cancelled'
WHERE user_id IN (
    SELECT id FROM users WHERE country = 'Germany'
);
```

</details>

### Exercise 58 — DELETE a single row

Delete the user with id=10.

<details>
<summary>Show Answer</summary>

```sql
DELETE FROM users WHERE id = 10;
```

Always use a `WHERE` clause. `DELETE FROM users` with no WHERE deletes every row.

</details>

### Exercise 59 — DELETE with condition

Delete all orders with status 'cancelled' that were created more than 1 year ago.

<details>
<summary>Show Answer</summary>

```sql
DELETE FROM orders
WHERE status = 'cancelled'
  AND created_at < NOW() - INTERVAL '1 year';
```

</details>

### Exercise 60 — UPSERT (INSERT ... ON CONFLICT)

Insert a product, but if a product with the same name already exists, update its price instead.

<details>
<summary>Show Answer</summary>

```sql
INSERT INTO products (name, category, price, stock)
VALUES ('Mechanical Keyboard', 'Electronics', 99.99, 50)
ON CONFLICT (name)
DO UPDATE SET price = EXCLUDED.price;
```

`ON CONFLICT` requires a unique constraint or index on the conflicting column. `EXCLUDED` refers to the row that was attempted to be inserted.

</details>


## 1.11 DDL & Indexes

### Exercise 61 — CREATE TABLE with constraints

Create a `reviews` table: id, user_id (FK), product_id (FK), rating (1–5), comment, created_at.

<details>
<summary>Show Answer</summary>

```sql
CREATE TABLE reviews (
    id         SERIAL PRIMARY KEY,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    rating     INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment    TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (user_id, product_id)   -- one review per user per product
);
```

- `NOT NULL` — rejects NULL values
- `REFERENCES` — foreign key constraint
- `ON DELETE CASCADE` — deleting a user also deletes their reviews
- `CHECK` — validates data at insert/update time
- `UNIQUE` — composite unique constraint

</details>

### Exercise 62 — CREATE INDEX

Create an index to speed up queries that filter orders by `user_id`.

<details>
<summary>Show Answer</summary>

```sql
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

</details>

### Exercise 63 — Composite index

Create a composite index for queries that filter `order_items` by both `order_id` and `product_id`.

<details>
<summary>Show Answer</summary>

```sql
CREATE INDEX idx_order_items_order_product ON order_items(order_id, product_id);
```

A composite index benefits queries that filter on `order_id` alone, OR on `order_id + product_id` together. It does NOT help queries filtering only on `product_id` — the first column must be included.

</details>

### Exercise 64 — ALTER TABLE

Add a `phone` column (VARCHAR 20, nullable) to the `users` table.

<details>
<summary>Show Answer</summary>

```sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
```

</details>

### Exercise 65 — TRANSACTION

Transfer an order from user 1 to user 2. Wrap it in a transaction so that if any step fails, nothing is changed.

<details>
<summary>Show Answer</summary>

```sql
BEGIN;

UPDATE orders SET user_id = 2 WHERE id = 42 AND user_id = 1;

-- Check that exactly one row was affected before committing
-- In application code you would check rowcount here and ROLLBACK if 0

COMMIT;

-- If something went wrong:
-- ROLLBACK;
```

A transaction ensures all statements succeed together or none of them take effect. Use `ROLLBACK` to undo everything if an error occurs.

</details>


---


# Part 2 — MongoDB Exercises


## 2.01 Schema Reference

All MongoDB exercises use the following three collections.

```js
// db.users
{
  _id: ObjectId("..."),
  name: "Beatriz Santos",
  email: "beatriz@example.com",
  country: "Portugal",
  age: 25,
  tags: ["premium", "newsletter"],
  createdAt: ISODate("2024-01-15")
}

// db.products
{
  _id: ObjectId("..."),
  name: "Mechanical Keyboard",
  category: "Electronics",
  price: 89.99,
  stock: 50,
  ratings: [5, 4, 5, 3, 4]
}

// db.orders
{
  _id: ObjectId("..."),
  userId: ObjectId("..."),
  status: "delivered",
  total: 149.98,
  items: [
    { productId: ObjectId("..."), quantity: 2, unitPrice: 74.99 },
    { productId: ObjectId("..."), quantity: 1, unitPrice: 0.00 }
  ],
  createdAt: ISODate("2024-06-01")
}
```

Status values: `"pending"`, `"processing"`, `"shipped"`, `"delivered"`, `"cancelled"`
Tag values: `"premium"`, `"newsletter"`, `"beta-tester"`, `"inactive"`


## 2.02 Basic find()

### Exercise 1 — Find all documents

Return all documents in the `users` collection.

<details>
<summary>Show Answer</summary>

```js
db.users.find()
```

or with an empty filter:
```js
db.users.find({})
```

</details>

### Exercise 2 — Find one document

Return the first user document found.

<details>
<summary>Show Answer</summary>

```js
db.users.findOne()
```

`findOne()` returns a single document (or null). `find()` returns a cursor to all matching documents.

</details>

### Exercise 3 — Find by exact field value

Find the user with email `"beatriz@example.com"`.

<details>
<summary>Show Answer</summary>

```js
db.users.findOne({ email: "beatriz@example.com" })
```

</details>

### Exercise 4 — Projection (include fields)

Return all users but show only `name` and `email` (exclude everything else).

<details>
<summary>Show Answer</summary>

```js
db.users.find({}, { name: 1, email: 1, _id: 0 })
```

`1` = include. `0` = exclude. `_id` is included by default — you must explicitly set it to `0` to hide it. You cannot mix includes and excludes (except for `_id`).

</details>

### Exercise 5 — Projection (exclude fields)

Return all users but hide the `tags` and `createdAt` fields.

<details>
<summary>Show Answer</summary>

```js
db.users.find({}, { tags: 0, createdAt: 0 })
```

</details>

### Exercise 6 — Sort ascending

Return all users sorted by name A → Z.

<details>
<summary>Show Answer</summary>

```js
db.users.find().sort({ name: 1 })
```

`1` = ascending, `-1` = descending.

</details>

### Exercise 7 — Sort descending + limit

Return the 5 youngest users.

<details>
<summary>Show Answer</summary>

```js
db.users.find().sort({ age: 1 }).limit(5)
```

</details>

### Exercise 8 — Skip + limit (pagination)

Return the second page of users (5 per page) sorted by name.

<details>
<summary>Show Answer</summary>

```js
db.users.find().sort({ name: 1 }).skip(5).limit(5)
```

</details>

### Exercise 9 — Count documents

Count the total number of users.

<details>
<summary>Show Answer</summary>

```js
db.users.countDocuments({})
```

Prefer `countDocuments()` over the deprecated `.count()`.

</details>

### Exercise 10 — Count with filter

Count how many users are from Portugal.

<details>
<summary>Show Answer</summary>

```js
db.users.countDocuments({ country: "Portugal" })
```

</details>


## 2.03 Comparison & Logical Operators

### Exercise 11 — $gt / $lt

Find all products with a price greater than 50.

<details>
<summary>Show Answer</summary>

```js
db.products.find({ price: { $gt: 50 } })
```

Comparison operators: `$gt` (>), `$gte` (>=), `$lt` (<), `$lte` (<=), `$eq` (=), `$ne` (!=)

</details>

### Exercise 12 — $gte and $lte

Find products with a price between 10 and 100 (inclusive).

<details>
<summary>Show Answer</summary>

```js
db.products.find({ price: { $gte: 10, $lte: 100 } })
```

Multiple conditions on the same field are implicitly AND.

</details>

### Exercise 13 — $ne

Find all orders that are NOT in status `"cancelled"`.

<details>
<summary>Show Answer</summary>

```js
db.orders.find({ status: { $ne: "cancelled" } })
```

</details>

### Exercise 14 — $in

Find users from Portugal, Spain, or France.

<details>
<summary>Show Answer</summary>

```js
db.users.find({ country: { $in: ["Portugal", "Spain", "France"] } })
```

</details>

### Exercise 15 — $nin

Find products NOT in the 'Electronics' or 'Books' categories.

<details>
<summary>Show Answer</summary>

```js
db.products.find({ category: { $nin: ["Electronics", "Books"] } })
```

</details>

### Exercise 16 — $and (implicit)

Find users from Portugal older than 25 (implicit AND).

<details>
<summary>Show Answer</summary>

```js
db.users.find({ country: "Portugal", age: { $gt: 25 } })
```

Multiple fields in the same filter object are implicitly ANDed.

</details>

### Exercise 17 — $and (explicit)

Find users from Portugal older than 25 using the explicit `$and` operator.

<details>
<summary>Show Answer</summary>

```js
db.users.find({
  $and: [
    { country: "Portugal" },
    { age: { $gt: 25 } }
  ]
})
```

Use explicit `$and` when you need to apply multiple conditions to the **same field**. For different fields, the implicit version is simpler.

</details>

### Exercise 18 — $or

Find orders with status `"pending"` OR `"processing"`.

<details>
<summary>Show Answer</summary>

```js
db.orders.find({
  $or: [
    { status: "pending" },
    { status: "processing" }
  ]
})
```

</details>

### Exercise 19 — $or combined with other conditions

Find products in 'Electronics' with price below 50, OR any product in 'Books'.

<details>
<summary>Show Answer</summary>

```js
db.products.find({
  $or: [
    { category: "Electronics", price: { $lt: 50 } },
    { category: "Books" }
  ]
})
```

</details>

### Exercise 20 — $not

Find users whose age is NOT greater than 30 (i.e. age <= 30).

<details>
<summary>Show Answer</summary>

```js
db.users.find({ age: { $not: { $gt: 30 } } })
```

`$not` inverts the condition. This is equivalent to `{ age: { $lte: 30 } }`.

</details>

### Exercise 21 — Nested field query

Find all orders where the first item has a quantity greater than 2. (Access nested field with dot notation.)

<details>
<summary>Show Answer</summary>

```js
db.orders.find({ "items.0.quantity": { $gt: 2 } })
```

Dot notation accesses nested fields. `items.0` refers to the first element of the `items` array.

</details>


## 2.04 Arrays & Element Operators

### Exercise 22 — Array exact match

Find users with the tag `"premium"`.

<details>
<summary>Show Answer</summary>

```js
db.users.find({ tags: "premium" })
```

When the field is an array and you query with a scalar value, MongoDB checks if any element of the array matches. No special operator needed.

</details>

### Exercise 23 — $all

Find users who have BOTH the `"premium"` AND `"newsletter"` tags.

<details>
<summary>Show Answer</summary>

```js
db.users.find({ tags: { $all: ["premium", "newsletter"] } })
```

`$all` requires all specified values to be present in the array (order does not matter).

</details>

### Exercise 24 — $size

Find users with exactly 2 tags.

<details>
<summary>Show Answer</summary>

```js
db.users.find({ tags: { $size: 2 } })
```

`$size` matches arrays with exactly that number of elements. It does not support range queries — for that, use `$expr` or a computed field.

</details>

### Exercise 25 — $elemMatch

Find orders where at least one item has quantity >= 3 AND unitPrice > 50 (both conditions on the same array element).

<details>
<summary>Show Answer</summary>

```js
db.orders.find({
  items: {
    $elemMatch: { quantity: { $gte: 3 }, unitPrice: { $gt: 50 } }
  }
})
```

Without `$elemMatch`, the conditions could be satisfied by different array elements. `$elemMatch` ensures both conditions apply to the **same element**.

</details>

### Exercise 26 — $exists

Find users that have a `phone` field set.

<details>
<summary>Show Answer</summary>

```js
db.users.find({ phone: { $exists: true } })
```

`$exists: false` finds documents where the field is absent entirely (not the same as being null).

</details>

### Exercise 27 — $type

Find documents where the `age` field is stored as a number (not a string).

<details>
<summary>Show Answer</summary>

```js
db.users.find({ age: { $type: "number" } })
```

Useful for finding data quality issues — sometimes data arrives with the wrong type (e.g. age stored as the string `"25"` instead of the number `25`).

</details>


## 2.05 Insert, Update, Delete

### Exercise 28 — insertOne

Insert a new user: Beatriz, beatriz@example.com, Portugal, age 25, tags ["premium"].

<details>
<summary>Show Answer</summary>

```js
db.users.insertOne({
  name: "Beatriz",
  email: "beatriz@example.com",
  country: "Portugal",
  age: 25,
  tags: ["premium"],
  createdAt: new Date()
})
```

MongoDB generates `_id` automatically if not provided.

</details>

### Exercise 29 — insertMany

Insert three products at once.

<details>
<summary>Show Answer</summary>

```js
db.products.insertMany([
  { name: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 50, ratings: [] },
  { name: "Python Cookbook",     category: "Books",       price: 29.99, stock: 200, ratings: [] },
  { name: "Running Shoes",       category: "Sports",      price: 59.99, stock: 75, ratings: [] }
])
```

</details>

### Exercise 30 — $set — update a field

Update the email of the user named "Beatriz" to "b.santos@example.com".

<details>
<summary>Show Answer</summary>

```js
db.users.updateOne(
  { name: "Beatriz" },
  { $set: { email: "b.santos@example.com" } }
)
```

`$set` updates only the specified fields. Fields not mentioned are left unchanged. Without `$set`, the entire document would be replaced.

</details>

### Exercise 31 — $set — update multiple fields

Update user "Beatriz": set country to "Spain" and age to 26.

<details>
<summary>Show Answer</summary>

```js
db.users.updateOne(
  { name: "Beatriz" },
  { $set: { country: "Spain", age: 26 } }
)
```

</details>

### Exercise 32 — $unset — remove a field

Remove the `phone` field from all users.

<details>
<summary>Show Answer</summary>

```js
db.users.updateMany(
  {},
  { $unset: { phone: "" } }
)
```

The value `""` is ignored — any value works. `$unset` simply removes the field from the document.

</details>

### Exercise 33 — $inc — increment a numeric field

Increase the stock of product "Mechanical Keyboard" by 20.

<details>
<summary>Show Answer</summary>

```js
db.products.updateOne(
  { name: "Mechanical Keyboard" },
  { $inc: { stock: 20 } }
)
```

Use a negative number to decrease: `{ $inc: { stock: -5 } }`.

</details>

### Exercise 34 — $push — add element to array

Add the tag `"beta-tester"` to user "Beatriz".

<details>
<summary>Show Answer</summary>

```js
db.users.updateOne(
  { name: "Beatriz" },
  { $push: { tags: "beta-tester" } }
)
```

`$push` always adds the element, even if it already exists. Use `$addToSet` to avoid duplicates.

</details>

### Exercise 35 — $addToSet — add without duplicates

Add the tag `"newsletter"` to user "Beatriz" only if it is not already there.

<details>
<summary>Show Answer</summary>

```js
db.users.updateOne(
  { name: "Beatriz" },
  { $addToSet: { tags: "newsletter" } }
)
```

</details>

### Exercise 36 — $pull — remove element from array

Remove the tag `"inactive"` from all users.

<details>
<summary>Show Answer</summary>

```js
db.users.updateMany(
  {},
  { $pull: { tags: "inactive" } }
)
```

`$pull` removes all occurrences of the specified value from the array.

</details>

### Exercise 37 — $push with rating

Add a new rating of `5` to the "Mechanical Keyboard" product's ratings array.

<details>
<summary>Show Answer</summary>

```js
db.products.updateOne(
  { name: "Mechanical Keyboard" },
  { $push: { ratings: 5 } }
)
```

</details>

### Exercise 38 — Upsert

Update the user with email "new@example.com" — if they do not exist, create them.

<details>
<summary>Show Answer</summary>

```js
db.users.updateOne(
  { email: "new@example.com" },
  { $set: { name: "New User", country: "France", age: 30, tags: [] } },
  { upsert: true }
)
```

`upsert: true` creates the document if no match is found. The filter fields (`email`) are also included in the created document.

</details>

### Exercise 39 — updateMany

Mark all orders with status `"pending"` that are older than 30 days as `"cancelled"`.

<details>
<summary>Show Answer</summary>

```js
db.orders.updateMany(
  {
    status: "pending",
    createdAt: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
  },
  { $set: { status: "cancelled" } }
)
```

</details>

### Exercise 40 — deleteOne

Delete the user with email "beatriz@example.com".

<details>
<summary>Show Answer</summary>

```js
db.users.deleteOne({ email: "beatriz@example.com" })
```

`deleteOne` deletes the first matching document. If multiple documents match, only one is deleted.

</details>

### Exercise 41 — deleteMany

Delete all products with stock equal to 0.

<details>
<summary>Show Answer</summary>

```js
db.products.deleteMany({ stock: 0 })
```

</details>


## 2.06 Aggregation Pipeline

The aggregation pipeline processes documents through a sequence of stages. Each stage transforms the documents and passes results to the next stage.

Common stages: `$match`, `$group`, `$sort`, `$project`, `$limit`, `$skip`, `$unwind`, `$lookup`, `$count`, `$addFields`.

### Exercise 42 — $match

Using the aggregation pipeline, find all orders with status `"delivered"`.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  { $match: { status: "delivered" } }
])
```

`$match` is equivalent to `find()`. Always put `$match` as early as possible in the pipeline to filter documents before later stages process them.

</details>

### Exercise 43 — $count

Count how many orders have status `"pending"`.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  { $match: { status: "pending" } },
  { $count: "pending_orders" }
])
```

</details>

### Exercise 44 — $group — count per group

Count the number of orders per status.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])
```

`_id` in `$group` defines the grouping key. Use `"$fieldName"` (with `$`) to reference a document field. `{ $sum: 1 }` increments by 1 for each document — i.e. counts.

</details>

### Exercise 45 — $group — sum

Calculate the total revenue across all delivered orders.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  {
    $group: {
      _id: null,
      total_revenue: { $sum: "$total" }
    }
  }
])
```

`_id: null` groups all documents into one group (no grouping key — equivalent to SQL's `SELECT SUM(...) FROM ...` without `GROUP BY`).

</details>

### Exercise 46 — $group — multiple accumulators

For each user, calculate the number of orders, total spent, and average order value.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $group: {
      _id: "$userId",
      order_count:    { $sum: 1 },
      total_spent:    { $sum: "$total" },
      avg_order_value: { $avg: "$total" }
    }
  },
  { $sort: { total_spent: -1 } }
])
```

</details>

### Exercise 47 — $project

Return only the `status` and `total` fields from orders, and add a computed field `isHighValue` (true if total > 100).

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $project: {
      status: 1,
      total: 1,
      isHighValue: { $gt: ["$total", 100] }
    }
  }
])
```

`$project` reshapes documents — include/exclude fields and add computed fields using expressions.

</details>

### Exercise 48 — $addFields

Add a field `discountedTotal` (total minus 10%) to all orders without removing other fields.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $addFields: {
      discountedTotal: { $multiply: ["$total", 0.9] }
    }
  }
])
```

`$addFields` is like `$project` but keeps all existing fields and only adds the new ones.

</details>

### Exercise 49 — $sort + $limit — top spenders

Find the top 5 users by total spending.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $group: {
      _id: "$userId",
      total_spent: { $sum: "$total" }
    }
  },
  { $sort: { total_spent: -1 } },
  { $limit: 5 }
])
```

</details>

### Exercise 50 — $unwind

Each order has an `items` array. Flatten the orders so each item becomes its own document.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  { $unwind: "$items" }
])
```

`$unwind` deconstructs an array field — if an order has 3 items, the pipeline produces 3 separate documents (one per item), each with all the order's fields plus the individual item.

Before: `{ _id: 1, items: [A, B, C] }`
After: `{ _id: 1, items: A }`, `{ _id: 1, items: B }`, `{ _id: 1, items: C }`

</details>

### Exercise 51 — $unwind + $group — total quantity per product

Using `$unwind` on the `items` array, calculate the total quantity sold per product.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.productId",
      total_quantity: { $sum: "$items.quantity" }
    }
  },
  { $sort: { total_quantity: -1 } }
])
```

</details>

### Exercise 52 — $lookup — join with another collection

Join orders with user names (equivalent of a SQL JOIN between `orders` and `users`).

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $lookup: {
      from:         "users",       // collection to join
      localField:   "userId",      // field in orders
      foreignField: "_id",         // field in users
      as:           "user"         // name of the new array field
    }
  },
  { $unwind: "$user" },            // flatten the array (each order has one user)
  {
    $project: {
      _id: 1,
      status: 1,
      total: 1,
      "user.name": 1,
      "user.email": 1
    }
  }
])
```

`$lookup` adds the joined documents as an array field. Since each order belongs to exactly one user, `$unwind` flattens it to a single object.

</details>

### Exercise 53 — Monthly revenue

Calculate total revenue grouped by year and month.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  {
    $group: {
      _id: {
        year:  { $year:  "$createdAt" },
        month: { $month: "$createdAt" }
      },
      monthly_revenue: { $sum: "$total" },
      order_count:     { $sum: 1 }
    }
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } }
])
```

</details>

### Exercise 54 — Complex pipeline

Find the top 3 product categories by total revenue (only from delivered orders), including number of items sold.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  // 1. Only delivered orders
  { $match: { status: "delivered" } },

  // 2. Flatten items array
  { $unwind: "$items" },

  // 3. Join each item with its product to get the category
  {
    $lookup: {
      from:         "products",
      localField:   "items.productId",
      foreignField: "_id",
      as:           "product"
    }
  },
  { $unwind: "$product" },

  // 4. Group by category
  {
    $group: {
      _id:           "$product.category",
      total_revenue: { $sum: { $multiply: ["$items.quantity", "$items.unitPrice"] } },
      total_qty:     { $sum: "$items.quantity" }
    }
  },

  // 5. Sort and limit
  { $sort: { total_revenue: -1 } },
  { $limit: 3 }
])
```

</details>

### Exercise 55 — $bucket — group products by price range

Group products into price buckets: 0–25, 25–50, 50–100, 100+.

<details>
<summary>Show Answer</summary>

```js
db.products.aggregate([
  {
    $bucket: {
      groupBy:    "$price",
      boundaries: [0, 25, 50, 100],
      default:    "100+",
      output: {
        count:     { $sum: 1 },
        avg_price: { $avg: "$price" },
        products:  { $push: "$name" }
      }
    }
  }
])
```

`$bucket` distributes documents into ranges. `boundaries` defines the lower bounds of each bucket. Values >= the last boundary go into `default`.

</details>

### Exercise 56 — $facet — multiple aggregations in one pass

In a single aggregation, return simultaneously: count per status, average total, and top 3 users by spending.

<details>
<summary>Show Answer</summary>

```js
db.orders.aggregate([
  {
    $facet: {
      by_status: [
        { $group: { _id: "$status", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ],
      overall_stats: [
        { $group: { _id: null, avg_total: { $avg: "$total" }, total_revenue: { $sum: "$total" } } }
      ],
      top_users: [
        { $group: { _id: "$userId", spent: { $sum: "$total" } } },
        { $sort: { spent: -1 } },
        { $limit: 3 }
      ]
    }
  }
])
```

`$facet` runs multiple sub-pipelines in parallel on the same input documents and returns all results in a single document. Very useful for dashboards that need multiple aggregations from the same data.

</details>