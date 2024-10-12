## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Basic Commands

### Terminal Commands

- `net start mongodb` : to start mongodb server (Run as administration)
- `net stop mongodb` : to stop mongodb server (Run as administration)
- `mongosh`: to run terminal commands and press Ctrl + C twice to exit mongosh.
- `cls` : The cls command clears the console.
- `show dbs` : to show databases
- `use databaseName` : to switch database or create new database.
- `db.Oldcollection.renameCollection("NewCollection")` : to rename collection
- `show collections` : to show collections of current database
- `db.collection.drop()` : removes the collection and its index definitions
- `db.dropDatabase()` : to drop current database
