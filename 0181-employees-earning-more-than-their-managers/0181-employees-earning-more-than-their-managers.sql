# Write your MySQL query statement below
SELECT 
    e.name AS Employee
FROM Employee e
JOIN Employee ee ON e.managerId = ee.id
WHERE ee.salary < e.salary;