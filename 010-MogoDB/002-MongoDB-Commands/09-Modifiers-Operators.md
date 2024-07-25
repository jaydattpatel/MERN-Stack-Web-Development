## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Modifiers Operators:

- `$each` : Modifies the $push and $addToSet operators to append multiple items for array updates.
- `$position` : Modifies the $push operator to specify the position in the array to add elements.
- `$slice` : Modifies the $push operator to limit the size of updated arrays.
- `$sort` : Modifies the $push operator to reorder documents stored in an array.

## Modifiers Operators with query examples:

### `$each` : Purpose: Modifies the `$push`and`$addToSet` operators to append multiple items for array updates.

Syntax: `{ $each: [ <value1>, <value2>, ... ] }`

Example:

Suppose you have a collection `users` where each document has an array field `skills`. You want to add multiple skills to this array using `$push` with `$each`:

```javascript
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { skills: { $each: ["JavaScript", "MongoDB", "Node.js"] } } }
);
```

This will append `"JavaScript"`, `"MongoDB"`, and `"Node.js"` to the `skills` array for the specified document.

### `$position` : Purpose: Modifies the `$push` operator to specify the position in the array to add elements.

Syntax: `{ $position: <integer> }`

Example:

If you want to add a new skill at a specific position (index 1) in the `skills` array:

```javascript
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { skills: { $each: ["Python"], $position: 1 } } }
);
```

This will insert `"Python"` at index 1 in the `skills` array, shifting other elements to the right.

### `$slice` : Purpose: Modifies the `$push` operator to limit the size of updated arrays.

Syntax: `{ $slice: <number> }`

Example:

To keep only the last 5 skills in the `skills` array after adding a new skill:

```javascript
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { skills: { $each: ["React"], $slice: -5 } } }
);
```

This will add `"React"` to the `skills` array and then keep only the last 5 elements. If the array exceeds 5 elements, the oldest elements are removed.

### `$sort` : Purpose: Modifies the `$push` operator to reorder documents stored in an array.

Syntax: `{ $sort: { <field1>: <order1>, <field2>: <order2>, ... } }`

Example:

Suppose each document in `users` has an array of `grades`, and you want to sort these grades in descending order:

```javascript
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { grades: { $each: [85, 92, 78], $sort: { score: -1 } } } }
);
```

This will add `[85, 92, 78]` to the `grades` array for the specified document and sort the `grades` array by `score` field in descending order.
