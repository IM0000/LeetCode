# Write your MySQL query statement below
SELECT DISTINCT
    player_id,
    first_value(event_date) over (PARTITION BY player_id ORDER BY event_date) as first_login
FROM Activity