function add(a, b) {
    let sum =a + b;
    return sum
  }
  
  console.log(add(2, 3)); // 5
  console.log(add(10, 5)); // 15
  
console.log("----------------------------------------------------------------------")
// -------------------------------------------------------------------------------
function multiply(a, b) {
    let mul = a * b;
    return mul
}
  
  console.log(multiply(2, 4)); // 8
  console.log(multiply(5, 3)); // 15
  
console.log("----------------------------------------------------------------------")
// ---------------------------------------------------------------------------------
function greet(name) {
   console.log(`hello ${name}`)
}
  
  console.log(greet("Ali"));
  // Hello Ali
  
  console.log(greet("Ahmed"));
  // Hello Ahmed
console.log("----------------------------------------------------------------------")
// ------------------------------------------------------------------------------------

function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
  
console.log("----------------------------------------------------------------------")
// ------------------------------------------------------------------------------------

function countItems(arr) {
    return arr.length;

  }
  
  console.log(countItems([1, 2, 3])); // 3
  console.log(countItems(["a", "b"])); // 2

  
console.log("----------------------------------------------------------------------")
// ------------------------------------------------------------------------------------

function bigger(a, b) {
    if (a > b) {
        return a;
      } else {
        return b;
      }
  }
  
  console.log(bigger(5, 10)); // 10
  console.log(bigger(20, 3)); // 20
  