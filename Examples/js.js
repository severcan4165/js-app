function sumTwoSmallestNumbers(numbers) {  
    let smallest = numbers[0];
    
    for(let i = 0; i<numbers.length; i++){
      if(smallest>numbers[i]){
       
        smallest=numbers[i];
      }
      
    }
    let a = numbers.indexOf(smallest);
    numbers.splice(a,1);
    let smaller= numbers[0];
      for(let i = 0; i<numbers.length; i++){
      if(smaller>numbers[i]){
        smaller=numbers[i];
      }
      
    }
    return smaller +smallest;
  }
  let abc = [5,3,1,8,9,2,11]
  console.log(sumTwoSmallestNumbers(abc))