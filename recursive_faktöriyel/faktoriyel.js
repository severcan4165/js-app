const n =Number(prompt("sayı girin"));
const func = (x) =>{
  if(x<1){

  }
  else if(x==1){
    return 1;
  }
  else{
    return x*func(x-1);
  }

}

console.log(func(n));
