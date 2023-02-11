//Advance Train
const folders = [
  "index.js",
  "app.js",
  ["test.js", "app.js"],
  ["map.js", ["main.css", "main.ts", ["com.js", "app.js"]]],
];

const flatten = (acc, item) => {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
};

const folderContents = folders.reduce(flatten, []);
console.log(folderContents, "showing folderContents");

const ResultOccurrence = folderContents.reduce((acc, item) => {
  return { ...acc, [item]: (acc[item] || 0) + 1 };
}, {});
console.log(ResultOccurrence, "folderContent with Occurrence");

const removeDuplicates = folderContents.reduce((acc, item) => {
  return acc.includes(item) ? acc : [...acc, item];
}, []);

console.log(removeDuplicates, "remove duplicates");
