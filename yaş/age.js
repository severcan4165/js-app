function howOld(){
    let age = +prompt("yaişınızı girin")
    let year = +prompt("yılı girin")
    let thisyear = (new Date()).getFullYear();

    if(year >= thisyear){
        return alert("You will be " + (age + year - thisyear) + " in the year"  + year);
    }
    else if((thisyear>year) && (age>(thisyear-year))){
        return alert("You were " + (age- (thisyear -year)) + " in the year " + year);

    }
    else{
        return alert("The year " + year + " was " + ((thisyear-age) -year33) + " years before you were born");

    }

}
console.log(howOld());