let array1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe' ,'Regulu'];
let array2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major' ,'Leo'];
let a = prompt('nhập a: ')
let b = false
for (i =0;i < array1.length; i++){
    if(a == array1[i]){
        for(j = 0 ; j <array2.length; j++){
            j = i 
            document.write(array2[j])
            break;
        }
        b = true;
    }
}
if(b){

}else{
    document.write('không có')
}


