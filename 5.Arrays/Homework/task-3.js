function rotate(arr,num,direction = "right"){
    try{
    if(!Array.isArray(arr)){
        throw Error("First parameter must be an array");
    }else if(typeof num !== "number" || num <1){
        throw Error("Second parameter must be a number more than 1");
    }else if(typeof direction !== "string"){
        throw Error("Third parameter must be a String");
    }
    //es agaraa sachiro
    // if(direction !== "left" || direction !== "right"){
    //     direction = "right";
    // }
    for(let i=1; i<=num;++i){
        if(direction === "left"){
        arr.push(arr[0]);
        arr.shift();
        continue;
        }
        //Nebismier Stringze right gaaketebs.
        arr.unshift(arr[arr.length-1]);
        arr.pop();
    }
    // return arr;
    }catch(err){
        console.log(err.message);
    }

}

const arr = [1,2,3];

rotate(arr);
console.log(arr);
