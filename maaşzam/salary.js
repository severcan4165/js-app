const salary = +prompt("Maaşınız Girin!");

if(salary<5500){
    const zamlimaas = salary + salary*50/100;
    alert("Zamli maaşınız" + zamlimaas + " tldir")
}
else{
    const zamlimaas = salary + salary/10;
    alert("Zamli maaşınız" + zamlimaas + " tldir")

}