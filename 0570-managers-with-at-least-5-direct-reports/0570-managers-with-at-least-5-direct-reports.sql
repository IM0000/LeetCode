# Write your MySQL query statement below
SELECT
    e.name
FROM (
    SELECT 
        managerId,
        COUNT(managerId) as cnt
    FROM Employee
    GROUP BY managerId
) c
JOIN Employee e ON e.id = c.managerId
WHERE c.cnt >= 5