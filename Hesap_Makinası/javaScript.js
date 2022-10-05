// function topla() {

//   let  sayi1 = document.getElementById("input1").value;
//   let  sayi2 = document.getElementById("input2").value;

//     let sayi3 = parseFloat(sayi1) + parseFloat(sayi2);

//     document.getElementById("sonuc").innerHTML =

//     sayi3.toFixed(3);
// }


// function cikar() {

//   let  sayi1 = document.getElementById("input1").value;
//   let  sayi2 = document.getElementById("input2").value;

//     let sayi3 = parseFloat(sayi1) - parseFloat(sayi2);

//     document.getElementById("sonuc").innerHTML =

//     sayi3.toFixed(3);
// }


// function carp() {

//   let  sayi1 = document.getElementById("input1").value;
//   let  sayi2 = document.getElementById("input2").value;

//     let sayi3 = parseFloat(sayi1) * parseFloat(sayi2);

//     document.getElementById("sonuc").innerHTML =

//     sayi3.toFixed(3);
// }


// function bol() {

//   let  sayi1 = document.getElementById("input1").value;
//   let  sayi2 = document.getElementById("input2").value;

//     let sayi3 = parseFloat(sayi1) / parseFloat(sayi2);

//     document.getElementById("sonuc").innerHTML =

//     sayi3.toFixed(3);
// }

dizi = ["5", "6", "7"];

function topla() {

  sonuc = dizi.reduce((sum, current)=> (sum +=Number(current)),0)

    return sonuc.toFixed(3);
}
console.log(topla(dizi))