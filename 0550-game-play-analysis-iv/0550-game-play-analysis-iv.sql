# Write your MySQL query statement below
SELECT 
    ROUND(
        SUM(
            CASE WHEN temp.min_date = DATE_SUB(a.event_date, INTERVAL 1 DAY) THEN 1 ELSE 0 END
        ) 
        / 
        COUNT(DISTINCT temp.player_id)
        , 2
    ) as fraction
FROM (
    SELECT 
        player_id, 
        MIN(event_date) as min_date
    FROM Activity
    GROUP BY player_id
) as temp
JOIN Activity a ON temp.player_id = a.player_id