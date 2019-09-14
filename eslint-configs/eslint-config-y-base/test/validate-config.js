/**
 * Modified on the basis of `eslint-config-standard` test
 * https://github.com/standard/eslint-config-standard/blob/master/test/validate-config.js
 * The MIT License (MIT)
 * Copyright (c) Feross Aboukhadijeh
 */

const path = require('path');
const eslint = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', function(t) {
  const CLIEngine = eslint.CLIEngine;

  const configFile = path.resolve(__dirname, '../index.js');
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile,
  });
  const formatter = cli.getFormatter();

  const code = `
const foo = 1;
function bar() { /* do nothing */ }
bar(foo);
`;

  const lintResult = cli.executeOnText(code);
  t.equal(lintResult.errorCount, 0, formatter(lintResult.results));
  t.end();
});
