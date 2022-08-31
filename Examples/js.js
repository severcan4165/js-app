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
        console.log(smaller)
        smaller=numbers[i];
      }
      
    }
    return smaller +smallest;
  }