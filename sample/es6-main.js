
// math.js
export default sum = function (a, b) {
    return a + b;
}

// sub1.js
import sum from './math.js'

export default plusTwo = function (a) {
    return sum(a, 2);
}

// main.js
import plusTwo from './sub1.js'
console.log(plusTwo(10)) // 12

