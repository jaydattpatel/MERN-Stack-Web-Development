/*
author : Jaydatt Patel

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

In regular expressions (RegEx), there are several attributes or flags that can be used to modify the behavior of the pattern matching. These attributes are represented by single characters and are added to the end of the RegEx pattern. 

*/


// g (global): This attribute performs a global search, meaning it searches for all occurrences of the pattern in the input string, rather than stopping after the first match.
var regex = /pattern/g;

// i (ignore case): This attribute performs a case-insensitive search, ignoring the difference between uppercase and lowercase characters.
var regex = /pattern/i;

// m (multiline): This attribute enables multiline mode, which changes the behavior of the ^ and $ anchors to match the beginning and end of each line, rather than the entire string.
var regex = /^pattern/m;

// s (dotAll): This attribute allows the dot (.) metacharacter to match newline characters (\n), which is normally not the default behavior.
var regex = /pattern/s;

// u (unicode): This attribute enables full Unicode matching, including support for Unicode code point escape sequences (\u{...}).
var regex = /pattern/u;

// y (sticky): This attribute enables sticky mode, which restricts the search to match only at the current position in the input string, indicated by the lastIndex property of the RegEx object.
var regex = /pattern/y;

