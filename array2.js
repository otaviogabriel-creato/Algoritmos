let a = ["sol","navigator","Margarida","pão"]
let t = a.length -1
let a1 = []

for (let i = 0;i <= t;i++){
    let c = a[i].length
    if(c >= 5){
        a1.push(a[i])
        
    }
    
}

console.log(a1);
