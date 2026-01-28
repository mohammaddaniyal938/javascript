let products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      varations: [
        {id: 1, color: "black", price: 50000, quantity: 5},
        {id: 2, color: "red", price: 50000, quantity: 1},
        {id: 3, color: "silver", price: 55000, quantity: 8},
      ],
      reviews: [
        { id: 1, user: "Ahmad", rating: 4.0, status: true },
        { id: 2, user: "Zubair", rating: 4.5, status: false },
        { id: 3, user: "Ali", rating: 5.0, status: true }
      ]
    },
    {
      id: 102,
      title: "Mobile",
      varations: [
        {id: 1, color: "black", price: 50000, quantity: 5},
        {id: 2, color: "red", price: 50000, quantity: 1},
        {id: 3, color: "silver", price: 55000, quantity: 8},
      ],
      reviews: [
        { id: 1, user: "Ahmad", rating: 4.0, status: true },
        { id: 2, user: "Zubair", rating: 4.5, status: false },
        { id: 3, user: "Ali", rating: 5.0, status: true }
      ]
    }
  ];
// ------------------------------------------------------------------------
// -----------------------PART NO : 01 ------------------------------------
// Question no: 01
  console.log(products[0].title)
//---------------------------------------------------------------------------
// Question no :02
  let totalQuantity = 0;
  for (let i = 0; i < products[0].varations.length; i++) {
    totalQuantity = totalQuantity + products[0].varations[i].quantity;
  }
  
  console.log("Total Quantity:", totalQuantity);
//---------------------------------------------------------------------------
// Question no : 03
let totalRatings = 0;
let totalReviews = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].id === 101) {

    for (let j = 0; j < products[i].reviews.length; j++) {
      totalRatings += products[i].reviews[j].rating;
      totalReviews++;
    }
  }
}

let average = totalRatings / totalReviews;
console.log("Average Rating:", average);
//------------------------------------------------------------------------------
//Question no : 04

let approvedCount = 0;

for (let i = 0; i < products.length; i++) {

  for (let j = 0; j < products[i].reviews.length; j++) {
    if (products[i].reviews[j].status === true) {
      approvedCount++;
    }
  }
}

console.log("Approved Reviews Count:", approvedCount);
 //------------------------------------------------------------------------------
//Question no : 05

let highestPrice = 0;

for (let i = 0; i < products.length; i++) {

  for (let j = 0; j < products[i].varations.length; j++) {
    if (products[i].varations[j].price > highestPrice) {
      highestPrice = products[i].varations[j].price;
    }
  }
}

console.log("Most Expensive Variation Price:", highestPrice);
 //------------------------------------------------------------------------------
//----------------------PART NO : 2 ---------------------------------------------
//Question no : 06

let totalquantity = 0;

for (let i = 0; i < products.length; i++) {

  for (let j = 0; j < products[i].varations.length; j++) {
    totalquantity += products[i].varations[j].quantity;
  }
}

console.log("Total Stock Quantity:", totalquantity);
// -----------------------------------------------------------------------------------------
//Question no : 07
for (let i = 0; i < products.length; i++) {

    let totalRatings = 0;
    let totalReviews = 0;
  
    for (let j = 0; j < products[i].reviews.length; j++) {
      totalRatings += products[i].reviews[j].rating;
      totalReviews++;
    }
  
    let average = totalRatings / totalReviews;
  
    console.log("Product " + products[i].id + " = " + average + "(" +totalReviews +")" );
  }

// -----------------------------------------------------------------------------------------
//Question no : 08
let maxStock = 0;
let maxProductId = null;
let maxProductTitle = "";


for (let i = 0; i < products.length; i++) {

  let productStock = 0;

  for (let j = 0; j < products[i].varations.length; j++) {
    productStock += products[i].varations[j].quantity;
  }

  if (productStock > maxStock) {
    maxStock = productStock;
    maxProductId = products[i].id;
    maxProductTitle = products[i].title;
  }
}

console.log(
  "Product with highest stock: " + maxProductId + " (" + maxProductTitle + ") = " + maxStock
);
// -----------------------------------------------------------------------------------
// Question no : 09
let approvedReviews = 0;

for (let i = 0; i < products.length; i++) {

  for (let j = 0; j < products[i].reviews.length; j++) {
    if (products[i].reviews[j].status === true) {
      approvedReviews++;
    }
  }
}

console.log("Total Approved Reviews:", approvedReviews);
// ------------------------------------------------------------------------------------