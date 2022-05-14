const basket = [
  { id: "1", product: "apple", price: "2000" },
  { id: "2", product: "orange", price: "4000" },
  [
    { id: "3", product: "banana", price: "3000" },
    { id: "4", product: "kiwi", price: "10000" },
  ],
  [
    { id: "5", product: "mobile", price: "23000" },
    ,
    [
      { id: "6", product: "banana", price: "3000" },
      { id: "7", product: "computer", price: "100000" },
    ],
  ],
];

//
const flatten = (acc, item) => {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
};

const basketContents = basket.reduce(flatten, []);
console.log(basketContents, "showing basketContents");
//
const ResultOccurrence = basketContents.reduce((acc, item) => {
  acc[item.product] = (acc[item.product] || 0) + 1;
  return acc;
}, {});

var newArrayOfResulted = Object.keys(ResultOccurrence).map(function (item) {
  return {
    product_Name: item,
    qty: ResultOccurrence[item],
  };
});
console.log(newArrayOfResulted, "basketContent with Occurrence");

//remove duplicates

const uniqueItems = [];

const unique = basketContents.filter((element) => {
  const isDuplicate = uniqueItems.includes(element.product);

  if (!isDuplicate) {
    uniqueItems.push(element.product);

    return true;
  }

  return false;
});
// console.log(unique, "remove duplicates");
