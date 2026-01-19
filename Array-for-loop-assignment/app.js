// first
var numbers = [10, 20, 30, 40, 50];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// second
var colors = ["red", "blue", "green", "yellow"];

for (var i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}
// third
var marks = [50, 60, 70, 80];
var sum = 0;

for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

console.log("Sum =", sum);
// fourth
var fruits = ["apple", "banana", "mango", "orange"];
var count = 0;

for (var i = 0; fruits[i] !== undefined; i++) {
    count++;
}

console.log("Total elements =", count)
// fiffth
var nums = [45, 22, 89, 14, 77];

var largest = nums[0];

for (var i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
        largest = nums[i];
    }
}

console.log("Largest number =", largest);
// sixth
var values = [9, 3, 15, 1, 6];

var smallest = values[0];

for (var i = 4; i < values.length; i++) {
  if (values[i] < smallest) {
    smallest = values[i];
  }
}

console.log(smallest);
// seventh
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var count = 0;
var i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
  i++;
}

console.log(count);
// eighth
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}   
// nineth
var numbers = [2, 4, 6, 8];
var newArray = [];

for (var i = 0; i < numbers.length; i++) {
  newArray[i] = numbers[i] * 2;
}

console.log(newArray);
// tenth
var arr = [10, 20, 30, 40, 50];
var found = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 30) {
    found = true;
    break; // stop loop once found
  }
}

if (found) {
  console.log("30 exists in the array");
} else {
  console.log("30 does not exist in the array");
}