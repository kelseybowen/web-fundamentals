// 1. PRINT ODDS 1-20
for (var i=1; i<=20; i+=2) {
    console.log(i);
}

// 2. DECREASING MULTIPLES OF 3
for (var i=100; i>0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 3. PRINT THE SEQUENCE
for (var i=4; i>-4; i-=1.5) {
    console.log(i);
}

// 4. SIGMA
var sum = 0;
for (var i=1; i<=100; i++) {
    sum += i;
}
console.log(sum);

// 5. FACTORIAL
var product = 1;
for (var i=1; i<=12; i++) {
    product *= i;
}
console.log(product);

