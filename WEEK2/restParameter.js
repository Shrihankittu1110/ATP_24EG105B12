
//write a function that returns any number of arguments and return there sum

let sum=0
function findsum(...a){
	for(let i=0;i<a.length;i++){
		sum+=a[i]
	}
	return ("sum of the number  "+sum)
}
console.log(findsum(10,20,30,40,))
  

/*
const findsum=(...num)=>{
	return num.reduce((sum,el)=> sum+el)
	}
	console.log(10,20,30,40)
	*/