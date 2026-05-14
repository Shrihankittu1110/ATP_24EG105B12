//write a function that receives an array of arg and return their sum
let arr=[10,20,30]
function sum(arr){
    let t=0
    for(let i=0;i<arr.length;i++){
        t=t+arr[i]
    }
    return t
}
console.log(sum(arr))