for (var i=1; i < 11; i++){
    console.log(i)
}
for (var i=10; i >= 1; i--){
    console.log(i)
}
for (var i=5; i < 16; i++){
    console.log(i)
}
for (var i=0; i < 21; i++){
    console.log(i)
}
for (var i=0; i < 22; i++){
    if(i % 2 !=1){
        console.log(i)
    }
}
for (var i=0  ; i < 20; i++){
    if(i % 2!==  0){
        console.log(i)
    }
}
for (var i=1 ; i <= 50; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("sum=",sum);

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}

console.log("Sum of even numbers =", sum);

for (let i = 1; i <= 10; i++) {
    console.log(i + " square is " + (i * i));
}
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

let num = prompt("Enter a number");

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
