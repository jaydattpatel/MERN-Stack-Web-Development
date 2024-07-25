## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Aggregation Pipeline Stages

### `Example-1 :`

Suppose data stored in database :

```json
[
  {
    "_id": "6698b8ea5f5358523f30c246",
    "title": "mobile recharge",
    "amount": 666,
    "date": "07-09-2023",
    "isRecurring": false,
    "tags": ["cheap"]
  },
  {
    "_id": "6698b9055f5358523f30c247",
    "title": "groceries",
    "amount": 2500,
    "date": "23-09-2023",
    "isRecurring": false,
    "tags": ["fresh", "cheap"]
  },
  {
    "_id": "6698b9125f5358523f30c248",
    "title": "groceries",
    "amount": 1300,
    "date": "22-09-2023",
    "isRecurring": true,
    "tags": ["fresh", "cheap"]
  }
]
```

Query to group by array `tags` and create expense array by pushing data:

```javascript
db.collection.aggregate([
  {
    $group: {
      _id: "$tags",
      expenses: {
        $push: {
          _id: "$_id",
          title: "$title",
          amount: "$amount",
          date: "$date",
          isRecurring: "$isRecurring",
          tags: "$tags",
        },
      },
    },
  },
]);
```

Expected Output :

```json
[
  {
    "_id": ["cheap"],
    "expenses": [
      {
        "_id": "6698b8ea5f5358523f30c246",
        "title": "mobile recharge",
        "amount": 666,
        "date": "07-09-2023",
        "isRecurring": false,
        "tags": ["cheap"]
      }
    ]
  },
  {
    "_id": ["fresh", "cheap"],
    "expenses": [
      {
        "_id": "6698b9055f5358523f30c247",
        "title": "groceries",
        "amount": 2500,
        "date": "23-09-2023",
        "isRecurring": false,
        "tags": ["fresh", "cheap"]
      },
      {
        "_id": "6698b9125f5358523f30c248",
        "title": "groceries",
        "amount": 1300,
        "date": "22-09-2023",
        "isRecurring": true,
        "tags": ["fresh", "cheap"]
      }
    ]
  }
]
```

### `Example-2 :`

Suppose data stored in database :

```json
[
  { "_id": 1, "product": "A", "quantity": 2, "price": 50 },
  { "_id": 2, "product": "B", "quantity": 1, "price": 30 },
  { "_id": 3, "product": "A", "quantity": 3, "price": 50 },
  { "_id": 4, "product": "C", "quantity": 1, "price": 80 },
  { "_id": 5, "product": "B", "quantity": 2, "price": 30 }
]
```

Query :

```javascript
db.collection.aggregate([
  {
    $project: {
      product: 1,
      revenue: { $multiply: ["$quantity", "$price"] },
    },
  },
  {
    $group: {
      _id: "$product",
      totalRevenue: { $sum: "$revenue" },
    },
  },
  {
    $group: {
      _id: null,
      products: { $push: { product: "$_id", totalRevenue: "$totalRevenue" } },
      averageRevenue: { $avg: "$totalRevenue" },
    },
  },
]);
```

Expected Output :

```json
{
  "_id": null,
  "products": [
    { "product": "C", "totalRevenue": 80 },
    { "product": "A", "totalRevenue": 250 },
    { "product": "B", "totalRevenue": 90 }
  ],
  "averageRevenue": 140
}
```

### `Example-3 :`

Suppose we have a collection with documents structured like this:

```json
[
  {
    "_id": 1,
    "customer_id": 101,
    "status": "completed",
    "items": [
      { "product": "A", "quantity": 2, "price": 50 },
      { "product": "B", "quantity": 1, "price": 30 }
    ]
  },
  {
    "_id": 2,
    "customer_id": 102,
    "status": "completed",
    "items": [
      { "product": "A", "quantity": 3, "price": 50 },
      { "product": "C", "quantity": 2, "price": 40 }
    ]
  },
  {
    "_id": 3,
    "customer_id": 101,
    "status": "pending",
    "items": [{ "product": "B", "quantity": 2, "price": 30 }]
  }
]
```

Query to find out the total revenue (`totalRevenue`) for each customer who has completed orders (`status: "completed"`).

```javascript
db.collection.aggregate([
  { $match: { status: "completed" } }, // Stage 1: Match only completed orders
  { $unwind: "$items" }, // Stage 2: Deconstruct the items array
  {
    $group: {
      // Stage 3: Group by customer_id
      _id: "$customer_id",
      totalRevenue: {
        $sum: { $multiply: ["$items.quantity", "$items.price"] },
      },
    },
  },
]);
```

Output:

```json
[
  { "_id": 101, "totalRevenue": 130 },
  { "_id": 102, "totalRevenue": 230 }
]
```

### `Example-4 :`

```json
[
  {
    "_id": 1,
    "order_id": "A001",
    "items": [
      { "name": "item1", "quantity": 2, "price": 10 },
      { "name": "item2", "quantity": 1, "price": 20 }
    ]
  },
  {
    "_id": 2,
    "order_id": "A002",
    "items": [
      { "name": "item2", "quantity": 3, "price": 20 },
      { "name": "item3", "quantity": 2, "price": 15 }
    ]
  }
]
```

We want to aggregate these documents to find the total revenue generated from each item across all orders.

```javascript
db.collection.aggregate([
  // Step 1: Unwind the items array to denormalize
  { $unwind: "$items" },

  // Step 2: Group by item name, calculate total revenue and quantity sold
  {
    $group: {
      _id: "$items.name",
      total_revenue: {
        $sum: { $multiply: ["$items.quantity", "$items.price"] },
      },
      total_quantity: { $sum: "$items.quantity" },
    },
  },

  // Step 3: Project to conditionally include documents based on total_quantity
  {
    $project: {
      _id: 0,
      item_name: "$_id",
      total_revenue: 1,
      total_quantity: 1,
      popular_item: {
        $cond: {
          if: { $gte: ["$total_quantity", 3] },
          then: true,
          else: false,
        },
      },
    },
  },

  // Step 4: Sort by total_revenue in descending order
  { $sort: { total_revenue: -1 } },
]);
```

Output Example :

```json
[
  {
    "total_revenue": 80,
    "total_quantity": 4,
    "item_name": "item2",
    "popular_item": true
  },
  {
    "total_revenue": 30,
    "total_quantity": 2,
    "item_name": "item3",
    "popular_item": false
  },
  {
    "total_revenue": 20,
    "total_quantity": 2,
    "item_name": "item1",
    "popular_item": false
  }
]
```
