
// math.js
module.exports = {
    sum: function (a, b) {
        return a + b;
    }
}

// sub1.js
const sum = require('.math.js').sum;
module.exports = {
    plusTwo: function (a) {
        return sum(a, 2);
    }
}

// main.js
const plusTwo = require('./sub1.js').plusTwo;
console.log(plusTwo(10)); // 12

