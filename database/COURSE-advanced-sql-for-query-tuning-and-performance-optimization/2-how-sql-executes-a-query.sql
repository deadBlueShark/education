- SQL Execution Plans:
  + SQL query processors take declarative statements and create procedural plans
  which are a set of steps that scan, filter and join data

- Execution plans can be efficient or inefficient

- Scanning tables and Indexes 
  + Scanning table: the process of accessing each row in a table.
We can also scan indexes, which really are a special kind of table.
Scanning is a linear operation. 
      * Cost based on number of rows: 
        - Scanning small tables is efficient
        - Scanning large tables can be efficient if few queries
        - Scanning large tables repeatedly is inefficient

  + Indexing reduces full table scans
    * If you see a full table scan in a query execution plan, its worth looking
    into why a full table scan was chosen and seeing if there isnt a more efficient
    way to retrieve the data
    * Creating indexes is a good way to avoid full table scans and make execution
    more efficient
    * Indexes are ordered subsets of data in a table
    * An entry in an index contains the data value that is basis for the index
    and a pointer to the location of the corresponding row. If the WHERE clause 
    references the index value, you can use the index to find rows that meet the
    criteria rather than scanning the entire table

- Types of indexes:
  + B-Tree: for equality and range queries
  + Hash indexes: for equality
  + Bitmap: for inclusion (intersection, union)
  + Specialized indexes: for geo-spatial or user-defined indexing strategies

- Join tables execution plan: 
  + FK in one table that corresponds to the PK in another table

  + There are 3 ways to join tables:
    * Nested Loop Join: Compare all rows in both tables to each other
      - Loop through one table
      - For each row, loop through the other table
      - At each step, compare keys
      - Advantages:
        + Simple to implement
        + Can be used to perform any type of join
      - Disadvantages:
        + Have higher cost than other join methods

    * Hash Join: Calculate hash value of key and join based on matching hash values
      - Compute hash values of key values in smaller table
      - Store in a hash table, which has hash value and row attributes
      - Scan larger table, calculating the hash values of each key as it goes and 
      use that to find rows from smaller hash table
      - Could be used for joins that have an equality comparison

    * Sort Merged Join: Sorth both tables and then join rows while taking advantage 
    of order
      - Start by sorting both tables, then compares rows like nested loop joins
      but it can stop scanning when its no longer possible to find a match later 
      in the table because of the sort order
      - Unlike nested loop join, the driving table is scanned only once

  - We can use partition to avoid full table scan
  We can use indexes with partitions:
    + Local indexes are used to improve the access time to rows in a partition 
    + Global indexes provides faster lookup to any data in the table across all 
    partitions