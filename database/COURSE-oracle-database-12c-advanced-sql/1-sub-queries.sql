- Subqueries is a SQL query that is nested inside another query:
  + Can be nested inside the WHERE clause 
  + Can be nested inside the FROM clause
  + Can be nested inside SELECT clause

-> These are called inline views, which are commonly used to simplify complex 
queries by removing JOIN operators and condensing(cô đặc) several queries into a single 
unified query

Ex:
SELECT * FROM employees WHERE age > (SELECT AVERAGE(age) FROM employees);

-- Find the three highest-earning employees in the company
-- (subquery like a virtual table)
SELECT * FROM (SELECT * FROM employees ORDER BY salary DESC) WHERE ROWNUM <= 3;

select * from employees where ROWNUM <= 3 order by salary desc;  
SELECT * FROM (SELECT * FROM employees ORDER BY salary DESC) WHERE ROWNUM <= 3;

-- Single-value subquery:
select * from employees where salary = (select max(salary) from employees);

-- multiple-value subquery:
select * from employees where department_id in 
(select department_id from departments where location_id = 1700);

select * from employees where department_id not in 
(select department_id from departments where location_id = 1700);

-- correlated subquery: (the inner query depends on values provided by the external query)
-- Also known as a synchronized subquery
-- The subquery may be evaluated once for each row processed by the outer query, it can be slow
-- Find employees whose salary is higher than the everage of their department:
select * from employees emp 
where salary > (select avg(salary) from employees where employees.department_id = emp.department_id);

-- multi-columns subqueries
select * from employees where (salary, job_id) in 
(select min_salary, job_id from jobs);

-- using inline views: when a multi-column subquery is used in the FROM clause of
-- the external query, it is called as an inline view, which is essentially a virtual
-- or temporary table that is created by the inner query for the purpose of the 
-- external query.
select * from (select department_id, count(*) emp_count from employees group by department_id)
emp join departments dept on emp.department_id = dept.department_id;


                      