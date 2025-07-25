# Write your MySQL query statement below
WITH all_ids AS (
   SELECT requester_id AS id 
   FROM RequestAccepted
   UNION ALL
   SELECT accepter_id AS id
   FROM RequestAccepted
)
SELECT 
    id,
    count(id) as num
FROM all_ids
GROUP BY id
ORDER BY count(id) DESC
LIMIT 1