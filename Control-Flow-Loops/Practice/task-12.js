let arr = [1, 2, 5, 9, 4, 13, 4, 10, -20, -40, -1];

function arrPositives(){
    let sum = 0;
    for(const item of arr){
        sum += item>0?item:0;
    }
    console.log(sum);

}


arrPositives();