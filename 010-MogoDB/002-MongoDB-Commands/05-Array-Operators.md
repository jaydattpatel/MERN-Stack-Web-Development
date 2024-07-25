## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Array Operator:

- `$` : Acts as a placeholder to update the first element that matches the query condition.
- `$[]` : Acts as a placeholder to update all elements in an array for the documents that match the query condition.
- `$[<identifier>]` : Acts as a placeholder to update all elements that match the arrayFilters condition for the documents that match the query condition.
- `$addToSet` : Adds elements to an array only if they do not already exist in the set.
- `$pop` : Removes the first or last item of an array.
- `$pull` : Removes all array elements that match a specified query.
- `$push` : Adds an item to an array.
- `$pullAll` : Removes all matching values from an array.
- `$all` : Matches arrays that contain all elements specified in the query.
- `$elemMatch` : Selects documents if element in the array field matches all the specified $elemMatch conditions.
- `$size` : Selects documents if the array field is a specified size.

## Array Operator with query examples:

### `$` : Acts as a placeholder to update the first element that matches the query condition.

Example:

```javascript
db.collection.updateOne(
  { "items.name": "apple" }, // Match documents with an item named "apple"
  { $set: { "items.$.quantity": 10 } } // Update the quantity of the first matching item
);
```

### `$[]` : Acts as a placeholder to update all elements in an array for the documents that match the query condition.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $set: { "items.$[].quantity": 5 } } // Update quantity for all items in the array
);
```

### `$[<identifier>]` : Acts as a placeholder to update all elements that match the arrayFilters condition for the documents that match the query condition.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $set: { "items.$[item].quantity": 5 } }, // Update quantity for specific items
  { arrayFilters: [{ "item.name": "apple" }] } // Apply filter to identify items to update
);
```

### `$addToSet` : Adds elements to an array only if they do not already exist in the set.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $addToSet: { items: "orange" } } // Add "orange" to items if it doesn't exist
);
```

### `$pop` : Removes the first or last item of an array.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $pop: { items: 1 } } // Remove the last item from the items array
);

// To remove the first item
db.collection.updateOne(
  { status: "active" },
  { $pop: { items: -1 } } // Remove the first item from the items array
);
```

### `$pull` : Removes all array elements that match a specified query.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $pull: { items: { name: "apple" } } } // Remove all items named "apple"
);
```

### `$push` : Adds an item to an array.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $push: { items: "banana" } } // Add "banana" to the items array
);
```

### `$pullAll` : Removes all matching values from an array.

Example:

```javascript
db.collection.updateOne(
  { status: "active" }, // Match documents with status "active"
  { $pullAll: { items: ["apple", "banana"] } } // Remove "apple" and "banana" from items
);
```

### `$all` : Matches arrays that contain all elements specified in the query.

Example:

```javascript
db.collection.find(
  { items: { $all: ["apple", "banana"] } } // Match documents with items containing both "apple" and "banana"
);
```

### `$elemMatch` : Selects documents if an element in the array field matches all specified $elemMatch conditions.

Example:

```javascript
db.collection.find(
  { items: { $elemMatch: { name: "apple", quantity: { $gt: 0 } } } } // Match documents where an item is "apple" with quantity > 0
);
```

### `$size` : Selects documents if the array field is a specified size.

Example:

```javascript
db.collection.find(
  { items: { $size: 3 } } // Match documents where the items array has exactly 3 elements
);
```
