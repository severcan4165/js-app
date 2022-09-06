const num1 = +prompt("bir satyı girin");
const num2 = +prompt("bir satyı girin");
const ekok = (num1,num2)=>{
let ebob=1;

    let kucuk= (num1<num2)?num1:num2;
    for(let i = kucuk; i>0; i-- ){
        if(num1%i==0 && num2%i==0){
            ebob=i;
            break;
        }
    }
    let ekok = (num1*num2)/ebob;
    return ekok;

}
console.log(ekok(num1,num2));