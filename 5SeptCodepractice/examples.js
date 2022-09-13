//! counting digits
// let givenNum = 9;
// const oneStep = (num)=>{
//   let temp;
//   let result =1;
//   let flag=true;
//   let count = 0;
//     do{
//     if(num>10){
//         temp = [...(num.toString().split(""))];
//         for(let i=0; i<temp.length; i++){
//             result *=+temp[i];
            
//         }
//         if(+result>10){
//         flag=true;
//         num=Number(result);
//         result=1;
//         count++;
      
//         }else{
//         flag=false;
   
        
//         }
//         }
//         else{
//         return 0;
//         }
          
        
//     }while(flag)
//     return count;
// }
//  console.log(oneStep(givenNum));




// let given = 4;
// let result;

// const Step1 = (num) => {
//  num = (num.toString().split("")).reduce((a,current)=>a*(Number(current)),1 )
//  result =num;

//  num >10 ? Step1(num):result;
//  return result;
// // if(num>10){
// //     return Step1(num)
// // }
// // else{
// //     return num;
// // }
// }


// console.log(Step1(given));


//! Frequency Count 

let arr1 = [1,2,3,2,2,1,1,1,1,1,1,"a","a","b","a",2,1,"b"];
let dizi1 ={};
    const frequent1 = function(arr){
        for(let i = 0; i<arr.length; i++){
            if(!dizi1.hasOwnProperty(arr1[i])){

                dizi1[arr1[i]]=1;
            }
            else{
                dizi1[arr1[i]]++;
            }
        }
        return dizi1;
        }

console.log(frequent1(arr1));

