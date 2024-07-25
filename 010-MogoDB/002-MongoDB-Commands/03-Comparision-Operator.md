## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Comparison Operators:

- `$eq` : Matches values that are equal to a specified value.
- `$gt` : Matches values that are greater than a specified value.
- `$gte` : Matches values that are greater than or equal to a specified value.
- `$in` : Matches any of the values specified in an array.
- `$lt` : Matches values that are less than a specified value.
- `$lte` : Matches values that are less than or equal to a specified value.
- `$ne` : Matches all values that are not equal to a specified value.
- `$nin` : Matches none of the values specified in an array.

## Comparison operator with find query:

### `$eq` : Matches values that are equal to a specified value.

Example:

```javascript
db.collection.find({ age: { $eq: 25 } }); // Using $eq
db.collection.find({ age: 25 }); // Implicitly using $eq
```

### `$gt` : Matches values that are greater than a specified value.

Example:

```javascript
db.collection.find({ age: { $gt: 30 } }); // Using $gt
db.collection.find({ age: { $explain: { $gt: 30 } } }); // With explain for debugging
```

### `$gte` : Matches values that are greater than or equal to a specified value.

Example:

```javascript
db.collection.find({ age: { $gte: 18 } }); // Using $gte
db.collection.find({ age: { $explain: { $gte: 18 } } }); // With explain for debugging
```

### `$in` : Matches any of the values specified in an array.

Example:

```javascript
db.collection.find({ age: { $in: [20, 25, 30] } }); // Using $in
db.collection.find({ age: { $in: [20, 25, 30] }, status: "active" }); // Combining with another condition
```

### `$lt` : Matches values that are less than a specified value.

Example:

```javascript
db.collection.find({ age: { $lt: 21 } }); // Using $lt
db.collection.find({ age: { $explain: { $lt: 21 } } }); // With explain for debugging
```

### `$lte` : Matches values that are less than or equal to a specified value.

Example:

```javascript
db.collection.find({ age: { $lte: 50 } }); // Using $lte
db.collection.find({ age: { $explain: { $lte: 50 } } }); // With explain for debugging
```

### `$ne` : Matches all values that are not equal to a specified value.

Example:

```javascript
db.collection.find({ age: { $ne: 30 } }); // Using $ne
db.collection.find({ age: { $ne: 30 }, status: "inactive" }); // Combining with another condition
```

### `$nin` : Matches none of the values specified in an array.

Example:

```javascript
db.collection.find({ age: { $nin: [20, 25, 30] } }); // Using $nin
db.collection.find({ age: { $nin: [20, 25, 30] }, status: "inactive" }); // Combining with another condition
```

## Comparison operator with update query:

### `$eq` : Matches values that are equal to a specified value.

Example:

```javascript
db.collection.updateOne(
  { age: { $eq: 25 } }, // Match documents where age is 25
  { $set: { status: "active" } } // Update the status to active
);

// Implicitly using $eq
db.collection.updateOne({ age: 25 }, { $set: { status: "active" } });
```

### `$gt` : Matches values that are greater than a specified value.

Example:

```javascript
db.collection.updateOne(
  { age: { $gt: 30 } }, // Match documents where age is greater than 30
  { $set: { status: "senior" } } // Update the status to senior
);
```

### `$gte` : Matches values that are greater than or equal to a specified value.

Example:

```javascript
db.collection.updateOne(
  { age: { $gte: 18 } }, // Match documents where age is 18 or older
  { $set: { eligibility: true } } // Set eligibility to true
);
```

### `$in` : Matches any of the values specified in an array.

Example:

```javascript
db.collection.updateOne(
  { age: { $in: [20, 25, 30] } }, // Match documents where age is either 20, 25, or 30
  { $set: { status: "young adult" } } // Update status to young adult
);
```

### `$lt` : Matches values that are less than a specified value.

Example:

```javascript
db.collection.updateOne(
  { age: { $lt: 21 } }, // Match documents where age is less than 21
  { $set: { status: "teen" } } // Update status to teen
);
```

### `$lte` : Matches values that are less than or equal to a specified value.

Example:

```javascript
db.collection.updateOne(
  { age: { $lte: 50 } }, // Match documents where age is 50 or younger
  { $set: { group: "adult" } } // Update group to adult
);
```

### `$ne` : Matches all values that are not equal to a specified value.

Example:

```javascript
db.collection.updateOne(
  { age: { $ne: 30 } }, // Match documents where age is not 30
  { $set: { status: "not 30" } } // Update status to not 30
);
```

### `$nin` : Matches none of the values specified in an array.

Example:

```javascript
db.collection.updateOne(
  { age: { $nin: [20, 25, 30] } }, // Match documents where age is not 20, 25, or 30
  { $set: { status: "excluded" } } // Update status to excluded
);
```
