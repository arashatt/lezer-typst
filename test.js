import {parser }from "./typst.js"
import {testTree} from "@lezer/generator/test"
import fs from 'node:fs';

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
let tree = parser.parse(data);
let cursor = tree.cursor()
do {
  console.log(`Node ${cursor.name} is ${data.substring(cursor.from, cursor.to)}`)
} while (cursor.next())

});

