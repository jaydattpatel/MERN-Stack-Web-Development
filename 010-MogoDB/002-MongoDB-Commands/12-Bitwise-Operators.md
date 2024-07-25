## MongoDB Cheat Sheet

### Resources

- [MongoDB Operator Reference](https://www.mongodb.com/docs/manual)

## Bitwise Operators:

- `$bit` : Performs bitwise AND, OR, and XOR updates of integer values.
- `$bitsAllClear` : Matches numeric or binary values in which a set of bit positions all have a value of 0.
- `$bitsAllSet` : Matches numeric or binary values in which a set of bit positions all have a value of 1.
- `$bitsAnyClear` : Matches numeric or binary values in which any bit from a set of bit positions has a value of 0.
- `$bitsAnySet` : Matches numeric or binary values in which any bit from a set of bit positions has a value of 1.

## Bitwise Operators with query examples:

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
