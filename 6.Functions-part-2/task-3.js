function compose(...func){
    if(!func.every((e)=> e instanceof Function)){
        throw Error("params must be functions")
    }

    return (jabaxa)=>{
        for(let i=func.length-1; i>=0; --i){
            jabaxa=func[i](jabaxa);    
        }
        return jabaxa;
    }
}


let jabaxa = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a');

console.log(jabaxa);