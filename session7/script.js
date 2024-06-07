/**
 * 1.1 Anonymous Function 
 */

// Traditional function
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5));

// Anonymous function
(function (a, b) {
    return a + b;
})

// IIFE: Immediately Invoked Function Expression
// (function(a, b) {
//     console.log(`${a} + ${b} = ${a+b}`);
//     return a + b;
// })(2, 5);

// 1.3 Arrow Function 
let show = function () {
    console.log('Anonymous Function');
};
show();

let show2 = () => console.log('Anonymous Function with Arrow Function'); 
// show2();

let sumWithArrow = (a, b) => {
    return a + b;
};
console.log(sumWithArrow(4, 5)); 

// 1.4 Callback Function
let sumWithArrowAndCallback = (a, b, show) => {
    show();
    return a + b;
};
console.log(sumWithArrowAndCallback(4, 5, show2)); 

// Array Methods: High Order methods
// 2.1 Map

// Traditional iteration
let circles = [10, 30, 50];

let areas = [];
let area = 0;
for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(`Circles Array: ${circles}`);
console.log(`Areas Array: ${areas}`);

// Itearation using map()
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}

let areasUsingMap = circles.map(circleArea);
// console.log(`Areas Array Using map: ${areasUsingMap}`);

let areasUsingMapArrow = circles.map((radius) => {
    return Math.floor(Math.PI * radius * radius);
});
console.log(`Areas Array Using map2: ${areasUsingMapArrow}`);

// 2.2 Reduce
// Traditional way to find sum of an array
let orderAmounts = [20, 10, 4, 1];
let orderTotal = 0;
for (let index = 0; index < orderAmounts.length; index++) {
    orderTotal = orderTotal + orderAmounts[index];
}
console.log(`Order Total is: ${orderTotal}`);

// 0+20 = 20
// 20+10 = 30
// 30+4 = 34
//
const orderTotalWithReduce = orderAmounts.reduce((sum, amount) => sum + amount, 0);
console.log(`Order Total with Reduce is: ${orderTotalWithReduce}`);