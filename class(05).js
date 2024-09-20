let products = [
  {
    id: 101,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 1000, quantity: 5 },
      { id: 2, color: "white", price: 2000, quantity: 4 },
      { id: 3, color: "gold", price: 3000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        name: "Ali",
        comments: "Very good product",
        rating: 4.5,
        status: true,
      },
      {
        id: 2,
        name: "Ahmed",
        comments: "good product",
        rating: 4.0,
        status: true,
      },
      {
        id: 3,
        name: "Asad",
        comments: "Poor product",
        rating: 2.0,
        status: false,
      },
      {
        id: 4,
        name: "Mujtaba",
        comments: "very Poor product",
        rating: 1.0,
        status: false,
      },
    ],
  },
  {
    id: 102,
    title: "Airpod",
    variations: [
      { id: 1, color: "black", price: 1000, quantity: 5 },
      { id: 2, color: "white", price: 2000, quantity: 4 },
      { id: 3, color: "gold", price: 3000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        name: "Ali",
        comments: "Very good product",
        rating: 3.5,
        status: true,
      },
      {
        id: 2,
        name: "Zubair",
        comments: "good product",
        rating: 4.0,
        status: true,
      },
      {
        id: 3,
        name: "Asad",
        comments: "Poor product",
        rating: 2.0,
        status: false,
      },
      {
        id: 4,
        name: "Mujtaba",
        comments: "very Poor product",
        rating: 1.0,
        status: false,
      },
    ],
  },
  {
    id: 103,
    title: "LED",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "white", price: 60000, quantity: 4 },
      { id: 3, color: "gold", price: 70000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        name: "Ali",
        comments: "Very good product",
        rating: 5.0,
        status: true,
      },
      {
        id: 2,
        name: "Zubair",
        comments: "good product",
        rating: 4.0,
        status: true,
      },
      {
        id: 3,
        name: "Asad",
        comments: "Poor product",
        rating: 2.0,
        status: false,
      },
      {
        id: 4,
        name: "Mujtaba",
        comments: "very Poor product",
        rating: 1.0,
        status: false,
      },
    ],
  },
];

// Product <id> = avgRating(totalRating)
// Product 101 = 4.3 (3)

// debugger
for (let i = 0; i < products.length; i++) {
  let sum = 0;
  for (let j = 0; j < products[i].reviews.length; j++) {
    sum += products[i].reviews[j].rating;
  }
  let avgRating = sum / products[i].reviews.length;

  console.log("Product " + products[i].id + " = " + avgRating + "(" + products[i].reviews.length + ")");
}

// ----------------------------------------------
// let product = {
//   id: 101,
//   title: "Mobile",
//   variations: [
//     { id: 1, color: "black", price: 1000, quantity: 5 },
//     { id: 2, color: "white", price: 2000, quantity: 4 },
//     { id: 3, color: "gold", price: 3000, quantity: 3 },
//   ],
//   reviews: [
//     {
//       id: 1,
//       name: "Ali",
//       comments: "Very good product",
//       rating: 4.5,
//       status: true,
//     },
//     {
//       id: 2,
//       name: "Ahmed",
//       comments: "good product",
//       rating: 4,
//       status: true,
//     },
//     {
//       id: 3,
//       name: "Asad",
//       comments: "Poor product",
//       rating: 2,
//       status: false,
//     },
//     {
//       id: 4,
//       name: "Mujtaba",
//       comments: "very Poor product",
//       rating: 1,
//       status: false,
//     },
//   ],
// };

// Ahmed review is approved
// for (let i = 0; i < product.reviews.length; i++) {
//   if (product.reviews[i].status) {
//     console.log(product.reviews[i].name + " review is approved");
//   }
// }

// let sum = 0;
// for (let i = 0; i < product.reviews.length; i++) {
//   sum += product.reviews[i].rating;
// }

// let avgRating = sum / product.reviews.length
// console.log(avgRating)

// console.log(product.reviews.length)

// --------------------------------------------------------
// let product = {
//   id: 101,
//   title: "Mobile",
//   quantity: 5,
//   variations: [
//     { color: "black", price: 1000, quantity: 5 },
//     { color: "white", price: 2000, quantity: 4 },
//     { color: "gold", price: 3000, quantity: 3 },
//   ],
// };

// let sum = 0;
// for (let i = 0; i < product.variations.length; i++) {
//   sum = sum + product.variations[i].quantity;
// }

// console.log(sum)

// --------------------------------------------------------
// let product = {
//   id: 101,
//   title: "Mobile",
//   quantity: 5,
//   variations: [
//     { color: "black", price: 1000, quantity: 5 },
//     { color: "white", price: 2000, quantity: 4 },
//     { color: "gold", price: 3000, quantity: 3 },
//   ],
// };

// console.log(product.variations[1]);
// console.log(product.colors);
