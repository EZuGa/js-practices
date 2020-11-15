let n=1000;
let num=0;

while(n/2>50){
    n/=2;
    ++num;
}

console.log(`Iterated ${num} times. The result is: ${n}`);