function extractCurrencyValue(num){
    if(typeof str !== "string"){
        throw new Error("Not a String");
    }
    
    num = parseInt(num.slice(1))
    return num;
}


console.log(extractCurrencyValue('$120'));