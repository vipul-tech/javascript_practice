let str1 = "Wissen";
let str2 = "Technology";

let promise = new Promise(
	function(resolve, reject){
		if( (str1+str2) == "WissenTechnology" ){
			setTimeout( ()=>
				{
					resolve(10)
				},5000 
			);
		}
		else
			reject();
	}
);

promise
	.then(
		(val)=>{
			console.log("Best place to work");
			console.log("Value " + val);
			val = val + 5;
			return val;
		},
		()=>{
			console.log("Company name misspelled");
			throw new Error("Failed : Some error occured");
		}
	)
	.then(
		(val)=>{
			console.log("Let's continue working");
			console.log("Value " + val);
			//throw new Error("Success : Some error occured");
		},
		()=>{
			console.log("Sorry! it is still misspelled");
			throw new Error("Failed : Some error occured");
		}
	)
	.catch(
		(err)=>{
			console.log("Error handling done here...");
			console.log("Message : " + err.message);
		}
	)
	.finally(
		()=>{
			console.log("Thank You");
		}
	)

console.log("I will not wait");