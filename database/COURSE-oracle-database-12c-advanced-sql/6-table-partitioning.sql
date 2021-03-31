- Table partitioning allows a database table to be subdivided into smaller pieces
or elements. Each pieces is known as a table partition. Each table partition has 
its own name and is technically a separate physical and logical database objects.

However, from the perspective of the application a partition table is pretty much 
identical to a non-partion table.

- The benefits of the table being partitioned all occur under the hood. No
modifications are necessary when your applications are accessing a partition table 
using sequel queries or DML statements

- Partitioning types: 
  + List partitioning: a limited set of possible values is given for each partition.
  Rows containing the same values are grouped together in individual partition. This 
  type of partitioning is useful for columns with few distinct values and where all 
  values are known.

  Ex: Partition `sales` table by region

  + Range partitioning: We map data to partitions based on ranges of values for 
  the partition key. We specify for each partition we create which range of values 
  should reside in that partition

  Ex: Partition `sales` table by month of `sale_date`

  + Hash partitioning: Use hash key to distribute rows evenly across different table
  partitions. This technique is useful when other type of methods arent feasible.
  Hash Partitioning is most suitable for data that has no natural ranges by which 
  you can partition it.

  + Interval partitioning
  + Composite partitioning
  + Automatic list partitioning

Practice:
  - Create list partition when create table
  - You can alter table to add new partition to existed table, if existed table 
  have default partition, you have to split partition

  - Note: In range partitioning, you have to maintain the up-to-date
  list of table partitions based on the value you expect to store in table.
  Ex: if your range partitioning table is based on a date column, it might be 
  advisable to create partitions in advance for the entire year perhaps and 
  once the next year is around the corner, it is advisable to pre-create the next
  batch of partitions for the table.
  (Can be automatical by using a scheduled database job in Oracle)