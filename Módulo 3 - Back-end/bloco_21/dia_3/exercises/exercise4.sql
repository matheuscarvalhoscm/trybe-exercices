USE sakila;

CREATE VIEW movies_language AS
SELECT
  F.title,
  F.language_id,
  L.name
FROM 
  film AS F
  INNER JOIN language AS L ON L.language_id = F.language_id;