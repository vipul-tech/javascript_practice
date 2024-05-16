function abc(){
	console.log("Normal Function");
}

abc();

var xyz = function(){
	console.log("Anonymous function");
}

xyz();

var arrow = ()=>{
	console.log("Arrow function");
}

arrow();

new Function(console.log("Function Object"));