- QUERY PLAN BUILDER

- What schema contains:
  + Tables, Indexes, Constraints, Views
  + Also refers statistics about the distritution of data in tables and in indexes
  Use ANALYZE to get these statistics
  We can collect this data by running AUTOVACUUM daemon or running the VACUUM 
  command manually

  The VACUUM command reclaims the space of updated data

  REINDEX:
    - Rebuilds corrupt indexes 
    - Shouldnt be needed, but there are bugs
    - Cleans up unused pages in B-Tree indexes
    - REINDEX INDEX [indexname|tablename|schemaname]

- Parallel Query Execution

- Miscellaneous tips:
  + Create indexes on JOIN columns, same for columns used in WHERE clauses
  + Use covering indexes
  + Do not filter on a column using equality to NULL (IS NULL instead)
  + Do not use function in WHERE clauses unless you have a functional index
  + If a plan uses index ranger scan, keep the range as small as possible
  + Use equality with condition whenever possible
  + Be careful when using the like operator: 
    LIKE 'ABC%' can use index, LIKE '%ABC' cannot
  + If you have a frequently run query with an ORDER BY, consider using an index
  on the same set of columns in the ORDER BY statement. That can help avoid sorts
  + When filtering on a range condition, especially dates, use continuous conditions, 
  such as TRUNC(sysdate) and TRUNC(sysdate + 1)
  + Do not separate date and time into separate columns, use a datetime datatype
  + Do not store numeric data as CHAR, VARCHAR or TEXT 


  PRACTICE WITH EXPLAIN