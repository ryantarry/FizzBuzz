/* Here's a slight variation to the exercise - change the value of n1 or n2 to get different result when code is run in console */
function fizzbuzz (n1 = 10, n2 = 7) {
    var array = [];
    for (var i = 1; i <= 1000; i++) {
        if (i % n1 === 0 && i % n2 === 0)
            console.log("Fizzbuzz");
        else if (i % n1 === 0)
            console.log("Fizz");
        else if (i % n2 === 0)
            console.log("Buzz");
        else
            console.log(i);
    }
    return array
}
fizzbuzz();