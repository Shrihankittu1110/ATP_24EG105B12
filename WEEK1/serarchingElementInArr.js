//write a function that recevies an array and search elements as args and returns the index of that search element as args and return the index of that seaerch element in the array.it shou;d return "not found"when search element not found.

 let arr=[10,20,30]
    function search(arr,search){
        for(let i=0;i<arr.length;i++){
            if(arr[i]===search){
                return i
            }
        }
        return "not found"
    }
    console.log(search(arr,20))
    console.log(search(arr,50))