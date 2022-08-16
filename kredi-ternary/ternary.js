let gelir = +prompt("gelirinizi girin");
let gider = +prompt("giderinizi girin");

let risk = gider-gelir>5500 ? "olmaz": "olur";
alert("sizin kredi işiniz " + risk);