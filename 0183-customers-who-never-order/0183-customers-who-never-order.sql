# Write your MySQL query statement below
SELECT 
    name as Customers
FROM Customers c 
LEFT JOIN Orders o ON o.customerId = c.id
WHERE customerId is null;