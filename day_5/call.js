let obj1 = {
    f_name: "abc",
    l_name: "xyz",
}
function printName(college) {
    console.log(`Hello ${this.f_name}  ${this.l_name} from ${college}`);
}
let obj2 = {
    f_name: "rohini",
    l_name: "mittal"
}
printName.apply(obj2, ["ABESEC"]);
const printNameFunction = printName.bind(obj1,"ABES");
printNameFunction();