function add(a) {
    var b = 13;
    return function curringadd(b) {
        return (a + b);
    }
}
const sum = add(2);
console.log(sum(12));

