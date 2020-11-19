function mix(...func){
    if(!func.every((e)=> e instanceof Function)){
        throw Error("params must be functions")
    }
    
    let temp;
    let errors = [];
    for(let i=0;i<func.length;++i){
        try{
            if(i===0){
                console.log("aeee")
                temp = func[0]();
                continue;
            }
            temp = func[i](temp);
        }catch(err){
            // err.level = i;
            // errors.push(err);
            errors.push({
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i
            });
            if(i===0){
                break;
            }
        }
    }
    
    return({
        errors:errors,
        value: temp
    })
    
}

let jabaxa = mix(() => {
    0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
	throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});

console.log(jabaxa)
