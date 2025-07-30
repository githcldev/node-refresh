SELECT 
   first_name || ' ' || last_name full_name,
   -- first_name || ' ' || last_name AS full_name,
   LENGTH(first_name) len, email
FROM customer
ORDER BY
    len ASC NULLS LAST; -- DESC, -- NULLS FIRST

select * from address
	order by
		address2 ASC NULLS FIRST;

-- no value is not equal to [null]

select address2 from address
where address2 IS NULL;
-- where address2 = '';

SELECT DISTINCT
  rental_rate
FROM
  film
ORDER BY
  rental_rate;




SELECT NOW(); -- ts with tz
