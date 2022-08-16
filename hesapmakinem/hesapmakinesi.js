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