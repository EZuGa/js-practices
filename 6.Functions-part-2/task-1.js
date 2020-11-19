function mix(...func){
    if(!func.every((e)=> e instanceof Function)){
        throw Error("params must be functions")
    }

    let temp = func[0]();
    for(let i=1;i<func.length;++i){
        temp = func[i](temp);
    }
    console.log(temp);
}


mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2