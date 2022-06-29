var x = 1;
for (var i=0; i<100; i++){
    if ((x % 3 == 0) && (x % 5 != 0)){
        console.log("Fizz");
        x = x + 1;
    } else if ((x % 5 == 0) && (x % 3 != 0)) {
        console.log("Buzz");
        x = x + 1;
    } else if ((x % 3 == 0) && (x % 5 == 0)) {
        console.log ("FizzBuzz");
        x = x + 1;
    } else if ((x % 3 != 0 && x % 5 != 0)) {
        console.log(x);
        x = x + 1;
    }
}