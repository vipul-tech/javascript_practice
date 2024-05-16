function display(name, age, salary, desig){
	console.log("Name : " + name);
	console.log("Age : " + age);
	console.log("Salary : " + salary);
	console.log("Designation : " + desig);
	console.log("-----------------");
}
let emp1 = ["Rohit", 34, 45000, "Tester"];
display(...emp1);

let arr1 = [11,22,33,44]
let arr2 = [22,35,78,89,110,44]
let arr3 = [78,111,220,87,111,1009]

let jarr=[arr1,arr2,arr3]
console.log(jarr)

let narr=[...arr1, ...arr2, ...arr3]
console.log(narr)

console.log("----------Set functionality--------");
let distinct = new Set([...arr1, ...arr2, ...arr3])
console.log(distinct)

let emp2 = {
	"name" : "Ram",
	"age" : 26,
	"salary" : 60000,
	"desig" : "Programmer"
}

let {name, age, salary, desig} = emp2;
console.log(name);
console.log(age);
console.log(salary);
console.log(desig);