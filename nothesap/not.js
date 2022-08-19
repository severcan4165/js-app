function finalGrade(){
    let first = +prompt("notunuzu girin");
    let second = +prompt("notunuzu girin");
    let third = +prompt("notunuzu girin");
    let ort = ((first + second+ third)/3).toFixed(2);


    if( !((ort<0) || (ort>100))){

        if( ort<60 ){
            return alert("harf notunuz 'F' !");
        }
        else if(ort<70){
            return alert("harf notunuz 'D' !");
        }
        else if(ort<80){
            return alert("harf notunuz 'C' !");
        }
        else if(ort<90){
            return alert("harf notunuz 'B' !");
        }
        else if(ort<101){
            return alert("harf notunuz 'A' !");
        }

    }
    
    else{
        return alert("invalid grade")
       
    }
};
console.log(finalGrade());