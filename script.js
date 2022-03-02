function init() {
    document.getElementById("elem").innerHTML = "Hahó";
}
function uzenet() {
    alert("szia mia");
}
window.addEventListener("load", init, false);

var szoveg = "alma";

var szoveg2;
szoveg2 = "körte";
console.log(szoveg2);

console.log(szoveg3);
var szoveg3 = "szilva";
var a = "2";
var b = 3;
var osszeg = b + Number(a);
console.log(osszeg);

var logikai = false;
if (a === 2) {
    console.log("az a szám ");
    console.log(typeof a);
} else {
    console.log("az a nem szám");
    console.log(typeof a);
}

var szin = "purple";
switch (szin) {
    case "red":
        console.log("piros");
        break;
    case "green":
        console.log("zöld");
        break;
    case "purple":
        console.log("lila");
        break;
    default:
        console.log("nem ismerem ezt a színt");
}
if (szin == "red") {
    console.log("piros");
} else if (szin == "green") {
    console.log("zöld");
} else if (szin == "purple") {
    console.log("lila");
} else {
    console.log("nem ismerem ezt a színt");
}
