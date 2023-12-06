function giaithua(a){
    
    let tong = 1;
    for(i = 1; i <= a; i++){
    tong = tong*i
}
document.write(tong)
}
let a = +prompt("nhập giai thừa")
giaithua(a)