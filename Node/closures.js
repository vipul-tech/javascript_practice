function abc(){
	let a = 10;
	let minus = function(){
		a = a - 1;
		console.log(a);
	}
	return minus;
}

let decr = abc();
decr();
decr();
decr();
decr();
decr();
console.log("------------");

let incr = function(){
	let a = 0;
	function plus(){
		a = a + 1;
		console.log(a);
	}
	return plus;
}()

//let incr = abc();
incr();
incr();
incr();
incr();
incr();