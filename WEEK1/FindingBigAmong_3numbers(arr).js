//write a function that recevies 3 number args and return the big number
let arr=[10,20,30]
function findBig(arr){
    let big=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>big){
            big=arr[i]
        }
    }
    return big
}
console.log(findBig(arr))