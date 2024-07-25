## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Evaluation Operators:

- `$expr` : Allows use of aggregation expressions within the query language.
- `$jsonSchema` : Validate documents against the given JSON Schema.
- `$mod` : Performs a modulo operation on the value of a field and selects documents with a specified result.
- `$regex` : Selects documents where values match a specified regular expression.
- `$text` : Performs text search.
- `$where` : Matches documents that satisfy a JavaScript expression.

## Evaluation Operators with query examples:

### `$expr` : Allows the use of aggregation expressions within the query language to compare fields from the same document or perform complex calculations.

Example:

```javascript
// Find documents where the value of field 'qty' is greater than the value of field 'qty_ordered'
db.products.find({
  $expr: { $gt: ["$qty", "$qty_ordered"] },
});
```

### `$jsonSchema` : Validates documents against the given JSON Schema to ensure they adhere to a predefined structure.

Example:

```javascript
// Define a JSON schema for validation
var schema = {
  bsonType: "object",
  required: ["name", "age"],
  properties: {
    name: { bsonType: "string" },
    age: { bsonType: "int", minimum: 18 },
  },
};

// Validate documents against the schema
db.users.find({ $jsonSchema: schema });
```

### `$mod` : Performs a modulo operation on the value of a field and selects documents with a specified result.

Example:

```javascript
// Find documents where the value of 'qty' divided by 5 has a remainder of 1
db.inventory.find({ qty: { $mod: [5, 1] } });
```

### `$regex` : Selects documents where values match a specified regular expression pattern.

Example:

```javascript
// Find documents where the 'name' field starts with 'John' (case-insensitive)
db.users.find({ name: { $regex: "^John", $options: "i" } });
```

### `$text` : Performs a text search on string fields indexed with a text index.

Example:

```javascript
// Perform a text search for documents containing the word 'apple' or 'orange'
db.articles.find({ $text: { $search: "apple orange" } });
```

### `$where` : Matches documents that satisfy a JavaScript expression. Note: `$where` is powerful but should be used with caution due to potential performance implications.

Example:

```javascript
// Find documents where the sum of 'x' and 'y' fields is greater than 10
db.data.find({
  $where: function () {
    return this.x + this.y > 10;
  },
});
```
