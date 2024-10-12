## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

### Distinct Operation

The `db.collection.distinct(field, query, options)` command in MongoDB is used to retrieve a list of distinct values for a specific field from documents that match a given query.

### Basic Syntax

```javascript
db.collection.distinct(field, query, options);
```

- `field`: The field for which you want to get distinct values.
- `query`: (Optional) A query filter to match documents.
- `options`: (Optional) Additional options for the command.

#### Get All Distinct Values for a Field

Query: Retrieve all distinct values of the `status` field.

```javascript
db.orders.distinct("status");
```

- This retrieves all unique `status` values from the `orders` collection.

#### Get Distinct Values Based on a Query

Query: Retrieve distinct `category` values from documents where `price` is greater than 100.

```javascript
db.products.distinct("category", { price: { $gt: 100 } });
```

- This retrieves unique `category` values for products with a price greater than 100.

#### Get Distinct Values with a Specific Condition

Query: Get distinct `tags` for documents where the `type` is `"electronics"`.

```javascript
db.items.distinct("tags", { type: "electronics" });
```

- This retrieves all unique `tags` from the `items` collection where the `type` is `"electronics"`.

#### Using Distinct with Multiple Fields

Query: This example demonstrates using a `distinct` command with a complex query for finding distinct `author` names from books published in 2023.

```javascript
db.books.distinct("author", { publishedYear: 2023 });
```

- This retrieves distinct `author` names from the `books` collection where the `publishedYear` is 2023.

#### Get Distinct Values for a Field with Sort Option

Query: Retrieve distinct `customerName` values with the `sort` option to order the results alphabetically.

```javascript
db.orders.distinct("customerName", {}, { sort: { customerName: 1 } });
```

- This retrieves distinct `customerName` values from the `orders` collection and sorts them in ascending alphabetical order.

#### Get Distinct Values with Limit Option

Query: Retrieve up to 5 distinct `productType` values from the `products` collection.

```javascript
db.products.distinct("productType", {}, { limit: 5 });
```

- This retrieves up to 5 unique `productType` values from the `products` collection.

#### Additional Options

While the `distinct` command itself does not directly support options like `limit`, `sort`, or `skip`, you can achieve similar effects using aggregation pipelines as demonstrated in some advanced examples.
