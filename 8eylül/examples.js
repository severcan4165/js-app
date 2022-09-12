// let arrayGiven = Number(prompt("sayı dizisi giriniz lütfen"))

// let arrayGiven = [4,3,9,6,7,1];

// arrayGiven.map((p,i,arr) =>{  let division = Math.sqrt(p)%1;
//     if(division===0){
    //? Number.isInteger(division)?arr[i]=Math.sqrt(p):arr[i] = p*p;
//         arr[i]=Math.sqrt(p);
//     }
//     else{
//         arr[i] = p*p;
//     }

// return arrayGiven;
// }
// )
//  console.log(arrayGiven)

//  let arrayGiven2 = [4,3,9,6,2,12,32,7,1];

//  arrayGiven2 = arrayGiven2.filter((p) => p%2==0)
//  console.log(arrayGiven2)

//  let arrayGiven3 = [4,-3,9];
//  const sumOfPositives = (arr)=> {
// return  arr.reduce((sum,item)=> sum+(item>0 && item),0)

//  }



 // ! çözüm 2

//  const sumOfPositives2 = (arr)=> {
// let sum = (arrayGiven3.filter((a)=> a>0)).reduce((sum,temp)=> sum + temp,0) 
// return sum;
// }

// //! çözüm 3 
// let total =0;
// const sumOfPositives3 = (arr)=> { 
//     arr.filter( (a) => a>0).map(item=> total +=item)
//     return total;
// }




// console.log(sumOfPositives(arrayGiven3))

// console.log(sumOfPositives2(arrayGiven3))

// console.log(sumOfPositives3(arrayGiven3))


//! soru 4
const countBits = (num) => {

let binary = num.toString(2)
console.log(binary)
console.log(binary.split("1"))
return binary.split("1").length-1;

}
console.log(countBits(1234))

//! çözüm 2
const countBits2 = (num) => {
    let count =0;
    let binary = num.toString(2)
   
    binary.split("").map((a)=> a==1 && count++)
    return count
    
    }
    console.log(countBits2(1234))

    //! çözüm 3 *************
    const countBits3 = (num) => {

        let binary = num.toString(2)
       
       return binary.split("").filter((a)=> a==1).length
        
        
        }
        console.log(countBits3(1234))

           //! çözüm 4 *************
    const countBits4 = (num) => {

        let binary = num.toString(2)
       
       return binary.match(/1/g).length
        
        
        }
        console.log(countBits4(1234))