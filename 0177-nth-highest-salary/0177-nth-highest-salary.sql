CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE offset_val INT;

  SET offset_val = N - 1;

  IF offset_val < 0 THEN
    RETURN NULL;
  END IF;


  RETURN (
    SELECT (
        SELECT DISTINCT
            salary
        FROM Employee
        ORDER BY salary desc
        LIMIT offset_val, 1
    )
  );
END