# Write your MySQL query statement below
SELECT
    s.product_id,
    p.product_name
FROM Sales s
JOIN Product p ON s.product_id = p.product_id
GROUP BY s.product_id
HAVING max(sale_date) <= '2019-03-31' and min(sale_date) >= '2019-01-01'