## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Miscellaneous Operators:

- `$` : Projects the first element in an array that matches the query condition.
- `$elemMatch` : Projects the first element in an array that matches the specified $elemMatch condition.
- `$meta` : Projects the document's score assigned during the $text operation.
- `$slice` : Limits the number of elements projected from an array. Supports skip and limit slices.
- `$comment` : Adds a comment to a query predicate.
- `$rand` : Generates a random float between 0 and 1.

## Miscellaneous Operators with query examples:

### `$` : The `$` operator projects the first element in an array that matches the query condition.

Syntax: `{ <array>: { $elemMatch: { <query condition> } } }`

Example:

Consider a document in the `students` collection:

```json
{
  "_id": 1,
  "name": "Alice",
  "grades": [80, 85, 90, 95]
}
```

To find the first grade in the `grades` array that is greater than `85`:

```javascript
db.students.find({ grades: { $gt: 85 } }, { "grades.$": 1 });
```

This query will project the first matching element from the `grades` array, which is `90`.

### `$elemMatch` : The `$elemMatch` operator projects the first element in an array that matches the specified `$elemMatch` condition.

Syntax: `{ <array>: { $elemMatch: { <query condition> } } }`

Example:

Consider a document in the `orders` collection:

```json
{
  "_id": 1,
  "customer": "Alice",
  "products": [
    { "name": "Apple", "quantity": 5 },
    { "name": "Banana", "quantity": 3 },
    { "name": "Orange", "quantity": 7 }
  ]
}
```

To find the first product in the `products` array where the `quantity` is greater than `5`:

```javascript
db.orders.find({ products: { $elemMatch: { quantity: { $gt: 5 } } } });
```

This query will return the document because the first matching element in the `products` array (`{ "name": "Orange", "quantity": 7 }`) satisfies the condition.

### `$meta` : The `$meta` operator projects the document's score assigned during a `$text` operation.

Syntax: `{ "$meta": "textScore" }`

Example:

Consider a text search query in the `articles` collection:

```javascript
db.articles
  .find({ $text: { $search: "mongodb" } }, { score: { $meta: "textScore" } })
  .sort({ score: { $meta: "textScore" } });
```

In this example, `$meta: "textScore"` is used to project and sort documents based on their relevance score calculated during the `$text` search operation.

### `$slice` : The `$slice` operator limits the number of elements projected from an array. It supports both skip and limit slices.

Syntax:
`{ <array>: { $slice: <number> } }`
`{ <array>: { $slice: [<skip>, <limit>] } }`

Examples:

Consider a document in the `comments` collection:

```json
{
  "_id": 1,
  "post": "Sample Post",
  "comments": [
    { "text": "Comment 1" },
    { "text": "Comment 2" },
    { "text": "Comment 3" }
  ]
}
```

To project only the first two comments from the `comments` array:

```javascript
db.comments.find({ _id: 1 }, { comments: { $slice: 2 } });
```

This query will return:

```json
{
  "_id": 1,
  "comments": [{ "text": "Comment 1" }, { "text": "Comment 2" }]
}
```

To skip the first comment and limit to one comment from the `comments` array:

```javascript
db.comments.find({ _id: 1 }, { comments: { $slice: [1, 1] } });
```

This query will return:

```json
{
  "_id": 1,
  "comments": [{ "text": "Comment 2" }]
}
```

### `$comment` : The `$comment` operator adds a comment to a query predicate. It does not affect the query execution but can be useful for documentation purposes.

Syntax: `{ <query condition>: { $comment: "<comment>" } }`

Example:

```javascript
db.students.find({
  name: "Alice",
  grades: { $gt: 85, $comment: "Find grades greater than 85" },
});
```

### `$rand` : he `$rand` operator generates a random float between `0` and `1`.

Syntax: `{ "$rand": {} }`

Example:

To generate a random float for each document in a collection:

```javascript
db.randomData.aggregate([{ $project: { randomNumber: { $rand: {} } } }]);
```

This will add a `randomNumber` field to each document in the `randomData` collection containing a random float value between `0` and `1`.
