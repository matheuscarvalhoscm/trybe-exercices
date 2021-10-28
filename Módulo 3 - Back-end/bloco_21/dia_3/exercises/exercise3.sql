USE sakila;

CREATE VIEW address_info AS
SELECT 
  A.address_id,
  A.address,
  A.district,
  A.city_id, 
  C.city
FROM 
  address AS A
  INNER JOIN city AS C ON C.city_id = A.city_id
ORDER BY
  C.city;