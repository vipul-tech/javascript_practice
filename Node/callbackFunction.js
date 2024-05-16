function abc(){
	console.log("From abc");
}

let xyz = function(){
	console.log("From xyz");
}

function demo(...op){
	console.log("From demo");
	for(let i=0;i<op.length;i++)
		op[i]();
	console.log("----------");
}

demo();
demo(abc);
demo(xyz);
demo(abc,xyz);
demo(xyz,abc);
demo(abc,xyz,xyz,abc,abc,abc,abc,xyz);