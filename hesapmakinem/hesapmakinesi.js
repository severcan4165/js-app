function hesapla() {
    let abc = document.getElementsByName("islem");
    let sayi1 = document.getElementById("sayi1").value;
    let sayi2 = document.getElementById("sayi2").value;
    
    if(abc[0].checked){
        let sonuc = parseInt(sayi1) + parseInt(sayi2);
         console.log(sonuc);
         document.write(sonuc);
    }

    else if(abc[1].checked){

        let sonuc = parseInt(sayi1) - parseInt(sayi2);
        console.log(sonuc);
        document.write(sonuc);
    }		
    else if(abc[2].checked){
        let sonuc = parseInt(sayi1) * parseInt(sayi2);
        console.log(sonuc);
        document.write(sonuc);
    }

    else if(abc[3].checked){
        let sonuc = parseInt(sayi1) / parseInt(sayi2);
        console.log(sonuc);
        document.write(sonuc);
    }

}

//! Other simple solution
// let f = +prompt(`ilk`);
// let s = +prompt(`sec`);
// let t = +prompt(`third`);
// let result = f%10==s%10 || f%10==t%10 || t%10==s%10;
// console.log(result);

// # ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

// let sayi1 = +prompt("ilk sayıyı giriniz");
// let islem = prompt("işlemi giriniz");
// let sayi2 = +prompt("ilk sayıyı giriniz");


// if(islem == "+"){
//     let sonuc = sayi1 + sayi2;
//     console.log(sonuc);
// }
// if(islem== "*"){
//     let sonuc = sayi1 * sayi2;
//     console.log(sonuc);
// }
// if(islem== "-"){
//     let sonuc = sayi1 - sayi2;
//     console.log(sonuc);
// }
// if(islem== "/"){
//     let sonuc = sayi1 / sayi2;
//     console.log(sonuc);
// }