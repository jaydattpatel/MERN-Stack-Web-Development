## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Element Operators:

- `$exists` : Matches documents that have the specified field.
- `$type` : Selects documents if a field is of the specified type.

## Element Operators with query examples:

### `$exists` : The `$exists` operator matches documents that have the specified field.

Example:

```javascript
// Find documents where the 'age' field exists
db.collection.find({ age: { $exists: true } });

// Find documents where the 'address' field does not exist
db.collection.find({ address: { $exists: false } });
```

### `$type` : The `$type` operator selects documents if a field is of the specified type. The types can be specified by BSON type numbers or string aliases.

Example:

```javascript
// Find documents where the 'age' field is of type int (BSON type 16)
db.collection.find({ age: { $type: 16 } });

// Find documents where the 'name' field is of type string
db.collection.find({ name: { $type: "string" } });

// Find documents where the 'createdAt' field is of type date
db.collection.find({ createdAt: { $type: "date" } });
```
