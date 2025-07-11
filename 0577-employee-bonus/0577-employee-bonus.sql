# Write your MySQL query statement below
SELECT name, ifnull(bonus, null) as bonus
FROM Employee e
LEFT JOIN Bonus b ON e.empId = b.empId
HAVING bonus < 1000 or bonus is null