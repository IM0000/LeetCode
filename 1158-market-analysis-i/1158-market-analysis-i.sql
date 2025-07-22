# Write your MySQL query statement below
SELECT 
    u.user_id as buyer_id,
    u.join_date,
    (count(o.buyer_id)) as orders_in_2019
FROM USERS u
LEFT JOIN Orders o ON u.user_id = o.buyer_id AND YEAR(order_date) = 2019
GROUP BY user_id