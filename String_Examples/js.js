//?   ###### 1. Write a JavaScript function to check whether an `input` is a string or not.
//? Test Data :
//? console.log(is_string('w3resource'));
//? true
//? console.log(is_string([1, 2, 4, 0]));
//? false   #############

// const is_String = (data)=>{
//     if(typeof(data)=="string"){
//         return true;
//     }
//     else{
//         return false;

//     }
// }
// console.log(is_String('w3resource'));
// console.log(is_String([1, 2, 4, 0]));

//! 1. Reverse that string, Simply reverse the string without using "reverse()""

// const reverseIt = (str) => {
//     let reverstr ="";

//     for( let i = 1; i<=str.length; i++){
        
//         reverstr+= str.charAt(str.length-i);
//     }return reverstr;
   
// }
// console.log(reverseIt("Lorem ipsum dolor sit amet consectetur.")); 



//! 2. Is it a palindrome?  Does the given string spell out the same word when written out backwards? For example kayak.

// const reverseIt = (str) => {
//     let reverstr ="";

//     for( let i = 1; i<=str.length; i++){
        
//         reverstr+= str.charAt(str.length-i);
//     }return reverstr;
   
// }    

// const isPalindrome = (str) => {
//     if(reverseIt(str) === str){
//         return true;
//     }
//     else{
//         return false;
//     }

// }

// console.log(isPalindrome("racecar")) // true
// console.log(isPalindrome("apple")) // false
// console.log(isPalindrome("akamaka")) // true
// console.log(isPalindrome("saakam  makaas")) // true

//! 3. Remove specific characters from a string What’s the most efficient way to strip specific characters from a string? Without using replace(). Your function must strip multiple different characters from the provided string.

//! özellikle Slice fonksiyonunu kullanarak yaptım
const removeCharacters = (someString, charactersToRemove) => {
    let arrnew = ""; // slice ile bölünen kısımlar concate ile bu stringde toplanacak
    let indx = []; // değiştirilecek karakterlerin stringde bulunduğu pozisyonlarda burda tutuluyor
    for(let i = 0; i<charactersToRemove.length; i++){      //charactersToRemove kaç sayılık bir dizi ise her bir 
        let b = someString.indexOf(charactersToRemove[i]); //karakter için for döngüsü hazırlandı, bu for döngüsünde 
        do {                                               //her bir karakterin indexOf ile pozisyonu bulundu
        if (b>=0){
            indx.push(b);                                   // karakterlerin pozisyonlarını b değişkenine atadık ve 1 
            b++;                                            //  arttırarak string içinde kaldığı yerden ileri doğru 
            b = someString.indexOf(charactersToRemove[i],b); // arama işlemine devam edildi.
        }
        else {
            break;  // indexOf -1 döndüğünde yok demektir aranılan karakter burda kesiyon
        }
    }while(b>0); // do whiledan çıkış için b= -1 dönmesini bekliyoruz.

    arrnew =someString.slice(0,indx[0]); // slice kullandığım için her döngüde 0 indisle başlamak gerektiği için
    if(indx.length==1){                     // döngü içine almadan döngü dışında yazdım, hardcode oldu biraz
     arrnew +=someString.slice(indx[0]+1);  // aranılan karakter sadece 1 tane varsa buraya girsin dedim, 2 den az 
    }                                        // olunca bir dögü şablonu oluşturmak zor oluyor
    else{
    for(let a=1; a-1<indx.length; a++){     // aranılan karakter sayısı 1 den fazla olunca bu döngüye girecek
        if(a!=indx.length){                 // indis, dizinin uzunluğuna eşit olunca undefined döndüğü için bundan
        arrnew +=someString.slice(indx[a-1]+1,indx[a]); // sakınmak için ekledim
        }
        else{
            arrnew +=someString.slice(indx[a-1]+1); // indx[a] undefined olduğu için son döngüde buraya girerek undefined dan kaçındım. //toDo -- Fakat son kontrol daha eklemem gerekiyor. Çünkü dizinin son karakteri çıkacak olursa diziden büyük bir indisten slice işlemi yapıyor, --- //toDo

        }
    }

}
    someString=arrnew; //şu ana kadar sadece değiştirilecek karakterin ilkiyle ilgili işlem yapıldı, bu satırdaki atama
    indx=[];            // ile yukardaki tüm işlemleri sanki bir yeni diziye baştan yapıyormuş gibi olacagız
    }return arrnew;
}
console.log(removeCharacters("iyxoiu airxe viexriy gxoxiod xpeirsoxnxi", ["x", "i"]));
// I m n emple string

