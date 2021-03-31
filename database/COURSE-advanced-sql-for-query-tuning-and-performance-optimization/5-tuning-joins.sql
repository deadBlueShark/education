- Joining tables can be an expensive operation, so they are a good target for 
your tuning efforts
- Types of Join:
  + Inner Join: most common, return rows from both tables that have corresponding 
 row in other table
  + Left Outer Join: returns all rows from the left table and rows from the right 
  table which have matching key
  + Right Outer Join: work the left outer join, but in other direction
  + Full Outer Join: returns all rows from both tables, when there isnt a matching
  row in one of the tables, `null` will be returned

- Nested loop: 
  + Naive approach to join tables:

  for rows in table 1:
    for rows in table 2
  
  + Outer loop iterates over one table (calls driver table)
  + Inner loop iterates over other table, (calls the join table)

  + Work with any kind of join conditions
  + Low overhead, we do not need to create other data structures or sort tables
  before looking for matches between FK and PK
  + Work well in small driver tables and joins column is indexed

  + Can be slow
  + If table do not fit in memory, even slower performance
  + Indexes can improve the performance of nested loop joins, especially covered
  indexes(indexes include all the columns returned by your query). In that case, 
  the execution plan wont have to read data from the table, in can read data from 
  the index

- Hash join: Provide fast lookups, that can be faster than other join methods
- Merged join: especially useful when tables dont fit into memory, because we do 
fewer reads from disk than we would likely have to do if we used nested loop join.

- JOIN VS SUBQUERIES

select s.id, s.last_name, s.department, (select company_region 
from company_regions cr where cr.region_id = s.region_id) as region_name
from staff s

Re-write with JOIN:

select s.id, s.last_name, s.department, cr.company_region as region_name
from staff s inner join company_regions cr on cr.region_id = s.region_id

Which to use?
- Conventional wisdom: always use JOINs, they are more efficient
- Improved Query Plan: Above statement may have been true in the past, but optimizers
have improved over time and can build efficient execution plans for subqueries

-> Advice: Optimize for clarity. Both will work well in many cases. Use the method
that makes your intentions clear. If there is a significance performance difference
then choose the optimal one and document your query so others, who are reading your 
code can immediately understand your intentions