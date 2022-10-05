//! KISA YOL

const rome2 = {M:1000,  CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
let result2 ="";

const romanize = (input2)=>{
    
    let i = 3;
    while(i--){
        for(x of Object.keys(rome2)){
            let a = Math.trunc(input2/rome2[x]);
            result2 += x.repeat(a);
            input2 -= a * rome2[x];
        }
    }
    return result2;
}



// console.log(romanize(80));
// console.log(romanize(100));
// console.log(romanize(176));
// console.log(romanize(999));
// console.log(romanize(598));
// console.log(romanize(300));
console.log(romanize(1598));



//! ÇOOK UZUN  YOL
const rome = ["I","V","X","L","C","D","M"];
const numbers = ["1","5","10","50","100","500","1000"];
let result =[];


let input = 80;
const generatorRome = (input) => {

    if(input>1000){
        let a = Math.trunc(input/1000);
            for(let i = 1; i <= a; i++){
                result.push("M")
            }
        input = input % 1000;
        return generatorRome(input);
        }
    else if(input>= 900){
        result.push("CM")
        input = input % 900;
        return generatorRome(input);
    }
    else if(input >= 500){
        result.push("D")
        input = input % 500;
        return generatorRome(input);
    }
    else if(input >= 400){
        result.push("CD")
        input = input % 400;
        return generatorRome(input);
    }
    else if(input >= 100){
        let b = Math.trunc(input/100);
            for(let i = 1; i <= b; i++){
                result.push("C")
            }
        input = input % 100;
        return generatorRome(input);
    }
    else if(input >= 90){
        result.push("XC");
        input = input % 90;
        return generatorRome(input);
    }
    else if(input >= 50){
        result.push("L");
        input = input % 50;
        return generatorRome(input);
    }
    else if(input >= 40){
        result.push("XL");
        input = input % 40;
        return generatorRome(input);
    }
    else if(input >= 10){
        let c = Math.trunc(input/10);
        for(let i = 1; i <= c; i++){
            result.push("X")
        }
    input = input % 10;
    return generatorRome(input);
    }
    else if(input == 9){
        result.push("IX");
        input = input % 9;
        return generatorRome(input);
    }
    else if(input >= 5){
        result.push("V")
        let d = Math.trunc(input % 5);
        for(let i = 1; i <= d; i++){
            result.push("I")
        }
        input = 0;
    return generatorRome(input);
    }
    else if(input == 4){
        result.push("IV");
        input = 0;
        return generatorRome(input);
    }
    else if(input > 0){
        for(let i = 1; i <= input; i++){
            result.push("I")
        }
        input = 0;
        return generatorRome(input);
    }
    else if(input == 0){
        // console.log(`girmiş olduğunuz sayının roma rakamlarıyla sonucu ${result.join("")}`);
        return result.join("");
    }
    else{
        console.log("girilen sayı geçersizdir")
    }

}

// console.log(generatorRome(input));
// console.log(generatorRome(80));
// console.log(generatorRome(100));
// console.log(generatorRome(176));
// console.log(generatorRome(999));
// console.log(generatorRome(598));
// console.log(generatorRome(300));
console.log(generatorRome(1598));



