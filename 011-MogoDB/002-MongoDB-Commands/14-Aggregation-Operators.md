## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

### Aggregation Operators

- `$avg` : Returns an average of the specified expression or list of expressions for each document. Ignores non-numeric values.
- `$sum` : Returns a sum of numerical values. Ignores non-numeric values.
- `$max` : Returns the maximum of the specified expression or list of expressions for each document
- `$min` : Returns the minimum of the specified expression or list of expressions for each document
- `$group` : Groups documents by a specified identifier and applies accumulative functions.
- `$count` : Counts the number of documents in the pipeline.
- `$sort` : Orders the documents based on specified fields.
- `$unwind` : It is used to "unwind" arrays within documents. It essentially creates a new document for each element in the array, duplicating the other fields in the original document.
- `$cond` : It is used within aggregation pipelines to perform conditional evaluations similar to the `if-then-else` logic found in programming languages.
- `$lookup` : It is used in the aggregation framework to perform a left outer join between two collections.

### Aggregation

#### `$avg` : The `$avg` operator calculates the average (mean) of a numeric field or expression for each group of documents. It ignores non-numeric values.

Example:

Suppose you have a collection named `sales` with documents like this:

```json
{ "item": "apple", "quantity": 10, "price": 2 }
{ "item": "banana", "quantity": 5, "price": 1 }
{ "item": "orange", "quantity": 8, "price": 1.5 }
```

To calculate the average price of items:

```javascript
db.sales.aggregate([
  {
    $group: {
      _id: null, // Grouping all documents together
      averagePrice: { $avg: "$price" },
    },
  },
]);
```

Output:

```json
{ "_id": null, "averagePrice": 1.5 }
```

#### `$sum` : The `$sum` operator adds up the numeric values of a field or expression for each group of documents. It ignores non-numeric values.

Example:

Using the same `sales` collection, to calculate the total quantity of all items:

```javascript
db.sales.aggregate([
  {
    $group: {
      _id: null, // Grouping all documents together
      totalQuantity: { $sum: "$quantity" },
    },
  },
]);
```

Output:

```json
{ "_id": null, "totalQuantity": 23 }
```

#### `$max` : The `$max` operator returns the maximum value of a specified field or expression for each group of documents.

Example:

To find the maximum price among all items:

```javascript
db.sales.aggregate([
  {
    $group: {
      _id: null, // Grouping all documents together
      maxPrice: { $max: "$price" },
    },
  },
]);
```

Output:

```json
{ "_id": null, "maxPrice": 2 }
```

#### `$min` : The `$min` operator returns the minimum value of a specified field or expression for each group of documents.

Example:

To find the minimum price among all items:

```javascript
db.sales.aggregate([
  {
    $group: {
      _id: null, // Grouping all documents together
      minPrice: { $min: "$price" },
    },
  },
]);
```

Output:

```json
{ "_id": null, "minPrice": 1 }
```

#### `$group` : The `$group` operator is used to group documents by a specified identifier and perform aggregations on the grouped data.

Example:

To calculate the total quantity and average price of each item:

```javascript
db.sales.aggregate([
  {
    $group: {
      _id: "$item", // Group by item
      totalQuantity: { $sum: "$quantity" },
      averagePrice: { $avg: "$price" },
    },
  },
]);
```

Output:

```json
{ "_id": "apple", "totalQuantity": 10, "averagePrice": 2 }
{ "_id": "banana", "totalQuantity": 5, "averagePrice": 1 }
{ "_id": "orange", "totalQuantity": 8, "averagePrice": 1.5 }
```

#### `$count` : The `$count` operator counts the number of documents that pass through the pipeline.

Example:

To count the total number of documents in the `sales` collection:

```javascript
db.sales.aggregate([{ $count: "totalDocuments" }]);
```

Output:

```json
{ "totalDocuments": 3 }
```

#### `$sort` : The `$sort` operator orders the documents based on specified fields.

Example:

To sort the documents by price in ascending order:

```javascript
db.sales.aggregate([{ $sort: { price: 1 } }]);
```

Output:

```json
{ "item": "banana", "quantity": 5, "price": 1 }
{ "item": "orange", "quantity": 8, "price": 1.5 }
{ "item": "apple", "quantity": 10, "price": 2 }
```

To sort the documents by price in descending order:

```javascript
db.sales.aggregate([{ $sort: { price: -1 } }]);
```

Output:

```json
{ "item": "apple", "quantity": 10, "price": 2 }
{ "item": "orange", "quantity": 8, "price": 1.5 }
{ "item": "banana", "quantity": 5, "price": 1 }
```

#### `$unwind` : It is used to "unwind" arrays within documents. It essentially creates a new document for each element in the array, duplicating the other fields in the original document.

Example:

Consider a collection `orders` where each document contains an array of `items`. Here's how `$unwind` can be used to expand the `items` array into separate documents:

Original Documents:

```json
{
  "_id": 1,
  "items": ["apple", "banana", "cherry"]
},
{
  "_id": 2,
  "items": ["orange", "grape"]
}
```

Using $unwind:

```mongodb
db.orders.aggregate([
  { $unwind: "$items" }
])
```

Resulting Documents:

```json
{ "_id": 1, "items": "apple" }
{ "_id": 1, "items": "banana" }
{ "_id": 1, "items": "cherry" }
{ "_id": 2, "items": "orange" }
{ "_id": 2, "items": "grape" }
```

#### `$cond` : It is used within aggregation pipelines to perform conditional evaluations similar to the `if-then-else` logic found in programming languages.

Example:

Suppose we have a collection `products` with documents containing `name`, `price`, and `category` fields. We want to add a new field `priceCategory` based on the `price` field:

Sample Data:

```json
{ "_id": 1, "name": "Product A", "price": 150 },
{ "_id": 2, "name": "Product B", "price": 80 },
{ "_id": 3, "name": "Product C", "price": 200 }
```

Query Example:

```javascript
db.products.aggregate([
  {
    $project: {
      name: 1,
      price: 1,
      priceCategory: {
        $cond: {
          if: { $gte: ["$price", 100] }, // Check if price is greater than or equal to 100
          then: "Expensive",
          else: "Affordable",
        },
      },
    },
  },
]);
```

In the above example:

- The `$project` stage is used to include or exclude fields in the output.
- Within `$project`, `$cond` is used to create a new field `priceCategory`.
- `$cond` evaluates the condition `$gte: ["$price", 100]`, which checks if the `price` field is greater than or equal to 100.
- If the condition is true (`$price` >= 100), it assigns `"Expensive"` to `priceCategory`.
- If the condition is false (`$price` < 100), it assigns `"Affordable"` to `priceCategory`.

Result:

After executing the aggregation query, the result would be:

```json
{ "_id": 1, "name": "Product A", "price": 150, "priceCategory": "Expensive" },
{ "_id": 2, "name": "Product B", "price": 80, "priceCategory": "Affordable" },
{ "_id": 3, "name": "Product C", "price": 200, "priceCategory": "Expensive" }
```

#### `$lookup` : it is used in the aggregation framework to perform a left outer join between two collections.

Here's an example that demonstrates how `$lookup` works and what kind of output you can expect.

Suppose, we have two collections: `orders` and `products`.

Example Collections:

1. orders :

   ```json
   [
     { "_id": 1, "order_date": "2023-01-01", "product_id": 101, "quantity": 2 },
     { "_id": 2, "order_date": "2023-01-02", "product_id": 102, "quantity": 1 }
   ]
   ```

2. products :
   ```json
   [
     { "_id": 101, "name": "Laptop", "price": 1500 },
     { "_id": 102, "name": "Mouse", "price": 30 }
   ]
   ```

MongoDB Query: We want to retrieve a list of orders with details of the products they contain, using `$lookup`.

```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "product_details",
    },
  },
  {
    $project: {
      _id: 1,
      order_date: 1,
      quantity: 1,
      product: { $arrayElemAt: ["$product_details", 0] },
    },
  },
]);
```

Explanation:

- `$lookup` stage:

  - `from`: Specifies the collection to join (`products` in this case).
  - `localField`: Specifies the field from the input documents (`orders` collection) to match (`product_id`).
  - `foreignField`: Specifies the field from the documents of the `from` collection (`products` collection) to match (`_id`).
  - `as`: Specifies the name of the new array field to add to the input documents (`product_details`).

- `$project` stage:
  - Used to shape the output documents.
  - Here, we include `_id`, `order_date`, `quantity` from `orders`.
  - `product`: Extracts the first element of the `product_details` array (since each order should ideally match one product), and adds it to the output as `product`.

Output:

```json
[
  {
    "_id": 1,
    "order_date": "2023-01-01",
    "quantity": 2,
    "product": { "_id": 101, "name": "Laptop", "price": 1500 }
  },
  {
    "_id": 2,
    "order_date": "2023-01-02",
    "quantity": 1,
    "product": { "_id": 102, "name": "Mouse", "price": 30 }
  }
]
```
