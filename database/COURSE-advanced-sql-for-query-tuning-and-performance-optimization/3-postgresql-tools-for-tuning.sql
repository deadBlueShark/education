- Only select necessary columns to reduce width command
- Using where condition without indexes slow the execution time
- If there are so many rows that matches the query condition, the query execution 
builder will determine it would be faster to simply scan the table rather than 
look up those rows in the index (PostgreSQL). This is a case where our WHERE clause 
is not selective enough to warrant (đảm bảo, cho phép) using an index