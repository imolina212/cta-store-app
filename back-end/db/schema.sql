DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    image TEXT,
    description TEXT,
    price INT,
    rating INT,
    featured BOOLEAN
);
