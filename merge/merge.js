

//    function mergeArray(arr1,arr2){
//     let arr = arr1.concat(arr2);
//         for(let i=0; i<arr.length; i++){
//             for(let j=i+1; j<arr.length; j++){
//                 var smaller= arr[i];
//                 if(arr[i]>arr[j]){
//                     let smaller = arr[j];
//                     let temp = arr[i];
//                     arr[i]=smaller;
//                     arr[j]=temp;
                
                 
                
//                 }
//             }
       
//         }
//          return arr;
//     }
  
//     console.log(mergeArray(arr1,arr2));

//     function mergeArray2(arr1,arr2){
//      let arr = arr1.concat(arr2);

//      for(let i=0; i<arr.length; i++){
//              for(let j=0; j<arr.length; j++){
                
//                  if(arr[i]>arr[j]){
//                     let bigger = arr[j];
//                      let temp = arr[i];
//                      arr[i]=bigger;
//                      arr[j]=temp;
                
                 
                
//                 }
//            }
       
//        }
//           return arr;
//    }
    
//     console.log(mergeArray2(arr1,arr2));


    // function mergeArray(arr1,arr2){
    //     let arr = arr1.concat(arr2);

    //         for(let i=0; i<arr.length; i++){
    //             for(let j=i+1; j<arr.length; j++){
    //                 if(arr[i]>arr[j]){
    //                     let smaller = arr[j];
    //                     let temp = arr[i];
    //                     arr[i]=smaller;
    //                     arr[j]=temp;
                    
                     
                    
    //                 }
    //             }
           
    //         }
    //          return arr;
    //     }
      
    //     console.log(mergeArray(arr1,arr2));

        

    let arr1 =[3,6,2,11];
    let arr2 = [12,4,1,8];
        // let abc = arr1.concat(arr2);
        // let abc = arr2.forEach(e=> arr1.push(e));
        // let abc = arr2.map(e=> arr1.push(e));
        let abc = [...arr1,...arr2];


        // const mergeArray2 = abc.sort();
        console.log(abc)


        let str1= "salih"
        let str2="furkan"
        const arrr=[...str1,...str2]

        let num = "1.2345";
        const arr5= [...num];
        console.log(arr5)

        const arr = [
            { "name": "Chicken", "price": "$10", "unit": "kilo" },
            { "name": "Beef", "price": "$20", "unit": "kilo" },
            { "name": "Sausage", "price": "$15", "unit": "kilo" },
            { "name": "Salmon", "price": "$25", "unit": "kilo" }
          ]
       // [10, 20, 15, 25]

    //    const newArr = arr.map(e=> +e.price.slice(1)).join("-")
    //    const newArr = [];
    //    arr.forEach(e=> newArr.push(+e.price.slice(1)) )
    //    const newArr2 = [...arr.forEach(e=> e.price.slice(1))];

    const newArr3 = arr.filter(e=> +e.price.slice(1)>15 )
    const newArr4 = arr.map(e=> +e.price.slice(1)).filter(e=> e>15 )

       console.log(newArr4)
 