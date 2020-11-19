"use strict";
Array.prototype.myFlat = function() {
    var ret = [];
    for(var i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            ret = ret.concat(this[i].myFlat());
        } else {
            if(typeof this[i] !== "number"){
                throw Error("Array must contain only numbers!")
            }
            ret.push(this[i]);
        }
    }
    return ret;
};

function f(arr){
    try{
        if(!(arr instanceof Array)){
            throw Error("Parameter passed should be an Array!");
        }
        arr = arr.myFlat();
        let sum = arr.reduce((sum,b)=>sum+b);
        console.log(sum);

    }catch(err){
        if(err.message === "Reduce of empty array with no initial value"){
            console.log(0);
        }else{
            console.log(err.message);
        }
        
    }
}


const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
const arr6 = [1,234,];
console.log("length is - " + arr6.length +" amitom errors ar daartkams mesame ar ari");
f(arr6);

f("STING");
f(1);
