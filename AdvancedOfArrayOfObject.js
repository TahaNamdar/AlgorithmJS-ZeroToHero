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
      { id: "6", product: "banana", price: "2000" },
      { id: "7", product: "computer", price: "100000" },
    ],
  ],
];

//flatten array
const flatten = (acc, item) => {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
};

const basketContents = basket.reduce(flatten, []);
console.log(basketContents, "showing basketContents");
//Occurrence
const ResultOccurrence = basketContents.reduce((acc, item) => {
  acc[item.product] = (acc[item.product] || 0) + 1;
  return acc;
}, {});
//generate new array

var newArrayOfResulted = Object.keys(ResultOccurrence).map(function (item) {
  return {
    product_Name: item,
    qty: ResultOccurrence[item],
  };
});
console.log(newArrayOfResulted, "basketContent with Occurrence");

//generate new array

const arrayGenerator = basketContents.map((product) => {
  const findProduct = newArrayOfResulted.find(
    (item) => product.product === item.product_Name
  );

  return {
    id: product.id,
    product: product.product,
    price: product.price,
    qty: findProduct.qty,
  };
});

console.log(arrayGenerator, "create new Array");

//remove duplicates

const uniqueItems = [];

const unique = arrayGenerator.filter((element) => {
  const isDuplicate = uniqueItems.includes(element.product);

  if (!isDuplicate) {
    uniqueItems.push(element.product);

    return true;
  }

  return false;
});
console.log(unique, "remove duplicates");

//calculate total price
const totalPrice = unique.reduce((acc, item) => {
  return acc + Number(item.price) * item.qty;
}, 0);
console.log(totalPrice, "totalPrice");
