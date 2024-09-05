## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

### Indexes:

- `db.collection.createIndex()` : To create an index on the `field` in ascending order (`1` for ascending, `-1` for descending).
- `db.collection.getIndexes()` : To get indexes for collection.

#### Single Index

First, let's insert some sample data into a collection named `users`:

```javascript
// Inserting sample data into 'users' collection
db.users.insertMany([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]);
```

Now, let's create an index on the `name` field of the `users` collection:

```javascript
// Creating an index on the 'name' field
db.users.createIndex({ name: 1 });
```

In this example:

- `{ name: 1 }` specifies that we want to create an index on the `name` field in ascending order (`1` for ascending, `-1` for descending).

#### Compound Index

If you often query users by both `name` and `age`, you can create a compound index:

```javascript
db.users.createIndex({ name: 1, age: -1 }); // Index on name ascending, age descending
```

#### Unique Index

If you want to ensure that no two users can have the same `name`, you can create a unique index:

```javascript
db.users.createIndex({ name: 1 }, { unique: true });
```

> Note: If you run this on existing data with duplicate names, it will throw an error.

#### Retrieving Index Information

To retrieve information about the indexes on the `users` collection, you can use the `getIndexes()` method:

```javascript
// Retrieving index information for the 'users' collection
var indexes = db.users.getIndexes();
console.log(indexes);
```

This will output detailed information about all indexes on the `users` collection, including the default index on `_id` and the index we created on `name`.

After creating the index and retrieving index information, the output might look like this:

```javascript
[
  {
    v: 2,
    key: { _id: 1 },
    name: "_id_",
    ns: "myDatabase.users",
  },
  {
    v: 2,
    key: { name: 1 },
    name: "name_1",
    ns: "myDatabase.users",
  },
];
```

In this output:

- The first entry shows the default index on `_id`.
- The second entry (`name_1`) shows the index we created on the `name` field.

#### Using `explain()` to Monitor Performance

To analyze how a query utilizes the index, you can use `explain()`. For example, to find a user by name:

```javascript
db.users.find({ name: "Alice" }).explain("executionStats");
```

This will provide details on whether the index is being used and how efficiently.

#### Dropping an Index

If you need to remove an index (e.g., on the `name` field):

```javascript
db.users.dropIndex("name_1"); // Drops the index created on the name field
```
