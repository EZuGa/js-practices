let arr = [1, 2, 5, 9, 4, 13, 4, 10];


function numberExists(numSearch=4){
    for(let i=0;i<arr.length;++i){
        if(arr[i]==numSearch){
            console.log(`Number: ${numSearch} Exists!`)
            return true;
        }
    }
    console.log(`Number: ${numSearch} doesn't Exist!`)
    return false;
}

numberExists();
numberExists(10);
numberExists(4);
numberExists(3);