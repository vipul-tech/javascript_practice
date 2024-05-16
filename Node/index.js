console.log("Hello World!");
var a = 24;
console.log(a)
{
    var a = "Vipul";
    console.log(a)
}
console.log(a);

let b = 45;
console.log(b);
{
    let b = "Rohan";
    console.log(b)
}
// let b = 89;  throws error
b = 67;
console.log(b)

// const c;    throws error
const c = 78;
// c = 90;      TypeError: Assignment to constant variable
console.log(c);

let n1 = null;
let n2 = 678;

let s1 = "This is string";
let s2 = Symbol("This is symbol");

let b1 = true;
let b2 = BigInt(343);

let u;

console.log(n1);
console.log(typeof(n1));

console.log(n2);
console.log(typeof(n2));

console.log(s1);
console.log(typeof(s1));

console.log(s2);
console.log(typeof(s2));

console.log(b1);
console.log(typeof(b1));

console.log(b2);
console.log(typeof(b2));

console.log(u);
console.log(typeof(u));
