// const people = [
//   { id: 1, name: "taha", age: 12 },
//   { id: 2, name: "ali", age: 22 },
//   { id: 3, name: "mamad", age: 42 },
// ];

// const result = people.reduce((acc, people) => {
//   return acc + people.age;
// }, 0);

// console.log(result);

// const createNewOne = people.reduce((acc, person) => [...acc, person], []);
// console.log(createNewOne);

// const customReducer = people.reduce((acc, person) => {
//   return { ...acc, [person.id]: person.name };
// }, {});

// console.log(customReducer);

// //test

// const test = (acc, item) => {
//   return { ...acc, [item.id]: item.name };
// };

// const Test = people.reduce(test, {});
// console.log(Test, "second way");
// //
// const findMaxAge = people.reduce((acc, current) => {
//   if (acc === null || current.age > acc) return current.age;
//   return acc;
// }, null);

// console.log(findMaxAge, "Max Age");

const order = [
  { id: 1, name: "taha", age: 12, ordered: "pizza" },
  { id: 1, name: "taha", age: 12, ordered: "pizza" },
  { id: 2, name: "test", age: 12, ordered: "pizza" },
  { id: 3, name: "test2", age: 12, ordered: "pizza" },
  { id: 4, name: "mamad", age: 12, ordered: "pizza" },
  { id: 5, name: "ali", age: 22, ordered: "burger" },
  { id: 6, name: "hesam", age: 42 },
];

// counterItem = order.reduce((acc, statusOrder) => {
//   return { ...acc, [statusOrder.ordered]: (acc[statusOrder.ordered] || 0) + 1 };
// }, {});

// console.log(counterItem, "counterItem");

 