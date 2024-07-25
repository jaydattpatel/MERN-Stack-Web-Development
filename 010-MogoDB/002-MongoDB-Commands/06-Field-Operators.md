## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Field Operators:

- `$currentDate` : Sets the value of a field to current date, either as a Date or a Timestamp.
- `$inc` : Increments the value of the field by the specified amount.
- `$min` : Only updates the field if the specified value is less than the existing field value.
- `$max` : Only updates the field if the specified value is greater than the existing field value.
- `$mul` : Multiplies the value of the field by the specified amount.
- `$rename` : Renames a field.
- `$set` : Sets the value of a field in a document.
- `$setOnInsert` : Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
- `$unset` : Removes the specified field from a document.

## Field Operators with query examples:

### `$currentDate` : The `$currentDate` operator sets the value of a field to the current date, either as a Date or a Timestamp.

Example:

```javascript
// Using Date
db.collection.updateOne({ _id: 1 }, { $currentDate: { lastModified: true } });

// Using Timestamp
db.collection.updateOne(
  { _id: 1 },
  { $currentDate: { lastModified: { $type: "timestamp" } } }
);
```

### `$inc` : The `$inc` operator increments the value of the field by the specified amount.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $inc: { age: 1 } });
```

### `$min` : The `$min` operator updates the field if the specified value is less than the existing field value.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $min: { lowScore: 50 } });
```

### `$max` : The `$max` operator updates the field if the specified value is greater than the existing field value.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $max: { highScore: 150 } });
```

### `$mul` : The `$mul` operator multiplies the value of the field by the specified amount.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $mul: { price: 1.25 } });
```

### `$rename` : The `$rename` operator renames a field.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $rename: { oldName: "newName" } });
```

### `$set` : The `$set` operator sets the value of a field in a document.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { name: "Alice" } });
```

### `$setOnInsert` : The `$setOnInsert` operator sets the value of a field if an update results in an insert of a document. It has no effect on update operations that modify existing documents.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  {
    $setOnInsert: { createdAt: new Date() },
    $set: { name: "Alice" },
  },
  { upsert: true }
);
```

### `$unset` : The `$unset` operator removes the specified field from a document.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $unset: { obsoleteField: "" } });
```
