/*let truesE = document.querySelector('#edebiyatDogru');
let falsesE = document.querySelector('#edebiyatYanlis');

let num1 = truesE.value;
let num2 = falsesE.value;

num1 = 0, num2 = 0;

let log = document.querySelector('.s');

truesE.addEventListener('input', () => { 
    calcNet(num1, num2);
});
falsesE.addEventListener('input', () => {
    calcNet(num1, num2);
});

function calcNet(num1, num2) {
    let net = num1 - (num2 * 0.25);

    log.innerHTML += `<td>${net}</td>`;
}
*/
var TurkceDogru, TurkceYanlis, Turkcenet, turkceToplam;
var sosyalDogru, sosyalYanlis, sosyalnet, sosyalToplam;
var tmatematikDogru, tmatematikYanlis, tmatematiknet, tmatematikToplam;
var fenDogru, fenYanlis, fennet, fenToplam;

var edebiyatDogru, edebiyatYanlis, aytEdebiyatNet, edebiyatToplam;
var tarih1Dogru, tarih1Yanlis, aytTarih1Net, tarih1Toplam;
var cografya1Dogru, cografya1Yanlis, aytCografya1Net, cografya1Toplam;
var tarih2Dogru, tarih2Yanlis, aytTarih2Net, tarih2Toplam;
var cografya2Dogru, cografya2Yanlis, aytCografya2Net, cografya2Toplam;
var felsefeDogru, felsefeYanlis, aytFelsefeNet, felsefeToplam;
var dinDogru, dinYanlis, aytDinNet, dinToplam;

var matematikDogru, matematikYanlis, aytMatematikNet, matematik2Toplam;
var fizikDogru, fizikYanlis, aytFizikNet, fizikToplam;
var kimyaDogru, kimyaYanlis, aytKimyaNet, kimyaToplam;
var BiyolojiDogru, BiyolojiYanlis, aytBiyolojiNet, BiyolojiToplam;

var Diplomanotu, OBP;



elem.onclick = function() {
 /**
* @brief  Calculations and warnings in tyt subtitle
*/
    TurkceDogru = Number(document.getElementById("TurkceDogru").value); //turkce net calculated
    TurkceYanlis = Number(document.getElementById("TurkceYanlis").value);
    Turkcenet = TurkceDogru   -  TurkceYanlis   *   0.25
    document.getElementById("tytTurkceNet").innerHTML =Turkcenet;
    turkceToplam=TurkceDogru+TurkceYanlis
    if(turkceToplam>40){//turkce alert
        window.alert("Toplamda 40 soru girebilirsin.");
        document.getElementById("TurkceDogru").innerText =" ";
        document.getElementById("TurkceYanlis").innerText =" ";
    }
    
    sosyalDogru = Number(document.getElementById("sosyalDogru").value);//social net calculated
    sosyalYanlis = Number(document.getElementById("sosyalYanlis").value);
    sosyalnet = sosyalDogru   -  sosyalYanlis   *   0.25
    document.getElementById("tytSosyalNet").innerHTML =sosyalnet;
    sosyalToplam=sosyalDogru+sosyalYanlis//social alert
    if(sosyalToplam>20){
        window.alert("Toplamda 20 soru girebilirsin.");
    }

    tmatematikDogru = Number(document.getElementById("tmatematikDogru").value);//math net calculated
    tmatematikYanlis = Number(document.getElementById("tmatematikYanlis").value);
    tmatematiknet = tmatematikDogru   -  tmatematikYanlis   *   0.25
    document.getElementById("tytTmatematikNet").innerHTML =tmatematiknet;
    tmatematikToplam=tmatematikDogru+tmatematikYanlis
    if(tmatematikToplam>40){//math alert
        window.alert("Toplamda 40 soru girebilirsin.");
    }

    fenDogru = Number(document.getElementById("fenDogru").value);//science net calculated
    fenYanlis = Number(document.getElementById("fenYanlis").value);
    fennet = fenDogru   -  fenYanlis   *   0.25
    document.getElementById("tytFenNet").innerHTML =fennet;
    fenToplam=fenDogru+fenYanlis
    if(fenToplam>20){//science alert
        window.alert("Toplamda 20 soru girebilirsin.");
    }
/**
* @brief  Calculations and warnings in ayt subtitle
*/

    edebiyatDogru = Number(document.getElementById("edebiyatDogru").value);
    edebiyatYanlis = Number(document.getElementById("edebiyatYanlis").value);
    aytEdebiyatNet = edebiyatDogru   -  edebiyatYanlis   *   0.25
    document.getElementById("aytEdebiyatNet").innerHTML=aytEdebiyatNet;
    edebiyatToplam=edebiyatDogru+edebiyatYanlis
    if(edebiyatToplam>24){
        window.alert("Toplamda 24 soru girebilirsin.");
    }

    tarih1Dogru = Number(document.getElementById("tarih1Dogru").value);
    tarih1Yanlis = Number(document.getElementById("tarih1Yanlis").value);
    aytTarih1Net = tarih1Dogru   -  tarih1Yanlis   *   0.25
    document.getElementById("aytTarih1Net").innerHTML =aytTarih1Net;
    tarih1Toplam=tarih1Dogru+tarih1Yanlis
    if(tarih1Toplam>10){
        window.alert("Toplamda 10 soru girebilirsin.");
    }

    cografya1Dogru = Number(document.getElementById("cografya1Dogru").value);
    cografya1Yanlis = Number(document.getElementById("cografya1Yanlis").value);
    aytCografya1Net = cografya1Dogru   -  cografya1Yanlis   *   0.25
    document.getElementById("aytCografya1Net").innerHTML =aytCografya1Net;
    cografya1Toplam=cografya1Dogru+cografya1Yanlis
    if(cografya1Toplam>6){
        window.alert("Toplamda 6 soru girebilirsin.");
    }

    var tarih2Dogru = Number(document.getElementById("tarih2Dogru").value);
    var tarih2Yanlis = Number(document.getElementById("tarih2Yanlis").value);
    var aytTarih2Net = tarih2Dogru   -  tarih2Yanlis   *   0.25
    document.getElementById("aytTarih2Net").innerHTML =aytTarih2Net;
    var tarih2Toplam=tarih2Dogru+tarih2Yanlis
    if(tarih2Toplam>11){
        window.alert("Toplamda 11 soru girebilirsin.");
    }

    cografya2Dogru = Number(document.getElementById("cografya2Dogru").value);
    cografya2Yanlis = Number(document.getElementById("cografya2Yanlis").value);
    aytCografya2Net = cografya2Dogru   -  cografya2Yanlis   *   0.25
    document.getElementById("aytCografya2Net").innerHTML =aytCografya2Net;
    cografya2Toplam=cografya2Dogru+cografya2Yanlis
    if(cografya2Toplam>11){
        window.alert("Toplamda 11 soru girebilirsin.");
    }

    felsefeDogru = Number(document.getElementById("felsefeDogru").value);
    felsefeYanlis = Number(document.getElementById("felsefeYanlis").value);
    aytFelsefeNet = felsefeDogru   -  felsefeYanlis   *   0.25
    document.getElementById("aytFelsefeNet").innerHTML =aytFelsefeNet;
    felsefeToplam=felsefeDogru+felsefeYanlis
    if(felsefeToplam>12){
        window.alert("Toplamda 12 soru girebilirsin.");
    }

    dinDogru = Number(document.getElementById("dinDogru").value);
    dinYanlis = Number(document.getElementById("dinYanlis").value);
    aytDinNet = dinDogru   -  dinYanlis   *   0.25
    document.getElementById("aytDinNet").innerHTML =aytDinNet;
    dinToplam=dinDogru+dinYanlis
    if(dinToplam>6){
        window.alert("Toplamda 6 soru girebilirsin.");
    }
    
    matematikDogru = Number(document.getElementById("matematikDogru").value);
    matematikYanlis = Number(document.getElementById("matematikYanlis").value);
    aytMatematikNet = matematikDogru   -  matematikYanlis   *   0.25
    document.getElementById("aytMatematikNet").innerHTML =aytMatematikNet;
    matematik2Toplam=matematikDogru+matematikYanlis
    if(matematik2Toplam>40){
        window.alert("Toplamda 40 soru girebilirsin.");
    }

    fizikDogru = Number(document.getElementById("fizikDogru").value);
    fizikYanlis = Number(document.getElementById("fizikYanlis").value);
    aytFizikNet = fizikDogru   -  fizikYanlis   *   0.25
    document.getElementById("aytFizikNet").innerHTML =aytFizikNet;
    fizikToplam=fizikDogru+fizikYanlis
    if(fizikToplam>14){
        window.alert("Toplamda 14 soru girebilirsin.");
    }

    kimyaDogru = Number(document.getElementById("kimyaDogru").value);
    kimyaYanlis = Number(document.getElementById("kimyaYanlis").value);
    aytKimyaNet = kimyaDogru   -  kimyaYanlis   *   0.25
    document.getElementById("aytKimyaNet").innerHTML =aytKimyaNet;
    kimyaToplam=kimyaDogru+kimyaYanlis
    if(kimyaToplam>13){
        window.alert("Toplamda 13 soru girebilirsin.");
    }

    BiyolojiDogru = Number(document.getElementById("BiyolojiDogru").value);
    BiyolojiYanlis = Number(document.getElementById("BiyolojiYanlis").value);
    aytBiyolojiNet = BiyolojiDogru   -  BiyolojiYanlis   *   0.25
    document.getElementById("aytBiyolojiNet").innerHTML =aytBiyolojiNet;
    BiyolojiToplam=BiyolojiDogru+BiyolojiYanlis
    if(BiyolojiToplam>13){
        window.alert("Toplamda 13 soru girebilirsin.");
    }


/**
* @brief  obp alert added
*/
    Diplomanotu = Number(document.getElementById("Diplomanotu").value);
    if(Diplomanotu < 0 || Diplomanotu > 100){
        window.alert("Diploma Notu 0-100 aralığında olmalıdır");
    }
    
/**
* @brief  diploma grade calculated
*/
    OBP = 5 * Diplomanotu
    document.getElementById("OBP").value = OBP;
}
/**
* @brief  cleared all textboxes with clear button
*/
var temizle=document.getElementById("btnTemizle");
temizle.onclick=function (){
    document.getElementByType("number").innerHTML = "";
}

/**
* @brief  the results are calculated with the calculate button
*/
var hesapla=document.getElementById("btnHesapla");
hesapla.onclick=function (){
/**
* @brief  raw score and placement score calculated
*/ 
    var tytHam= Turkcenet + sosyalnet + tmatematiknet + fennet;
    tytHam=tytHam*5

    if(document.getElementById("checkbox").checked == true){  //If the checkbox is checked, the score calculation is done as in this section.
        var tytYerlestirme=Diplomanotu*0.3+tytHam;
    }
    else{//Default score calculation
        var tytYerlestirme=Diplomanotu*0.6+tytHam 
    }
 
    var sayHam= aytMatematikNet + aytFizikNet + aytKimyaNet + aytBiyolojiNet; //say ham
    sayHam=sayHam*6.25;
    sayHam=0.6*sayHam+0.4*tytHam;

    if(document.getElementById("checkbox").checked == true){  //If the checkbox is checked, the score calculation is done as in this section.
        var sayYerlestirme=Diplomanotu*0.3+sayHam;
    }
    else{//Default score calculation
        var sayYerlestirme=Diplomanotu*0.6+sayHam 
    }

    var sözHam= aytEdebiyatNet + aytTarih1Net + aytCografya1Net + aytTarih2Net+aytCografya2Net+aytFelsefeNet+aytDinNet;
    sözHam=sözHam*6.25;
    sözHam=0.6*sözHam+0.4*tytHam;

    if(document.getElementById("checkbox").checked == true){  //If the checkbox is checked, the score calculation is done as in this section.
        var sözYerlestirme=Diplomanotu*0.3+sözHam;
    }
    else{//Default score calculation
        var sözYerlestirme=Diplomanotu*0.6+sözHam ;
    }

    var eaHam=(sözHam+12.5*aytMatematikNet)*0.5
    
    if(document.getElementById("checkbox").checked == true){  //If the checkbox is checked, the score calculation is done as in this section.
        var eaYerlestirme=Diplomanotu*0.3+eaHam;
    }
    else{//Default score calculation
        var eaYerlestirme=Diplomanotu*0.6+eaHam 
    }

    document.getElementById("tytHam").innerHTML = tytHam;
    document.getElementById("tytYerlestirme").innerHTML = tytYerlestirme;
    document.getElementById("sayHam").innerHTML = sayHam;
    document.getElementById("sayYerlestirme").innerHTML = sayYerlestirme;
    document.getElementById("eaHam").innerHTML = eaHam;
    document.getElementById("eaYerlestirme").innerHTML = eaYerlestirme;
    document.getElementById("sözHam").innerHTML = sözHam;
    document.getElementById("sözYerlestirme").innerHTML = sözYerlestirme;
}
