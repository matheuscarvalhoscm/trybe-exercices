SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.Books;

SELECT Id, Title FROM hotel.Books AS b
WHERE NOT EXISTS(
	SELECT Id FROM hotel.Books_Lent
    WHERE book_id = b.Id
);

SELECT Id, Title FROM hotel.Books as b
WHERE EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE returned IS FALSE
    AND Title LIKE '%lost'
);

SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT `Name` FROM hotel.Customers AS CUS
WHERE EXISTS(
	SELECT * FROM hotel.CarSales
    WHERE CustomerID = CUS.CustomerId
);