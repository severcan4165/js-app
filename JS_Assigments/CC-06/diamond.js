

// let number = 12; 

/*  girilen sayının yarısını al floora çek

girilen sayı kadar döngü oluştur
firstSpace' in 1 eksiği kadar boşluk bırak
j' yi 1 den başlat
    firstspace i azalt
    j firstSpace + 1 e eşit olunca veya  number dan firstpace i cıkarınca * yazdır

firstSpace in 1 eksiği kadar üst döngü (satır adedi yani)




*/
/* 
22222*22222
2222*2*2222         
222*222*222
22*22222*22
2*2222222*2
*222222222*

2*2222222*2
22*22222*22
222*222*222
2222*2*2222
22222*22222

*/
// const submitButton = document.querySelector("#submit");
// console.log(submitButton)

const textarea = document.querySelector("#textarea");
const input = document.querySelector("#input-area");


// input.addEventListener("click", (e)=>{
//     console.log(e.target)
 

// })

input.addEventListener("input", () => {

let space;
    textarea.value = "";   
    const number =Number(input.value);
    let firstSpace = Math.floor(number/2);
    // let flag = false;
    // number%2 == 0 &&(flag = true);
      
  

     //! below code block only consist the first " * " in the diamond
    for(let i = firstSpace; i>0; i--){
        textarea.value += " "
    } 
    textarea.value += "* ";
    for(let i = firstSpace; i>0; i--){
        textarea.value += " "
    }
    textarea.value += "\n"


    //! below code block is for upperside of diamond
    for(let i = firstSpace; i>0; i--){
       
        firstSpace--;
        for(let j = 1; j < number+1; j++){
            if(j == (firstSpace + 1) || j == (number - firstSpace)){
           
                    textarea.value += "* ";

                
              

            }
            else{
                textarea.value += " "
            }
          
                

        }
        textarea.value +=  "\n"

    }
    firstSpace = Math.floor(number/2);


    //! below code block is for downside of diamond
    space = 0;
    for(let i = 1; i < firstSpace; i++){
        space++;
        
        for(let j = number; j > 0; j--){
            if(j == (number - space) || j == (space + 1)){
            
                
                    textarea.value += "* ";

                
                
            }
            else{         
                textarea.value += " "
             }
        }
        textarea.value +=  "\n"

    }



    // //! below code block only consist the last " * " in the diamond

    for(let i = firstSpace; i>0; i--){
        textarea.value += " "
    } 
    textarea.value += "* ";
    for(let i = firstSpace; i>0; i--){
        textarea.value += " "
    }
    textarea.value += "\n"

  
    flag =false;
    
});
