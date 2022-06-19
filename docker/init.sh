#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE TABLE users ( 
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    );
    INSERT INTO users (name, email)
    VALUES 
        ('Adam', 'adam@heaven.com'),
        ('Eva', 'eva@heaven.com'),
        ('Jesus', 'jesus@heaven.com'),
        ('Evil', 'evil@heaven.com');
EOSQL