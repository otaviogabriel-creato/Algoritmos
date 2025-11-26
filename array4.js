const array = [4,9,2,11,7,82]
let t = array.length
let maior = null


for(let i = 0;i <= t;i++){
    array[i]
    if(maior == null){
        maior = array[i]
    }else if(array[i] > maior){
        maior = array[i] 
    }
}

console.log(maior);
