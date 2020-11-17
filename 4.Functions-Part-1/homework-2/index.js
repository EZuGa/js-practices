
try{
    f([1,2,3]);
}catch(err){
    console.log(err.message);
}
try{
    f(1,2,3)
}catch(err){
    console.log(err.message);
}
try{
    f('Content') 
}catch(err){
    console.log(err.message);
}
try{
    f([]) 
}catch(err){
    console.log(err.message);
}



function f(arr){
    if(arr.length===0 && arr instanceof Array){
        throw Error("parameter can't be an empty");
    }else if(!(arr instanceof Array)){
        throw Error("parameter type should be an array");
    }
    if(arr.length==1){
        console.log(arr[0]);
    }else{
        console.log(arr[0]);
        arr.splice(0, 1);
        f(arr);
    }


}