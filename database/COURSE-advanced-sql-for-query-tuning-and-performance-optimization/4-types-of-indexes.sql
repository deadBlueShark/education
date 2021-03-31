- Purposes of indexes:  
  + Speed up access data
  + Help enforce constraints (Ex: if we have a unique constraint on a column, when
  we add a new row and we can see if the value of the index column is already in the 
  index. This is faster than scanning the table to see if any row has a duplicated value.)
  + Indexes are ordered
  + Typically smaller than tables

- Indexes holds the value of the index column and pointer to the location of 
corrresponding rows
- Indexes are not always unique, there can be duplicated in the index
- Indexes use storage space in addition to what is in the table. But there contributions
to efficient queries processing outweights the cost of the additional storage.
This is not always the case, for example, if most queries on a table require a 
full table scan, then the index may not be used

- Types of indexes: 
  + B-Tree (Blance tree)
  + Bitmap: used when column have few distinct values (low cardinality)
  + Hash
  + Special purposes indexes

- B-Tree Uses:
  + Default type of index
  + Most common type of index 
  + Used when a large number of possible values in a column (high cardinality)
  + Re-balances as needed to keep the depth of the tree about the same for all
  paths, this prevents a lopsided (lệch) tree that would be fast to search on 
  one side and slower on the other.

- Bitmap Uses:
  + Used when small number of possible values in a column
  + Filter by bitwise operations (AND, OR, NOT)
  + Tend to be used in read-intensive use cases, few writes like data warehouses

  + Updating Bitmap indexes can be more time consuming than other types of indexes
  + Time to access is based on time to perform bitwise operations

  + Bitmap index availability: 
    * Some DBs allows you to create bitmap indexes explicitly (Oracle, PostgreSQL 
    does not)
    * PostgreSQL builds bitmap indexes on the fly as needed. You may see bitmap 
    indexes in some of your explained execution plans even you did not explicitly
    create them

- Practices: 
  + Hash indexes: 
    * Hash functions: 
      - Function for mapping arbitrary length data to a fixed-size string
      - Size of hash value depends on algorithm used

    * Things to keep in mind:
      - Only used for equality comparisons (=)
      - Smaller size than B-Tree  
      - As fast as B-Tree
    Ex: 'email' column is a good candidate since the email should be unique to each
    person, and its likely we want to be able to look up user by their email, not
    a range query on the email addresses