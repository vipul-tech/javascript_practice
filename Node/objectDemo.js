function display(obj){
	console.log("Name : " + obj.name);
	console.log("Age : " + obj.age);
	console.log("Salary : " + obj.salary);
	console.log("Designation : " + obj.desig);
	console.log("-----------------");
}

var obj1 = new Object();
obj1.name = "Rajesh";
obj1.age = 24;
obj1.salary = 45000;
obj1.desig = "Programmer";

console.log("Using Object Constructor");
display(obj1);

function Emp(name, age, salary, desig){
	this.name = name;
	this.age = age;
	this.salary = salary;
	this.desig = desig;
}

var obj2 = new Emp("Sonam", 33, 60000, "Programmer");

console.log("Using function Constructor");
display(obj2);

var obj3 = {
	"name" : "Pankaj",
	"age" : 42,
	"salary" : 85000,
	"desig" : "Manager"
}

console.log("Using JSON");
display(obj3);

var obj4 = Object.create(obj3);
console.log("Using create method of Object class");
display(obj4);
console.log("After updating obj4");
obj4.name = "Ankit";
obj4.salary = 75000;
display(obj4);
display(obj3);

var emp = new function(){
	this.name = "Vishwajeet";
	this.age = 50;
	this.salary = 95000;
	this.desig = "Manager";
}

console.log("Using singleton pattern/anonymous class");
display(emp);