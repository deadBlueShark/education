- A regular table in the Oracle database, also known as a heap table, contains 
an unordered set of records, so to locate a specific record, based on one or 
more value you have to scan the entire table

- Oracle provides several types of indexes:
  + Most common type: B-Tree 
  + Index created on multiple columns is known as a composite index 
  + Indexes can be explicitly created by users or implicitly careated alongside 
primary key or unique constraints

- Creating indexex on too many of your table columns can slow the update, delete,
insert action. Each time you insert, delete, update a row, indexes associated with 
that record will also have to be updated as well.
-> Create indexes only on columns that are often used in the where clause of your 
queries

We can confirm that the database will be indeed using the index to access the data
by reviewing the query execution plan 