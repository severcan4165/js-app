function tahminn(){
    let tahmin = Math.round(Math.random()*100);
    let userstahmin = Number(prompt("tahmininizi girin!"));
    let hak=7;
    while(hak){
        if(userstahmin==tahmin){
            alert ("tebrikler");
            let tekrar = prompt("tekrar oynamak istermisiniz?");
            if(tekrar == "e"){
                return tahminn();
            }
            else{
               break; 
            }
            
        }
        else if(userstahmin>tahmin){
            userstahmin = Number(prompt("Biemediniz, tahmininiz daha küçük girin!"));
            hak--;

        }
        else if(userstahmin<tahmin){
            userstahmin = Number(prompt("Biemediniz, tahmininiz daha büyük girin!"));
            hak--;

        }
    }
    alert("5 hakkınız bitti, bilemediniz");
    let tekrar = prompt("tekrar oynamak istermisiniz?");
            
            switch(tekrar){

                case "e":
                    return tahminn();
                case "h":
                    return "görüşmek üzere"

                default: 
                    return "sanırım istemiyorsunuz";
                    break;
                
            }
            
            
        }
            
          
console.log(tahminn());


//! Dersteki ÇÖzüm Aşağıdakidir.

// let hak = 5;
// const rastgele = Math.round(Math.random() * 100);
// console.log(rastgele);

// let tahmin;
// do {
// tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
// hak -= 1;
// if (tahmin === rastgele) {
// console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
// break;
// } else if (tahmin < rastgele) {
// console.log("ARTTIR ⬆️");
// } else {
// console.log("AZALT ⬇️");
// }
// } while (hak > 0);

// if (tahmin !== rastgele) {
// console.log("Uzgunuz oyunu kaybettiniz 😔😔");
// }