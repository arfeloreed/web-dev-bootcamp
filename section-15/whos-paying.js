var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
    //Write your code here.
    var randomNum = Math.floor(Math.random() * names.length);
    return names[randomNum] + " is going to buy lunch today!"
    /******Don't change the code below*******/    
}

console.log(whosPaying(names));