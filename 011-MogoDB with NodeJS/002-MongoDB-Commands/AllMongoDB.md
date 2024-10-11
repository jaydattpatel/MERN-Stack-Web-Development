## MongoDB Cheat Sheet

### Resources

- [MongoDB Manual](https://www.mongodb.com/docs/manual)

### Terminal Commands

- `net start mongodb` : to start mongodb server (Run as administration)
- `net stop mongodb` : to stop mongodb server (Run as administration)
- `mongosh `: to run terminal commands and press Ctrl + C twice to exit mongosh.
- `cls` : The cls command clears the console.
- `show dbs` : to show databases
- `use databaseName` : to switch database or create new database.
- `db.Oldcollection.renameCollection("NewCollection")` : to rename collection
- `show collections` : to show collections of current database
- `db.collection.drop()` : removes the collection and its index definitions
- `db.dropDatabase()` : to drop current database

### Insert Operations

- `db.insertOne(objDocument)` : Create or db.insert collection by add new single documents to a collection.
- `db.insertMany(arrayDocuments)` : Create or insert operations add new multiple documents to a collection.

### Find Operations

- `db.find()` : to get all records or documents from collection.
- `db.find(Query)` : to get all records or documents of collection by Query.
- `db.findOne()` : to get first one record from collection.
- `db.findOne(Query)` : to get first one matching record from collection.

### Update Operations

- `updateOne({filter},{$set:{NewProperties}})` : To add or update properties one document by matching.
- `updateOne({filter},{$unset:{NewProperties}})` : To remove or update properties one document by matching.
- `updateMany({filter},{$set:{NewProperties}})` : To add or update properties in multiple documents by matching properties.
- `updateMany({filter},{$unset:{NewProperties}})` : To remove or update properties in multiple documents by matching properties.
- `replaceOne({filter},{replacement})` : to replace entire document

### Delete Operations

- `deleteOne({filter})` : to delete one document by matching.
- `deleteMany({filter})` : to delete multiple document by matching.
- `deleteMany({})` : to delete all documents without filter.

## Mongodb Examples

<details><summary style="font-size:1.5rem">CRUD Operation</summary>

## CRUD Operation

### `db.insertOne(objDocument)` : Create or db.insert collection by add new single documents to a collection.

This command adds a single document to a collection. If the collection doesn't exist, it will be created.

Example:

```javascript
db.users.insertOne({ name: "Alice", age: 30 });
// Adds a new document { name: "Alice", age: 30 } to the "users" collection.
```

### `db.insertMany(arrayDocuments)` : Create or insert operations add new multiple documents to a collection.

This command adds multiple documents to a collection at once.

Example:

```javascript
db.users.insertMany([
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]);
// Adds two new documents to the "users" collection.
```

### `db.find()` : to get all records or documents from collection.

This retrieves all documents from a collection.

Example:

```javascript
db.users.find();
// Returns all documents in the "users" collection.
```

### `db.find(Query)` : to get all records or documents of collection by Query.

This retrieves documents that match a specified query.

Example:

```javascript
db.users.find({ age: { $gt: 30 } });
// Returns all users older than 30.
```

### `db.findOne()` : to get first one record from collection.

This retrieves the first document from the collection.

Example:

```javascript
db.users.findOne();
// Returns the first document from the "users" collection.
```

### `db.findOne(Query)` : to get first one matching record from collection.

This retrieves the first document that matches a specified query.

Example:

```javascript
db.users.findOne({ name: "Alice" });
// Returns the first document with the name "Alice".
```

### `updateOne({filter}, {$set: {NewProperties}})` : To add or update properties one document by matching.

This updates a single document that matches the filter with new properties.

Example:

```javascript
db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } });
// Updates Alice's age to 31.
```

### `updateOne({filter}, {$unset: {NewProperties}})` : To remove or update properties one document by matching.

This removes a specified property from a matching document.

Example:

```javascript
db.users.updateOne({ name: "Alice" }, { $unset: { age: "" } });
// Removes the "age" property from Alice's document.
```

### `updateMany({filter}, {$set: {NewProperties}})` : To add or update properties in multiple documents by matching properties.

This updates multiple documents that match the filter with new properties.

Example:

```javascript
db.users.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } });
// Sets the status to "young" for all users under 30.
```

### `updateMany({filter}, {$unset: {NewProperties}})` : To remove or update properties in multiple documents by matching properties.

This removes a specified property from multiple matching documents.

Example:

```javascript
db.users.updateMany({ status: "young" }, { $unset: { status: "" } });
// Removes the "status" property from all documents where status is "young".
```

### `replaceOne({filter}, {replacement})` : to replace entire document

This replaces an entire document that matches the filter with a new document.

Example:

```javascript
db.users.replaceOne({ name: "Alice" }, { name: "Alice", age: 32 });
// Replaces Alice's document with a new document that has age 32.
```

### `deleteOne({filter})` : to delete one document by matching.

This deletes a single document that matches the filter.

Example:

```javascript
db.users.deleteOne({ name: "Alice" });
// Deletes the document where name is "Alice".
```

### `deleteMany({filter})` : to delete multiple document by matching.

This deletes multiple documents that match the filter.

Example:

```javascript
db.users.deleteMany({ age: { $lt: 30 } });
// Deletes all users under 30 years old.
```

### `deleteMany({})` : to delete all documents without filter.

This deletes all documents from the collection without any filter.

Example:

```javascript
db.users.deleteMany({});
// Deletes all documents in the "users" collection.
```

</details>

<details><summary style="font-size:1.5rem">Comparison Operators</summary>

## Comparison Operators

- `$eq` : Matches values that are equal to a specified value.
- `$gt` : Matches values that are greater than a specified value.
- `$gte` : Matches values that are greater than or equal to a specified value.
- `$in` : Matches any of the values specified in an array.
- `$lt` : Matches values that are less than a specified value.
- `$lte` : Matches values that are less than or equal to a specified value.
- `$ne` : Matches all values that are not equal to a specified value.
- `$nin` : Matches none of the values specified in an array.

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

</details>

<details><summary style="font-size:1.5rem">Logical Operators</summary>

## Logical Operators

- `$and` : Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
- `$not` : Inverts the effect of a query expression and returns documents that do not match the query expression.
- `$nor` : Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
- `$or` : Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

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

</details>

<details><summary style="font-size:1.5rem">Array Operators</summary>

## Array Operator

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

</details>

<details><summary style="font-size:1.5rem">Field Operators</summary>

## Field Operators

- `$currentDate` : Sets the value of a field to current date, either as a Date or a Timestamp.
- `$inc` : Increments the value of the field by the specified amount.
- `$min` : Only updates the field if the specified value is less than the existing field value.
- `$max` : Only updates the field if the specified value is greater than the existing field value.
- `$mul` : Multiplies the value of the field by the specified amount.
- `$rename` : Renames a field.
- `$set` : Sets the value of a field in a document.
- `$setOnInsert` : Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
- `$unset` : Removes the specified field from a document.

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

</details>

<details><summary style="font-size:1.5rem">Arithmetic Operators</summary>

## Arithmetic Operators

- `$abs` : Returns the absolute value of a number.
- `$add` : Adds numbers to return the sum, or adds numbers and a date to return a new date. If adding numbers and a date, treats the numbers as milliseconds. Accepts any number of argument expressions, but at most, one expression can resolve to a date.
- `$ceil` : Returns the smallest integer greater than or equal to the specified number.
- `$divide` : Returns the result of dividing the first number by the second. Accepts two argument expressions.
- `$exp` : Raises e to the specified exponent.
- `$floor` : Returns the largest integer less than or equal to the specified number.
- `$ln` : Calculates the natural log of a number.
- `$log` : Calculates the log of a number in the specified base.
- `$log10` : Calculates the log base 10 of a number.
- `$mod` : Returns the remainder of the first number divided by the second. Accepts two argument expressions.
- `$multiply` : Multiplies numbers to return the product. Accepts any number of argument expressions.
- `$pow` : Raises a number to the specified exponent.
- `$round` : Rounds a number to to a whole integer or to a specified decimal place.
- `$sqrt` : Calculates the square root.
- `$subtract` : Returns the result of subtracting the second value from the first. If the two values are numbers, return the difference. If the two values are dates, return the difference in milliseconds. If the two values are a date and a number in milliseconds, return the resulting date. Accepts two argument expressions. If the two values are a date and a number, specify the date argument first as it is not meaningful to subtract a date from a number.
- `$trunc` : Truncates a number to a whole integer or to a specified decimal place.

### `$abs` : Returns the absolute value of a number.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { num: -10 } });

db.collection.updateOne(
  { _id: 1 },
  { $set: { absoluteNum: { $abs: "$num" } } }
);
```

After the update, `absoluteNum` will be `10`.

### `$add` : Adds numbers to return the sum or adds numbers and a date to return a new date.

Example (adding numbers):

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { total: { $add: [5, 10, 15] } } });
```

After the update, `total` will be `30`.

Example (adding numbers and date):

```javascript
db.collection.updateOne(
  { _id: 1 },
  {
    $set: {
      newDate: { $add: [new Date("2024-07-16"), 7 * 24 * 60 * 60 * 1000] },
    },
  }
);
```

Adds 7 days to the date `"2024-07-16"` and stores it in `newDate`.

### `$ceil` : Returns the smallest integer greater than or equal to the specified number.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { ceilingNum: { $ceil: 9.3 } } });
```

After the update, `ceilingNum` will be `10`.

### `$divide` : Returns the result of dividing the first number by the second.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  { $set: { divisionResult: { $divide: [20, 5] } } }
);
```

After the update, `divisionResult` will be `4`.

### `$exp` : Raises e to the specified exponent.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { expResult: { $exp: 2 } } });
```

Calculates e^2 and stores the result in `expResult`.

### `$floor` : Returns the largest integer less than or equal to the specified number.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { floorNum: { $floor: 9.8 } } });
```

After the update, `floorNum` will be `9`.

### `$ln` : Calculates the natural logarithm of a number.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { lnResult: { $ln: 10 } } });
```

Calculates ln(10) and stores the result in `lnResult`.

### `$log` : Calculates the logarithm of a number in the specified base.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  { $set: { logResult: { $log: [1000, 10] } } }
);
```

Calculates log base 10 of 1000 and stores the result in `logResult`.

### `$log10` : Calculates the logarithm base 10 of a number.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { log10Result: { $log10: 100 } } });
```

Calculates log base 10 of 100 and stores the result in `log10Result`.

### `$mod` : Returns the remainder of the first number divided by the second.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { modResult: { $mod: [23, 5] } } });
```

After the update, `modResult` will be `3`.

### `$multiply` : Multiplies numbers to return the product.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  { $set: { multiplicationResult: { $multiply: [5, 4] } } }
);
```

After the update, `multiplicationResult` will be `20`.

### `$pow` : Raises a number to the specified exponent.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { powResult: { $pow: [3, 4] } } });
```

Calculates 3^4 and stores the result in `powResult`.

### `$round` : Rounds a number to a whole integer or to a specified decimal place.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  { $set: { roundedNum: { $round: [9.456, 2] } } }
);
```

Rounds `9.456` to 2 decimal places and stores the result in `roundedNum`.

### `$sqrt` : Calculates the square root of a number.

Example:

```javascript
db.collection.updateOne({ _id: 1 }, { $set: { sqrtResult: { $sqrt: 16 } } });
```

Calculates the square root of `16` and stores the result in `sqrtResult`.

### `$subtract` : Returns the result of subtracting the second value from the first.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  { $set: { difference: { $subtract: [20, 5] } } }
);
```

After the update, `difference` will be `15`.

### `$trunc` : Truncates a number to a whole integer or to a specified decimal place.

Example:

```javascript
db.collection.updateOne(
  { _id: 1 },
  { $set: { truncatedNum: { $trunc: 9.876 } } }
);
```

Truncates `9.876` to an integer and stores the result in `truncatedNum`.

</details>

<details><summary style="font-size:1.5rem">Element Operators</summary>

## Element Operators

- `$exists` : Matches documents that have the specified field.
- `$type` : Selects documents if a field is of the specified type.

### `$exists` : The `$exists` operator matches documents that have the specified field.

Example:

```javascript
// Find documents where the 'age' field exists
db.collection.find({ age: { $exists: true } });

// Find documents where the 'address' field does not exist
db.collection.find({ address: { $exists: false } });
```

### `$type` : The `$type` operator selects documents if a field is of the specified type. The types can be specified by BSON type numbers or string aliases.

Example:

```javascript
// Find documents where the 'age' field is of type int (BSON type 16)
db.collection.find({ age: { $type: 16 } });

// Find documents where the 'name' field is of type string
db.collection.find({ name: { $type: "string" } });

// Find documents where the 'createdAt' field is of type date
db.collection.find({ createdAt: { $type: "date" } });
```

</details>

<details><summary style="font-size:1.5rem">Modifiers Operators</summary>

## Modifiers Operators

- `$each` : Modifies the $push and $addToSet operators to append multiple items for array updates.
- `$position` : Modifies the $push operator to specify the position in the array to add elements.
- `$slice` : Modifies the $push operator to limit the size of updated arrays.
- `$sort` : Modifies the $push operator to reorder documents stored in an array.

### `$each` : Purpose: Modifies the `$push`and`$addToSet` for append multiple items for array updates.

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

</details>

<details><summary style="font-size:1.5rem">Evaluation Operators</summary>

## Evaluation Operators

- `$expr` : Allows use of aggregation expressions within the query language.
- `$jsonSchema` : Validate documents against the given JSON Schema.
- `$mod` : Performs a modulo operation on the value of a field and selects documents with a specified result.
- `$regex` : Selects documents where values match a specified regular expression.
- `$text` : Performs text search.
- `$where` : Matches documents that satisfy a JavaScript expression.

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

</details>

<details><summary style="font-size:1.5rem">Bitwise Operators</summary>

## Bitwise Operators

- `$bit` : Performs bitwise AND, OR, and XOR updates of integer values.
- `$bitsAllClear` : Matches numeric or binary values in which a set of bit positions all have a value of 0.
- `$bitsAllSet` : Matches numeric or binary values in which a set of bit positions all have a value of 1.
- `$bitsAnyClear` : Matches numeric or binary values in which any bit from a set of bit positions has a value of 0.
- `$bitsAnySet` : Matches numeric or binary values in which any bit from a set of bit positions has a value of 1.

### `$bit` : The `$bit` operator allows you to perform bitwise AND, OR, and XOR updates on integer values in MongoDB documents.

Syntax:
`{ $bit: { <field>: { and: <integer>, or: <integer>, xor: <integer> } } }`

- `and`: Performs a bitwise AND operation.
- `or`: Performs a bitwise OR operation.
- `xor`: Performs a bitwise XOR (exclusive OR) operation.

Example:

Suppose we have a document in a collection `numbers`:

```json
{ "_id": 1, "value": 10 }
```

To perform a bitwise OR operation on the `value` field with `5`:

```javascript
db.numbers.updateOne({ _id: 1 }, { $bit: { value: { or: 5 } } });
```

After this update, the `value` field will be updated to `15` (`10 | 5 = 15`).

### `$bitsAllClear` : The `$bitsAllClear` operator matches documents where a specified bitmask has all corresponding bits clear (0).

Syntax: `{ <field>: { $bitsAllClear: <bitmask> } }`

Example:

Consider a document in the `flags` collection:

```json
{ "_id": 1, "bits": 10 }
```

To find documents where all bits specified in the bitmask `2` are clear:

```javascript
db.flags.find({ bits: { $bitsAllClear: 2 } });
```

This query will match the document because the second bit (`2` in binary `10`) is clear.

### `$bitsAllSet` : The `$bitsAllSet` operator matches documents where a specified bitmask has all corresponding bits set (1).

Syntax: `{ <field>: { $bitsAllSet: <bitmask> } }`

Example:

Consider a document in the `flags` collection:

```json
{ "_id": 1, "bits": 10 }
```

To find documents where all bits specified in the bitmask `10` are set:

```javascript
db.flags.find({ bits: { $bitsAllSet: 10 } });
```

This query will match the document because the bitmask `10` matches exactly the value of the `bits` field.

### `$bitsAnyClear` : The `$bitsAnyClear` operator matches documents where any bit from a specified set of bit positions has a value of 0.

Syntax: `{ <field>: { $bitsAnyClear: <bitmask> } }`

Example:

Consider a document in the `flags` collection:

```json
{ "_id": 1, "bits": 10 }
```

To find documents where any bit from the bitmask `3` is clear:

```javascript
db.flags.find({ bits: { $bitsAnyClear: 3 } });
```

This query will match the document because the third bit (`3` in binary `11`) is clear (`10` in binary `1010`).

### `$bitsAnySet` : The `$bitsAnySet` operator matches documents where any bit from a specified set of bit positions has a value of 1.

Syntax: `{ <field>: { $bitsAnySet: <bitmask> } }`

Example:

Consider a document in the `flags` collection:

```json
{ "_id": 1, "bits": 10 }
```

To find documents where any bit from the bitmask `5` is set:

```javascript
db.flags.find({ bits: { $bitsAnySet: 5 } });
```

This query will match the document because the first and third bits (`5` in binary `101`) are set (`10` in binary `1010`).

</details>

<details><summary style="font-size:1.5rem">Miscellaneous Operators</summary>

## Miscellaneous Operators

- `$` : Projects the first element in an array that matches the query condition.
- `$elemMatch` : Projects the first element in an array that matches the specified $elemMatch condition.
- `$meta` : Projects the document's score assigned during the $text operation.
- `$slice` : Limits the number of elements projected from an array. Supports skip and limit slices.
- `$comment` : Adds a comment to a query predicate.
- `$rand` : Generates a random float between 0 and 1.

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

</details>

<details><summary style="font-size:1.5rem">Aggrigation Operation</summary>

## Aggregation Operators

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

### `$avg` : The `$avg` operator calculates the average (mean) of a numeric field or expression for each group of documents. It ignores non-numeric values.

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

### `$sum` : The `$sum` operator adds up the numeric values of a field or expression for each group of documents. It ignores non-numeric values.

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

### `$max` : The `$max` operator returns the maximum value of a specified field or expression for each group of documents.

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

### `$min` : The `$min` operator returns the minimum value of a specified field or expression for each group of documents.

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

### `$group` : The `$group` operator is used to group documents by a specified identifier and perform aggregations on the grouped data.

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

### `$count` : The `$count` operator counts the number of documents that pass through the pipeline.

Example:

To count the total number of documents in the `sales` collection:

```javascript
db.sales.aggregate([{ $count: "totalDocuments" }]);
```

Output:

```json
{ "totalDocuments": 3 }
```

### `$sort` : The `$sort` operator orders the documents based on specified fields.

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

### `$unwind` : It is used to "unwind" arrays within documents. It essentially creates a new document for each element in the array, duplicating the other fields in the original document.

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

### `$cond` : It is used within aggregation pipelines to perform conditional evaluations similar to the `if-then-else` logic found in programming languages.

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

### `$lookup` : it is used in the aggregation framework to perform a left outer join between two collections.

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

</details>

<details><summary style="font-size:1.5rem">Aggregation Pipeline stages Operation</summary>

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

</details>

<details><summary style="font-size:1.5rem">Distinct Operation</summary>

## Distinct Operation

The `db.collection.distinct(field, query, options)` command in MongoDB is used to retrieve a list of distinct values for a specific field from documents that match a given query.

Basic Syntax:

```javascript
db.collection.distinct(field, query, options);
```

- `field`: The field for which you want to get distinct values.
- `query`: (Optional) A query filter to match documents.
- `options`: (Optional) Additional options for the command.

### Get All Distinct Values for a Field

Query: Retrieve all distinct values of the `status` field.

```javascript
db.orders.distinct("status");
```

- This retrieves all unique `status` values from the `orders` collection.

### Get Distinct Values Based on a Query

Query: Retrieve distinct `category` values from documents where `price` is greater than 100.

```javascript
db.products.distinct("category", { price: { $gt: 100 } });
```

- This retrieves unique `category` values for products with a price greater than 100.

### Get Distinct Values with a Specific Condition

Query: Get distinct `tags` for documents where the `type` is `"electronics"`.

```javascript
db.items.distinct("tags", { type: "electronics" });
```

- This retrieves all unique `tags` from the `items` collection where the `type` is `"electronics"`.

### Using Distinct with Multiple Fields

Query: This example demonstrates using a `distinct` command with a complex query for finding distinct `author` names from books published in 2023.

```javascript
db.books.distinct("author", { publishedYear: 2023 });
```

- This retrieves distinct `author` names from the `books` collection where the `publishedYear` is 2023.

### Get Distinct Values for a Field with Sort Option

Query: Retrieve distinct `customerName` values with the `sort` option to order the results alphabetically.

```javascript
db.orders.distinct("customerName", {}, { sort: { customerName: 1 } });
```

- This retrieves distinct `customerName` values from the `orders` collection and sorts them in ascending alphabetical order.

### Get Distinct Values with Limit Option

Query: Retrieve up to 5 distinct `productType` values from the `products` collection.

```javascript
db.products.distinct("productType", {}, { limit: 5 });
```

- This retrieves up to 5 unique `productType` values from the `products` collection.

Additional Options :

While the `distinct` command itself does not directly support options like `limit`, `sort`, or `skip`, you can achieve similar effects using aggregation pipelines as demonstrated in some advanced examples.

</details>

<details><summary style="font-size:1.5rem">Index Operation</summary>

## Indexes

- `db.collection.createIndex()` : To create an index on the `field` in ascending order (`1` for ascending, `-1` for descending).
- `db.collection.getIndexes()` : To get indexes for collection.

First, let's insert some sample data into a collection named `users`:

```javascript
// Inserting sample data into 'users' collection
db.users.insertMany([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]);
```

### Regular Index

Now, let's create an index on the `name` field of the `users` collection:

```javascript
// Creating an index on the 'name' field
db.users.createIndex({ name: 1 });
```

In this example:

- `{ name: 1 }` specifies that we want to create an index on the `name` field in ascending order (`1` for ascending, `-1` for descending).

### Text Index

You can create a text index on the `name` field to enable text search:

```javascript
db.users.createIndex({ name: "text" });
```

### Compound Index

If you often query users by both `name` and `age`, you can create a compound index:

```javascript
db.users.createIndex({ name: 1, age: -1 }); // Index on name ascending, age descending
```

### Unique Index

If you want to ensure that no two users can have the same `name`, you can create a unique index:

```javascript
db.users.createIndex({ name: 1 }, { unique: true });
```

> Note: If you run this on existing data with duplicate names, it will throw an error.

### Retrieving Index Information

To retrieve information about the indexes on the `users` collection, you can use the `getIndexes()` method:

```javascript
// Retrieving index information for the 'users' collection
var indexes = db.users.getIndexes();
console.log(indexes);
```

This will output detailed information about all indexes on the `users` collection, including the default index on `_id` and the index we created on `name`.

After creating the index and retrieving index information, the output might look like this:

```javascript
[
  {
    v: 2,
    key: { _id: 1 },
    name: "_id_",
    ns: "myDatabase.users",
  },
  {
    v: 2,
    key: { name: 1 },
    name: "name_1",
    ns: "myDatabase.users",
  },
];
```

In this output:

- The first entry shows the default index on `_id`.
- The second entry (`name_1`) shows the index we created on the `name` field.

### Using `explain()` to Monitor Performance

To analyze how a query utilizes the index, you can use `explain()`. For example, to find a user by name:

```javascript
db.users.find({ name: "Alice" }).explain("executionStats");
```

This will provide details on whether the index is being used and how efficiently.

### Dropping an Index

If you need to remove an index (e.g., on the `name` field):

```javascript
db.users.dropIndex("name_1"); // Drops the index created on the name field
```

</details>
