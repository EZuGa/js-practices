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
    console.log(getDivisors("Content"));
    console.log(getDivisors(0));    
}catch(err){
    console.log(err.message);
}
