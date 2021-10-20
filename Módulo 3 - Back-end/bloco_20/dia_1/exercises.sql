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
	MAX(ROUND(salary, 2)) AS `Maior salario`,
	MIN(ROUND(salary, 2)) AS `Menor salario`,
    SUM(ROUND(salary, 2)) AS `Soma dos salarios`,
    AVG(ROUND(salary, 2)) AS `Média de salarios`
FROM employees;

-- Exercício 6:
SELECT
	SUM(JOB_ID = 'IT_PROG') AS `Total de programadores`
FROM employees;

-- Exercício 7:
SELECT
	JOB_ID,
	SUM(salary) AS `Total de pagamentos`
FROM employees
GROUP BY JOB_ID;

-- Exercício 8:
SELECT
	JOB_ID,
	SUM(salary) AS `Total de pagamentos`
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercício 9:
SELECT 
	JOB_ID,
	AVG(salary) AS `Média Salarial`
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY `Média Salarial` DESC;

-- Exercício 10:
 SELECT
	DEPARTMENT_ID,
    AVG(salary) AS `Média salairal`,
    COUNT(employee_id) AS `Total de funcionários`
FROM employees
GROUP BY DEPARTMENT_ID
HAVING `Total de funcionários` < 10;
    