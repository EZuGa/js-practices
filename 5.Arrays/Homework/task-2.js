Array.prototype.myReverse = function() {
    let arrLength = this.length;
    for(let i=0;i<Math.floor(arrLength/2);++i){
        let temp = this[i];
        this[i] = this[arrLength - i - 1];
        this[arrLength - i - 1] = temp;
        return this;
    }
}
function reverse(arr){
    try{
        if(!Array.isArray(arr)){
            throw Error("Parameter passed must be an array!");
        }else if(arr.length === 0){
            throw Error("Your array mustn't be empty");
        }
        else{
            return arr.myReverse();
        }

    }catch(err){
       console.log(err.message);
    }
    // let arrLength = arr.length;
    // for(let i=0;i<Math.floor(arrLength/2);++i){
    //     let temp = arr[i];
    //     arr[i] = arr[arrLength - i - 1];
    //     arr[arrLength - i - 1] = temp;
    //     console.log(arr)
    // }
    
}



console.log(reverse([1,2,3,4]));

console.log(reverse("JABAXA"));
