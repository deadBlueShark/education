- A transaction is the name given to an autonomous(tự trị) unit of work that is 
performed in the Oracle database and modifies data. Each transaction is treated
as a coherent, reliable and independent unit of work that is separate from other
transactions in the database.

- Each transaction is finalized by either a commit or a rollback statement.

- (DML command: insert, update, delete)

- Important concepts to understand transaction:
  + Isolations: if a database transaction say transation 1 modifies rows in a
database, until a commit is issued, other sessions will not be able to view 
changes made by transaction 1. Other sessions connect to the database that 
attempt to read rows currently being modified by that transaction that hasnt
committed yet will see a past image of the rows with the values before update
or modifications was made by transaction 1

+ Locks: if transaction 1 is modifying one or more rows, the this transaction
will place locks on these rows until the session either commits a transaction
or rolls the transaction back. This means that any of other sessions or users 
that attempt to modify the same rows will not be able to do so as these rows 
are locked by transaction 1. Only when transaction commits and the locks will 
be released and other sessions will be able to modify the previous locked rows

- Once a transaction committed, it cannot be rollbacked