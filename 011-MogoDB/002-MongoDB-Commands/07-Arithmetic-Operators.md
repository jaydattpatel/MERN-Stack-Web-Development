## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Arithmetic Expression Operators:

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

## Arithmetic Expression Operators with query examples:

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
