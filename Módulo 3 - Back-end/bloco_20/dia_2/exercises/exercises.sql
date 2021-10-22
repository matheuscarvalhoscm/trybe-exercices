USE Pixar;

-- Exercício 1:
SELECT 
    M.id, M.title, BO.domestic_sales, BO.international_sales
FROM
    BoxOffice AS BO
        INNER JOIN
    Movies AS M ON M.id = BO.movie_id;

-- Exercício 2:
SELECT 
    M.id, M.Title, BO.international_sales
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS BO ON M.id = BO.movie_id
        AND BO.international_sales > BO.domestic_sales;

-- Exercício 3:
SELECT 
    M.title, BO.rating
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS BO ON M.id = BO.movie_id
ORDER BY BO.rating DESC;

-- Exercício 4:
SELECT
	*
FROM Theater AS T
LEFT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.`name`;

-- Exercício 5:
SELECT 
	*
FROM Movies AS M
RIGHT JOIN Theater AS T
ON M.theater_id = T.id
ORDER BY T.name;

-- Exercício 6:
SELECT title 
FROM Movies
WHERE id IN
	(SELECT 
		movie_id
		rating
	 FROM BoxOffice
	 WHERE rating > 7.5
     AND id = movie_id
	);
    
SELECT 
    M.title
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS BO ON BO.rating > 7.5 AND M.id = BO.movie_id;
    
-- Exercício 7:
SELECT rating
FROM BoxOffice
WHERE movie_id IN 
	(SELECT 
		id
        `year`
	 FROM Movies
	 WHERE `year` > 2009
     AND movie_id = id
	);

SELECT 
	BO.rating
FROM BoxOffice AS BO
INNER JOIN Movies AS M
ON BO.rating > 2009 AND M.id = BO.movie_id;

-- Exercício 8:
 SELECT 
	`name`,
    location 
FROM Theater AS T
WHERE EXISTS
	(SELECT 
		id
	 FROM Movies 
     WHERE theater_id = T.id
	);
 
-- Exercício 9:
 SELECT 
	`name`,
    location 
FROM Theater AS T
WHERE NOT EXISTS
	(SELECT 
		id
	 FROM Movies 
     WHERE theater_id = T.id
	);
