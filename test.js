function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let myCounter = counter();

console.log(myCounter()); // 1

console.log(myCounter()); // 2

