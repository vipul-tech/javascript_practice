let str = "Dassault is a good company";

function stringGenerator(str){
    let string = "";
    string = str;
    let res = string.split(' ')[0]
    if(res=="Dassault"){
        return string;
    }else{
        return "Dassault "+string;
    }
}

console.log(stringGenerator(str))

