## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Logical Operators:

- `$and` : Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
- `$not` : Inverts the effect of a query expression and returns documents that do not match the query expression.
- `$nor` : Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
- `$or` : Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

## Logical operator with find query:

### `$and` : Joins query clauses with a logical AND, returning all documents that match the conditions of both clauses.

Example:

```javascript
db.collection.find(
  { $and: [{ age: { $gte: 18 } }, { status: "active" }] } // Match age >= 18 and status is active
);

// Using implicit AND with multiple conditions
db.collection.find({ age: { $gte: 18 }, status: "active" });
```

### `$not` : Inverts the effect of a query expression, returning documents that do not match the query expression.

Example:

```javascript
db.collection.find(
  { age: { $not: { $gte: 18 } } } // Match documents where age is not >= 18
);
```

### `$nor` : Joins query clauses with a logical NOR, returning all documents that fail to match both clauses.

Example:

```javascript
db.collection.find(
  { $nor: [{ age: { $lt: 18 } }, { status: "active" }] } // Match documents where age is not < 18 and status is not active
);
```

### `$or` : Joins query clauses with a logical OR, returning all documents that match the conditions of either clause.

Example:

```javascript
db.collection.find(
  { $or: [{ age: { $lt: 18 } }, { status: "inactive" }] } // Match documents where age < 18 or status is inactive
);

// Using implicit OR with multiple conditions
db.collection.find({ $or: [{ age: 17 }, { status: "inactive" }] });
```

## Logical operator with update query:

### `$and` : Joins query clauses with a logical AND, returning all documents that match the conditions of both clauses.

Example:

```javascript
db.collection.updateOne(
  { $and: [{ age: { $gte: 18 } }, { status: "active" }] }, // Match documents where age is >= 18 and status is active
  { $set: { eligibility: true } } // Update eligibility to true
);

// Using implicit AND with multiple conditions
db.collection.updateOne(
  { age: { $gte: 18 }, status: "active" },
  { $set: { eligibility: true } }
);
```

### `$not` : Inverts the effect of a query expression, returning documents that do not match the query expression.

Example:

```javascript
db.collection.updateOne(
  { age: { $not: { $gte: 18 } } }, // Match documents where age is not >= 18
  { $set: { status: "minor" } } // Update status to minor
);
```

### `$nor` : Joins query clauses with a logical NOR, returning all documents that fail to match both clauses.

Example:

```javascript
db.collection.updateOne(
  { $nor: [{ age: { $lt: 18 } }, { status: "active" }] }, // Match documents where age is not < 18 and status is not active
  { $set: { eligibility: false } } // Update eligibility to false
);
```

### `$or` : Joins query clauses with a logical OR, returning all documents that match the conditions of either clause.

Example:

```javascript
db.collection.updateOne(
  { $or: [{ age: { $lt: 18 } }, { status: "inactive" }] }, // Match documents where age is < 18 or status is inactive
  { $set: { status: "review" } } // Update status to review
);

// Using implicit OR with multiple conditions
db.collection.updateOne(
  { $or: [{ age: 17 }, { status: "inactive" }] },
  { $set: { status: "review" } }
);
```
