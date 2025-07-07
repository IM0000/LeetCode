# Write your MySQL query statement below
SELECT Department, Employee, Salary
FROM    
    (SELECT
        d.name AS Department,
        e.name AS Employee,
        salary AS Salary,
        rank() over (partition by d.name order by salary desc) as rnk
    FROM Employee e
    JOIN Department d ON e.departmentId = d.id) as ed
WHERE rnk = 1