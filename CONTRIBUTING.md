# Contribution guidelines

**30 seconds of code** is a community effort, so feel free to contribute in any way you can. Every contribution helps!

Here's what you can do to help:

- Submit [pull requests](https://github.com/30-seconds/30-seconds-starter/pulls) with snippets and tests that you have created (see below for guidelines).
- [Open issues](https://github.com/30-seconds/30-seconds-starter/issues/new) for things you want to see added or modified.
- Be part of the discussion by helping out with [existing issues](https://github.com/30-seconds/30-seconds-starter/issues) or talking on our [gitter channel](https://gitter.im/30-seconds-starter/Lobby).
- Tag uncategorized snippets by adding the appropriate in the snippet's frontmatter in `tags`.
- Fix typos in existing snippets, improve snippet descriptions and explanations or provide better examples.
- Write tests for existing snippets (see below for guidelines).

### Snippet submission and Pull request guidelines

- **DO NOT MODIFY THE README.md FILE!** Make changes to individual snippet files. **Travis CI** will automatically build the `README.md` file when your pull request is merged.
- **Snippet filenames** must correspond to the title of the snippet. For example, if your snippet is titled `awesomeSnippet` the filename should be `awesomeSnippet.md`.
  - Use `camelCase`, not `kebab-case` or `snake_case`.
  - Avoid capitalization of words, except if the whole word is capitalized (e.g. `URL` should be capitalized in the filename and the snippet title).
- **Snippet metadata** must be included in all snippets in the form of frontmatter.
  - All snippets must contain a title.
  - All snippets must contain tags, prefixed with `tags:` and separated by commas (optional spaces in-between).
  - Make sure the first tag in your snippet's tags is one of the main categories, as seen in the `README.md` file or the website.
  - Snippet tags must include a difficulty setting (`begginer`, `intermediate` or `advanced`), preferrably at the end of the list.
- **Snippet titles** should be the same as the name of the function that is present in the snippet.
  - All snippet titles must be prefixed with `title:` and be at the very first line of your snippet's frontmatter.
  - Snippet titles must be unique (although if you cannot find a better title, just add some placeholder at the end of the filename and title and we will figure it out).
  - Follow snippet titles with an empty line.
- **Snippet descriptions** must be short and to the point. Try to explain *what* the snippet does and *how* the snippet works and what Javascript features are used. Remember to include what functions you are using and why.
  - Follow snippet descriptions with an empty line.
- **Snippet code** must be enclosed inside ` ```js ` and ` ``` `.
  - Remember to start your snippet's code on a new line below the opening backticks.
  - Use ES6 notation to define your function. For example `const myFunction = ( arg1, arg2 ) => { }`.
  - Please use Javascript [Semi-Standard Style](https://github.com/Flet/semistandard).
  - Try to keep your snippets' code short and to the point. Use modern techniques and features. Make sure to test your code before submitting.
  - All snippets must be followed by one (more if necessary) test case after the code, in a new block enclosed inside ` ```js ` and ` ``` `. The syntax for this is `myFunction('testInput') // 'testOutput'`. Use multiline examples only if necessary.
  - Try to make your function name unique, so that it does not conflict with existing snippets.
  - Snippet functions do not have to handle errors in input, unless it's necessary (e.g. a mathematical function that cannot be extended to negative numbers should handle negative input appropriately).
- Snippets should be short (usually below 10 lines). If your snippet is longer than that, you can still submit it, and we can help you shorten it or figure out ways to improve it.
- Snippets *should* solve real-world problems, no matter how simple.
- Snippets *should* be abstract enough to be applied to different scenarios.
- It is not mandatory but highly appreciated if you provide **test cases** and/or performance tests (we recommend using [jsPerf](https://jsperf.com/)).
- You can start creating a new snippet, by using the [snippet template](snippet-template.md) to format your snippets.

### Writing tests
- Before writing any tests run `npm run packager` script. It will update test directory to include new snippets as well as update old ones if needed.
- **DO NOT MODIFY THE _30s.js file** under test directory.
- We are using [Jest](https://jestjs.io/) for testing.
- Write tests under `snippetName.test.js` file. If you have trouble doing so, check out tests of other snippets.
- Be sure to run `npm run test`. It is going to run all tests for all snippets.
- Make a new pull request **only if all the tests are passing**.
- If your snippet belongs in the `browser` category, some tests might not work exactly as expected. Check [Jest's Docs](https://jestjs.io/docs/en/getting-started) for additional information.

### Additional guidelines and conventions regarding snippets

- When describing snippets, refer to methods, using their full name. For example, use `Array.prototype.reduce()`, instead of `reduce()`.
- If your snippet contains arguments with default parameters, explain what happens if they are omitted when calling the function and what the default case is.
- If your snippet uses recursion, explain the base cases.
- Always use `const functionName` for function definitions.
- Use variables only when necessary. Prefer `const` when the values are not altered after assignment, otherwise, use `let`. Avoid using `var`.
- Use `camelCase` for function and variable names, if they consist of more than one word.
- Try to give meaningful names to variables. For example use `letter`, instead of `lt`. Some exceptions to convention are:
  - `arr` for arrays (usually as the snippet function's argument).
  - `str` for strings.
  - `num` or `n` for a numeric value (usually as the snippet function's argument).
  - `el` for DOM elements (usually as the snippet function's argument).
  - `val` or `v` for value (usually when iterating a list, mapping, sorting etc.).
  - `acc` for accumulators in `Array.prototype.reduce()`.
  - `(a,b)` for the two values compared when using `Array.prototype.sort()`.
  - `i` for indexes.
  - `fn` for function arguments.
  - `nums` for arrays of numbers.
- Use `()` if your function takes no arguments.
- Use `_` if an argument inside some function (e.g. `Array.prototype.reduce()`) is not used anywhere in your code.
- Specify default parameters for arguments, if necessary. It is preferred to put default parameters last unless you have a pretty good reason not to.
- If your snippet's function takes variadic arguments, use `...args` (although in certain cases, it might be needed to use a different name).
- If your snippet function's body is a single statement, omit the `return` keyword and use an expression instead.
- Always use soft tabs (2 spaces), never hard tabs.
- Omit curly braces (`{` and `}`) whenever possible.
- Always use single quotes for string literals. Use template literals, instead, if necessary.
- If your snippet's code is short enough (around 80 characters), you can make it a single-line function (although not mandatory). Otherwise, use multiple lines.
- Prefer using `Array` methods whenever possible.
- Prefer `Array.prototype.concat()` instead of `Array.prototype.push()` when working with `Array.prototype.reduce()`.
- Use strict equality checking (`===` and `!==` instead of `==` and `!=`), unless you specifically have reason not to.
- Prefer using the ternary operator (`condition ? trueResult : falseResult`) instead of `if else` statements whenever possible.
- Avoid nesting ternary operators (but you can do it if you feel like you should).
- You should define multiple variables on the same line (e.g. `const x = 0, y = 0`) whenever possible.
- Do not use trailing or leading underscores in variable names.
- Use dot notation (`object.property`) for object properties, when possible. Use bracket notation (`object[variable]`) when accessing object properties using a variable.
- Use arrow functions as much as possible, except when you can't.
- Use semicolons whenever necessary. If your snippet function's body is a single statement, return an expression and add a semicolon at the end.
- Leave a single space after a comma (`,`) character.
- Try to strike a balance between readability, brevity, and performance.
- Never use `eval()`. Your snippet will be disqualified immediately.
