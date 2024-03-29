function getDivisors(num){
    let arr = [1,num];
    if(typeof num !== "number"){
        throw Error("Error: parameter type is not a Number");
    }
    else if (num==0){
        throw Error("Error: parameter can't be a 0");
    }
    
    for(let i=2;i<=Math.sqrt(num);++i){
        if(num%i==0){
            arr.push(i);

            if(i != Math.sqrt(num)){
                arr.push(num/i);
            }
        }
    }

    arr = arr.sort(function(a,b){return a-b});
    return arr;
}

try{
    console.log(getDivisors(12));
}catch(err){
    console.log(err.message);
}
try{
    console.log(getDivisors("Content"));
}catch(err){
    console.log(err.message);
}

try{
    console.log(getDivisors(0));    
}catch(err){
    console.log(err.message);
}


function getDivisors2(num){
    let arr = [];
    if(typeof num !== "number"){
        throw Error("Error: parameter type is not a Number");
    }
    else if (num==0){
        throw Error("Error: parameter can't be a 0");
    }

    return function raa(num2=Math.floor(Math.sqrt(num))){
        if(num%num2==0){
            arr.push(num2);
            if(num2 != Math.floor(Math.sqrt(num))){
                arr.push(num/num2);
            }
        }
        if(num2===1){
            arr = arr.sort(function(a,b){return a-b});
            return arr;
        }
        raa(num2-1);
        return arr;
    }
}

let asi = getDivisors2(100);
console.log(asi());



function getDivisors3(num,arr=[num],num2=Math.floor(Math.sqrt(num))){
    if(typeof num !== "number"){
        throw Error("Error: parameter type is not a Number");
    }
    else if (num==0){
        throw Error("Error: parameter can't be a 0");
    }

    if(num2===1){
        arr.push(1);
        arr = arr.sort(function(a,b){return a-b});
        return arr;
    }else if(num%num2==0){
        arr.push(num2)
        if(num2 != Math.sqrt(num)){
            arr.push(num/num2);
            }
        getDivisors(num,arr,num2-1);
        return arr;
    }
    else{
        getDivisors(num,arr,num2-1);
        return arr;
    }

}
console.log(getDivisors(3071));


function getDivisors4(num,func){
    
    return func(num);

}


var func = function(num,arr=[num],num2=Math.floor(Math.sqrt(num))){
    
    if(num2===1){
        arr.push(1);
        arr = arr.sort(function(a,b){return a-b});
        return arr;
    }else if(num%num2==0){
        arr.push(num2)
        if(num2 != Math.sqrt(num)){
            arr.push(num/num2);
            }
            func(num,arr,num2-1);
        return arr;
    }
    else{
        func(num,arr,num2-1);
        return arr;
    }
}

console.log(getDivisors4(36,func));


//DZAAN KAI XERXI:)
function giorgi(num1,num2=Math.floor(Math.sqrt(num1))){

    if(num2===1){
        let arr = [1];
        return arr;
    }
    else if(num1%num2===0){

        let arr = giorgi(num1,num2-1);
        arr.push(num2);
        if (num2!== Math.floor(Math.sqrt(num1))){
            arr.push(num1/num2);
        }
        return arr;
    }else if(num2==Math.floor(Math.sqrt(num1))){
        let arr = giorgi(num1,num2-1);
        arr.push(num1);
        arr.sort((a,b)=>a-b);
        return arr;
    }
    else{
        let arr = giorgi(num1,num2-1);
        return arr;

    }

}

console.log(giorgi(50));






