//ODEV1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

let toplam = 0;
let sayac = 0;
let entry;
let q = true;

while(q){
     entry = prompt("notlarınızı giriniz");
   
     if(entry=="q" || entry=="Q"){
      q=false;
      break;
        
     }
     else{
        toplam = toplam + Number(entry);
        sayac= sayac +1;

     }
}
let ort = toplam/sayac;
console.log(ort);


//  let ort = toplam/sayac;
//  console.log(ort);

// let sayac=0;
// let total=0;
// let not1;
// let not;
// do{
//     not=prompt("not giriniz");
//     if(not==="q"|| not==="Q"){
//         break;
//     }
//     not1=Number(not);
//     sayac++;
//     total=total+not1;
// }while (true);
// let ortalama=total/sayac;
// console.log(`Sınıfın ortalaması: ${ortalama}`)

// let number = 0;
// let sum = 0;
// let counter = 0;
// let avg = 0;
// while (true) {
//   number = prompt(
//     "lütfen not giriniz veya çıkmak için -q- ya basınız"
//   ).toLowerCase();
//   if (number == "q") {
//     break;
//   } else {
//     number = parseInt(number);
//   }
//   sum += number;
//   counter++;
//   console.log("girilen not sayısı:", counter);
//   console.log("ortalama not eşittir:", sum / counter);
// }

// let not;
// let notToplam = 0;
// let sayac = 0;
// let devam = true;
// let average = 0;
// do {
//   not = prompt("Lutfen 0-100 bir not giriniz. Cikmak icin q ya basınız.");
//   if (not === "Q" || not === "q") {
//     average = notToplam / sayac;
//     devam = false;
//     break;
//   } else if (not >= 0 && not <= 100) {
//     notToplam = notToplam + Number(not);
//     sayac++;
//     console.log(notToplam);
//   } else {
//     console.log("Gecerli bir not giriniz");
//   }
// } while (devam);

// console.log(`Sınıfın Ortalamasi: ${average}`);

// let numbers = 0;
// let count = 0;
// let sumNumbers = 0;

// do {
//   numbers = prompt("1-100 arasında bir sayı giriniz ");

//   if (numbers == "q" || numbers == "Q") {
//     console.log(
//       `Çıkış yapıldı, ${count} geçerli sayı girildi, ortalaması ${(
//         sumNumbers / count
//       ).toFixed(2)}`
//     );
//     break;
//   } else if (numbers <= 0 || numbers > 100) {
//     alert("Girdiğiniz sayı belirtilen (1-100) aralık dışındadır");
//   } else {
//     sumNumbers += +numbers;
//     ++count;
//   }
// } while (true);