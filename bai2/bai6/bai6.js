function kiemtraso(a){
    if(Number.isInteger(a) && a > 0){
        document.write("true")
    }else{
        document.write("false")
    }
}
let a = +prompt("nhập số để kiểm tra")
kiemtraso(a)