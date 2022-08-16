function harfHesabi() {

    let notunuz = parseFloat(document.getElementById("input").value);

if (notunuz>80) {

    document.getElementById("not").innerHTML = "A";

}

else if(notunuz>70) {

    document.getElementById("not").innerHTML = "B";

}
else if(notunuz>60) {

    document.getElementById("not").innerHTML = "C";

}
else if(notunuz>40) {

    document.getElementById("not").innerHTML = "D";

}
else {
    document.getElementById("not").innerHTML = "F Kaldınız..";
}






















}