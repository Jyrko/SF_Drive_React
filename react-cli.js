const yargs = require('yargs');
const fs = require('fs').promises;
const path = require('path');

yargs.option('function', { alias: "func" }).command(['create <filename> <page>'], "Create a new React template", {}, (argv) => {
  const template =
`import React from 'react';

const ${argv.filename} = (props) => {
  return (
    <div>${argv.filename} works</div>
  );
}

export default ${argv.filename};
  `;

  fs.writeFile(path.resolve(__dirname, `src/components/${argv.page ? argv.page : ''}/${argv.filename}.jsx`), template)
    .then(() => console.log("File was successfully created"))
    .catch(err => console.log(err));
    console.log(template);
}).argv;


console.log(yargs.argv);
