SELECT
    first_name, last_name,
    LENGTH(first_name) name_length 
FROM customer
WHERE
    -- first_name IN ('Ann', 'Anne', 'Annie')
    -- first_name LIKE 'Ann%'
	-- last_name <> 'Motley'
	last_name NOT IN ('Rea','Ebert','Houle','Motley')
	AND LENGTH(first_name) BETWEEN 3 AND 6
ORDER BY LENGTH(first_name) ASC
LIMIT 20 OFFSET 2;

SELECT 1 = 1 AS result; -- true, t, y, yes, 1
SELECT false AND null AS result;    --  false
SELECT true AND null AS result;     --  true
SELECT false OR null AS result;     --  null

SELECT first_name   FROM customer
-- FETCH FIRST 10 ROWS ONLY;
OFFSET 5 ROWS FETCH NEXT 10 ROWS ONLY ;








