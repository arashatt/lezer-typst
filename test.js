import {parser }from "./typst.js"
import {testTree} from "@lezer/generator/test"
import fs from 'node:fs';

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
let output = parser.parse(data);
console.log(output.TreeBuffer);
});

