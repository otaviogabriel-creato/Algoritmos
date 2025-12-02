const array = [4,12,8,30,23]

let c = 0
let t = array.length 

for (let i = 0;i < t; i++){
    array[i]
    if(array[i] > 10){
      c++
    }
 
}

 console.log("São maiores " + c + " números.")
