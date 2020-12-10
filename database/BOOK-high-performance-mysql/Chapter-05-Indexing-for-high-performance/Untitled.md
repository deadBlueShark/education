## Indexing Basics

An index contains values from one or more columns in a table. If you index more than one column, the column order is very important, because MySQL can only search efficiently on a leftmost prefix of the index. Creating an index on two columns is not the same as creating two separate single-column indexes, as you’ll see.

#### 1. Types of Indexes

Indexes are implemented in the storage engine layer, not the server layer. Thus, they are not standardized: indexing works slightly differently in each engine, and not all engines support all types of indexes. Even when multiple engines support the same index type, they might implement it differently under the hood.

Let’s look at the index types MySQL currently supports, their benefits, and their drawbacks.

##### a. B-Tree indexes

When people talk about an index without mentioning a type, they’re probably referring to a *B-Tree index*, which typically uses a B-Tree data structure to store its data.2 Most of MySQL’s storage engines support this index type. The Archive engine is the exception: it didn’t support indexes at all until MySQL 5.1, when it started to allow a single indexed AUTO_INCREMENT column.

*Many storage engines actually use a B+Tree index, in which each leaf node contains a link to the next for fast range traversals through nodes. Refer to computer science literature for a detailed explanation of B-Tree indexes.*

InnoDB uses B+Trees.

A B-Tree index speeds up data access because the storage engine doesn’t have to scan the whole table to find the desired data. Instead, it starts at the root node. The slots in the root node hold pointers to child nodes, and the storage engine follows these pointers. It finds the right pointer by looking at the values in the node pages, which define the upper and lower bounds of the values in the child nodes. Eventually, the storage engine either determines that the desired value doesn’t exist or successfully reaches a leaf page.



