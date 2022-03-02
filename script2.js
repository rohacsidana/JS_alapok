/**    TÖMBÖK   (lista)  */

var tomb = [];
var tomb2 = [1, 2, 3, 4, 5, 6];
var tomb3 = [4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0] = 12;
var txt = "";
for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ", ";
}
console.log(txt);

var gyumolcs = ["alma", "málna", "barack", "ribizli", "paradicsom"];
var gyumolcsSzin = ["piros", "piros", "sárga", "piros", "piros"];
var gyumolcsAr = [240, 500, 300, 250, 500];
/** van-e sárga színű gyümölcs*/
var i = 0;
while (i < gyumolcs.length && !(gyumolcsSzin[i] === "sárga")) {
    i++;
}
var eldontes = i < gyumolcs.length;
console.log("van sárga színű gyümölcs?" + eldontes ? "van" : "nincs");

console.log("1.");
var osszeg = 0;
for (let i = 0; i < gyumolcsSzin.length; i++) {
    if (gyumolcsSzin[i] === "piros") {
        osszeg += gyumolcsAr[i];
    }
}
console.log("a piri gyümik összértéke: ", osszeg);

console.log("2.");
var haromSzAlatt = 0;
for (let i = 0; i < gyumolcsAr.length; i++) {
    if (gyumolcsAr[i] < 300) {
        haromSzAlatt++;
    }
}
console.log("300 ft alatti termékek száma: ", haromSzAlatt);

console.log("3.");
i = 0;
while (i < gyumolcsAr.length && !(gyumolcsAr[i] > 1000)) {
    i++;
}
var ezernelNagyobb = i < gyumolcsAr.length;
console.log("van 1000 ft nál drágább gyümi?", ezernelNagyobb ? "van" : "nincs");
