// let arr = [1,2,7,6,4,8,3];
let arr = [1,3,-1,-3,5,3,6,7];


let k = +prompt("please enter a number");
/* count specify how many element will be pushed to the "maximum" named array.
 for example if k==3 => "maximum" named array  will always have 3 elements,
and sort process will be done according to this arrays elements. */
let count = k;
/* temp is for index, in order to add elements in turn */
let temp= 0;
/*temp2 is for shifting index, because in every turn new index must start from next index, so after every turn i increased the temp2 */
let temp2= 0;

/* zz is a empty array for stacking subarrays */
let zz = [];
/* arrNew is a empty array for stacking elements of subarrays */
let arrNew = [];

/* maxim is a empty array for stacking max value  of subarrays' elements */
let maxim = [];

const maximum = (k) =>{
    while(temp2 <= (arr.length-k)){ // since the nested while continue length of count(which is equal to k), this while
        count=k;                    // loop can only contine difference of  arr.length  and k
        while(count>0){
            arrNew.push(arr[temp]);
            temp++;
            count--;       
        }
    //  console.log(arrNew);
      zz.push(arrNew); // in every turn subarrays are added to zz array
      arrNew=[];     // updated the value of arrNew
        temp2++;  // these two line are for controlling the index
        temp = temp2;
    } 
    return maxim;
}

if(k<1 || k> arr.length){
    while( k < 1 ||  k> arr.length ){
        alert("please enter valid number");
        k = +prompt("please enter a number");
    }
    maximum(k); 
}
else{
    maximum(k);
}


for(x of zz){
    x = x.sort((a,b)=>b-a);
    maxim.push(x[0])
}
console.log(maximum(k));

//! all possible quantity of elements
// let arr = [1,2,7,6,4,8,3];
// let arr = [1,3,-1,-3,5,3,6,7];
// let arrNew = [];
// let count = 0;
// let k =2;
// let temp= 0;
// let temp2= 0;
// let aaa = {};
// let zz = [];

// while(k < arr.length){
//     count=k;
//     while(temp2 <= (arr.length-k)){
//         count=k;
//         while(count>0){
//             arrNew.push(arr[temp]);
//             temp++;
//             count--;       
//         }
//      console.log(arrNew);
//       zz.push(arrNew);
//       arrNew=[];     
//         temp2++;
//         temp = temp2;
//     }     
//     temp = 0;
//     temp2 =0;
//      k++;    
// }   
// console.log(zz)

// let maxim = [];
// for(x of zz){
//     x = x.sort((a,b)=>b-a);
//     maxim.push(x[0])
// }
// console.log(maxim)

