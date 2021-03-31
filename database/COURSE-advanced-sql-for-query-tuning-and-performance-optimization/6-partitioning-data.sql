- Horizontal partitioning:
  + Large tables can be difficult to query efficiently (event with indexes)
  + Split tables by rows into partitions
  + Treat each partions like a table

- Benefits: 
  + Limit scans to subset of partitions
  + Local indexes for each partition
  + Can make bulk data operations, like dropping old data more efficient, 
  because we can drop an entire partition quickly. If we need to drop a subset of 
  rows, that may be faster too, because smaller indexes can be updated faster than
  much larger indexes

- Partitioning is widely used in 
  + Data warehouses: they are often partitioned based on time, because time is
  commonly used to filter data
  + Timeseries data: is also a good candidate for using partitioning:
    * Most likely query latest data  
    * Summarize data in older partitions
  + Natural partition data:
    * Retailer, by geography
    * Data science, by product category

- Vertical partitioning: 
  + Implement multiple tables, put our different partitions in different tables
  + No partitioning-specific definitions are required
  + Ex: 
    * Separate columns into multiple tables
    * Keep frequently queried columns together
    * Use same PK accross all of the partitions
