- Materialized views are used to store the results of pre-compute queries
- The will take up space: duplicate data that is already stored in tables
- Data in materialized views can be stale(cũ), the update operations on source 
tables do not update the materialized views. To do that, we need to issue the 
refresh command