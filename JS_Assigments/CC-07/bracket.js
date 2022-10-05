/* dizinin her elemanına bak, opening bracketten eleman içeriyor mu, içeriyorsa sonraki elemanlarına bak 

başka opening bracket içeriyor mu içerdiği sürece tekrar et 

> - "`{ [ ] ( ) }`" should return true
> - "`{ [ ( ] ) }`" should return false
> - "`{ [ }`" should return false
*/

const openingBrackets = ["(", "{", "["];
const closingBrackets = {'(':")", '{':"}", '[':"]"};


let tempBracket = [];
let flag= true;
// let temCloseBrack = [];

const validateBrackets = (str)=> {
  let tempArr =  str.split("");
  for(let i = 0; i<tempArr.length; i++){
 

       if(tempArr[i] == "(" || tempArr[i] == "{" || tempArr[i] == "["){
        tempBracket.push(tempArr[i]);
       }
       else if(tempArr[i] == ")" || tempArr[i] == "}" || tempArr[i] == "]"){
        if(tempBracket.length == 0){
            return flag=false;
        }
        let a = tempBracket.pop();
       
        if(closingBrackets[a] == tempArr[i]){
            flag = true;
        }else{
          return  flag = false;  
        }
        }

  }
  if(!tempBracket.length){
    flag = true;
  }
  else{
    return flag = false;
  }
  
  return flag;
}

 console.log(validateBrackets(`[()]{}{[()()]()}`));
 console.log(validateBrackets(`{ [ ] ( ) }`));
 console.log(validateBrackets(`{ [ ( ] ) }`));


