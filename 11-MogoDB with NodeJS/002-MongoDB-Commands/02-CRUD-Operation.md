## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

### Insert Operations

- `db.insertOne(objDocument)` : Create or db.insert collection by add new single documents to a collection.
- `db.insertMany(arrayDocuments)` : Create or insert operations add new multiple documents to a collection.

### Find Operations

- `db.find()` : to get all records or documents from collection.
- `db.find(Query)` : to get all records or documents of collection by Query.
- `db.findOne()` : to get first one record from collection.
- `db.findOne(Query)` : to get first one matching record from collection.

### Update Operations

- `updateOne({filter},{$set:{NewProperties}})` : To add or update properties one document by matching.
- `updateOne({filter},{$unset:{NewProperties}})` : To remove or update properties one document by matching.
- `updateMany({filter},{$set:{NewProperties}})` : To add or update properties in multiple documents by matching properties.
- `updateMany({filter},{$unset:{NewProperties}})` : To remove or update properties in multiple documents by matching properties.
- `replaceOne({filter},{replacement})` : to replace entire document

### Delete Operations

- `deleteOne({filter})` : to delete one document by matching.
- `deleteMany({filter})` : to delete multiple document by matching.
- `deleteMany({})` : to delete all documents without filter.

### `db.insertOne(objDocument)` : Create or db.insert collection by add new single documents to a collection.

This command adds a single document to a collection. If the collection doesn't exist, it will be created.

Example:

```javascript
db.users.insertOne({ name: "Alice", age: 30 });
// Adds a new document { name: "Alice", age: 30 } to the "users" collection.
```

### `db.insertMany(arrayDocuments)` : Create or insert operations add new multiple documents to a collection.

This command adds multiple documents to a collection at once.

Example:

```javascript
db.users.insertMany([
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]);
// Adds two new documents to the "users" collection.
```

### `db.find()` : to get all records or documents from collection.

This retrieves all documents from a collection.

Example:

```javascript
db.users.find();
// Returns all documents in the "users" collection.
```

### `db.find(Query)` : to get all records or documents of collection by Query.

This retrieves documents that match a specified query.

Example:

```javascript
db.users.find({ age: { $gt: 30 } });
// Returns all users older than 30.
```

### `db.findOne()` : to get first one record from collection.

This retrieves the first document from the collection.

Example:

```javascript
db.users.findOne();
// Returns the first document from the "users" collection.
```

### `db.findOne(Query)` : to get first one matching record from collection.

This retrieves the first document that matches a specified query.

Example:

```javascript
db.users.findOne({ name: "Alice" });
// Returns the first document with the name "Alice".
```

### `updateOne({filter}, {$set: {NewProperties}})` : To add or update properties one document by matching.

This updates a single document that matches the filter with new properties.

Example:

```javascript
db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } });
// Updates Alice's age to 31.
```

### `updateOne({filter}, {$unset: {NewProperties}})` : To remove or update properties one document by matching.

This removes a specified property from a matching document.

Example:

```javascript
db.users.updateOne({ name: "Alice" }, { $unset: { age: "" } });
// Removes the "age" property from Alice's document.
```

### `updateMany({filter}, {$set: {NewProperties}})` : To add or update properties in multiple documents by matching properties.

This updates multiple documents that match the filter with new properties.

Example:

```javascript
db.users.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } });
// Sets the status to "young" for all users under 30.
```

### `updateMany({filter}, {$unset: {NewProperties}})` : To remove or update properties in multiple documents by matching properties.

This removes a specified property from multiple matching documents.

Example:

```javascript
db.users.updateMany({ status: "young" }, { $unset: { status: "" } });
// Removes the "status" property from all documents where status is "young".
```

### `replaceOne({filter}, {replacement})` : to replace entire document

This replaces an entire document that matches the filter with a new document.

Example:

```javascript
db.users.replaceOne({ name: "Alice" }, { name: "Alice", age: 32 });
// Replaces Alice's document with a new document that has age 32.
```

### `deleteOne({filter})` : to delete one document by matching.

This deletes a single document that matches the filter.

Example:

```javascript
db.users.deleteOne({ name: "Alice" });
// Deletes the document where name is "Alice".
```

### `deleteMany({filter})` : to delete multiple document by matching.

This deletes multiple documents that match the filter.

Example:

```javascript
db.users.deleteMany({ age: { $lt: 30 } });
// Deletes all users under 30 years old.
```

### `deleteMany({})` : to delete all documents without filter.

This deletes all documents from the collection without any filter.

Example:

```javascript
db.users.deleteMany({});
// Deletes all documents in the "users" collection.
```
