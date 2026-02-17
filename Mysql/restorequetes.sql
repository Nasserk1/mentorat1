-- point a
SELECT * FROM dishes; 
-- point b
SELECT name, price FROM Dishes;
-- point c 
SELECT name FROM Dishes WHERE price>10 ORDER BY price DESC;
--point d
SELECT firstname, lastname FROM customers WHERE registration_date LIKE "%2024%";
-- point e
mysql> SELECT COUNT(*) FROM Dishes GROUP BY category_id;
-- point f
SELECT * FROM Ingredients LIKE is_allergen;
--point g
SELECT dishes.name, categories.name FROM dishes JOIN categories ON dishes.category_id=categories.id;
