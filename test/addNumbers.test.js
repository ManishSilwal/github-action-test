import { addNumbers } from "../src/addNumbers.js";

let result = addNumbers(1,3);
if (result===4){
    console.log('pass');
}else{
    console.log('fail');
}


let result1 = addNumbers(1,-3);
if (result1===-2){
    console.log('pass');
}else{
    console.log('fail');
}

let result2 = addNumbers(-1,-3);
if (result2===-4){
    console.log('pass');
}else{
    console.log('fail');
}

let result3 = addNumbers(-1,4);
if (result3===3){
    console.log('pass');
}else{
    console.log('fail');
}


