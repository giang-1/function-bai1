function sonhonhat(a,b,c){
    if(a < b){
        if (a < c){
            document.write('số nhỏ nhất là' + "a")
        }else{
            document.write('số nhỏ nhất là' + "c")
        }
    }else if(b < c){
        document.write('số nhỏ nhất là' +"b")
    }else{
        document.write('số nhỏ nhất là' + "c")
    }
}
let a = +prompt("nhập a")
let b = +prompt("nhập b")
let c = +prompt("nhập c")
sonhonhat(a,b,c)