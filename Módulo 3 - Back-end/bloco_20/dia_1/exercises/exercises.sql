USE hr;

-- Exercício 1:
SELECT MAX(salary) FROM employees;

-- Exercício 2:
SELECT MAX(salary) - MIN(salary) FROM employees;

-- Exercício 3:
SELECT 
    job_id,
    AVG(salary) AS `Média Salarial`
FROM employees
GROUP BY job_id;

-- Exercício 4:
SELECT SUM(salary) FROM employees;

-- Exercício 5:
SELECT 
	MAX(ROUND(salary, 2)) AS `Maior salário`,
	MIN(ROUND(salary, 2)) AS `Menor salário`,
    SUM(ROUND(salary, 2)) AS `Soma dos salários`,
    AVG(ROUND(salary, 2)) AS `Média de salários`
FROM employees;

