//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

//*? 
//*? 
//*? ------------1. Çözüm --------------------
//*? 
//*? 

const tarkan = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla ab assumenda totam, saepe excepturi? Eius officiis corrupti odio excepturi tenetur suscipit beatae nisi optio iure hic ea tempore, debitis maiores ipsam laboriosam in impedit! Non, alias asperiores fugit provident quidem molestias a excepturi vero soluta cumque";

const kelimeBul = (str) => {
    let kelime = 1;
    let indx = str.indexOf(" ");
    while(indx>0){
        kelime++;
        indx = str.indexOf(" ", indx+1)


    }
    return  kelime;

}
console.log(kelimeBul(tarkan));
    
//*? 
//*? 
//*? ------------2. Çözüm --------------------
//*? 
//*? 


const tarkan2 = "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla ab assumenda totam, saepe excepturi? Eius officiis corrupti odio excepturi tenetur suscipit beatae nisi optio iure hic ea tempore, debitis maiores ipsam laboriosam in impedit! Non, alias asperiores fugit provident quidem molestias a excepturi vero soluta cumque perferendis labore distinctio!         ";

const kelimeBul2 = (str) => {
    
    let arry = (str.trim()).split(" ");
    return  arry.length;

}
console.log(kelimeBul2(tarkan2));

