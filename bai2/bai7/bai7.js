function doicho(a,b){
    let temp;
    temp =a  
    a = b
    b = temp
    document.write("a là " +a)
    document.write("b là " + b)
}
let a = +prompt("nhập a")
let b = +prompt("nhập b")
doicho(a,b)