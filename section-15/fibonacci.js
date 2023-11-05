function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    //Write your code here:
    var output = [];

    if (n === 1) {
        output.push(0);
    } else if (n === 2) {
        output.push(0, 1);
    } else {
        output = [0, 1];
        for (var i = output.length; i < n; i++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }

    return output
    //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(1))
console.log(fibonacciGenerator(2))
console.log(fibonacciGenerator(3))
console.log(fibonacciGenerator(4))
console.log(fibonacciGenerator(5))
console.log(fibonacciGenerator(10))