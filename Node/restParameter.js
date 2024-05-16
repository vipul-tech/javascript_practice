function add(...a){
	let sum = 0;
	for(let i=0;i<a.length;i++)
		sum = sum + a[i];
	console.log("Sum : " + sum);
}
add(12,24);
add(12,24,36);
add();
add(45);
add(10,20,30,40,50,60,70,80,90,100);