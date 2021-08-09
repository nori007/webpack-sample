
// math.js
define([], function () {
    function sum (a, b) {
        return a + b;
    }

    return {
        sum: sum
    }
});

// sub1.js
define(['math'], function (math) {
    function plusTwo (a) {
        return math.sum(a, 2);
    }

    return {
        plusTwo: plusTwo
    }
});

// main.js
require(['sub1'], function(sub) {
    console.log(sub.plusTwo(10)) // 12
});


