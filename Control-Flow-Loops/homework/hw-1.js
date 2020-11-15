const arr = [2, 5, 9, 15, 0, 4];
task1();

function task1(){
    let newarr =[];
    for(let i=0;i<arr.length;++i){
        if(arr[i]>3 && arr[i]<10){
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}