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

elem.onclick = function() {
 /**
* @brief  Calculations and warnings in tyt subtitle
*/
    var TurkceDogru = Number(document.getElementById("TurkceDogru").value); //turkce net calculated
    var TurkceYanlis = Number(document.getElementById("TurkceYanlis").value);
    var Turkcenet = TurkceDogru   -  TurkceYanlis   *   0.25
    document.getElementById("tytTurkceNet").innerHTML =Turkcenet;
    var turkceToplam=TurkceDogru+TurkceYanlis
    if(turkceToplam>40){//turkce alert
        window.alert("Toplamda 40 soru girebilirsin.");
        document.getElementById("TurkceDogru").innerText =" ";
        document.getElementById("TurkceYanlis").innerText =" ";
    }
    
    var sosyalDogru = Number(document.getElementById("sosyalDogru").value);//social net calculated
    var sosyalYanlis = Number(document.getElementById("sosyalYanlis").value);
    var sosyalnet = sosyalDogru   -  sosyalYanlis   *   0.25
    document.getElementById("tytSosyalNet").innerHTML =sosyalnet;
    var sosyalToplam=sosyalDogru+sosyalYanlis//social alert
    if(sosyalToplam>20){
        window.alert("Toplamda 20 soru girebilirsin.");
    }

    var tmatematikDogru = Number(document.getElementById("tmatematikDogru").value);//math net calculated
    var tmatematikYanlis = Number(document.getElementById("tmatematikYanlis").value);
    var tmatematiknet = tmatematikDogru   -  tmatematikYanlis   *   0.25
    document.getElementById("tytTmatematikNet").innerHTML =tmatematiknet;
    var tmatematikToplam=tmatematikDogru+tmatematikYanlis
    if(tmatematikToplam>40){//math alert
        window.alert("Toplamda 40 soru girebilirsin.");
    }

    var fenDogru = Number(document.getElementById("fenDogru").value);//science net calculated
    var fenYanlis = Number(document.getElementById("fenYanlis").value);
    var fennet = fenDogru   -  fenYanlis   *   0.25
    document.getElementById("tytFenNet").innerHTML =fennet;
    var fenToplam=fenDogru+fenYanlis
    if(fenToplam>20){//science alert
        window.alert("Toplamda 20 soru girebilirsin.");
    }
/**
* @brief  Calculations and warnings in ayt subtitle
*/
    var edebiyatDogru = Number(document.getElementById("edebiyatDogru").value);
    var edebiyatYanlis = Number(document.getElementById("edebiyatYanlis").value);
    var aytEdebiyatNet = edebiyatDogru   -  edebiyatYanlis   *   0.25
    document.getElementById("aytEdebiyatNet").innerHTML=aytEdebiyatNet;
    var edebiyatToplam=edebiyatDogru+edebiyatYanlis
    if(edebiyatToplam>24){
        window.alert("Toplamda 24 soru girebilirsin.");
    }

    var tarih1Dogru = Number(document.getElementById("tarih1Dogru").value);
    var tarih1Yanlis = Number(document.getElementById("tarih1Yanlis").value);
    var aytTarih1Net = tarih1Dogru   -  tarih1Yanlis   *   0.25
    document.getElementById("aytTarih1Net").innerHTML =aytTarih1Net;
    var tarih1Toplam=tarih1Dogru+tarih1Yanlis
    if(tarih1Toplam>10){
        window.alert("Toplamda 10 soru girebilirsin.");
    }

    var cografya1Dogru = Number(document.getElementById("cografya1Dogru").value);
    var cografya1Yanlis = Number(document.getElementById("cografya1Yanlis").value);
    var aytCografya1Net = cografya1Dogru   -  cografya1Yanlis   *   0.25
    document.getElementById("aytCografya1Net").innerHTML =aytCografya1Net;
    var cografya1Toplam=cografya1Dogru+cografya1Yanlis
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

    var cografya2Dogru = Number(document.getElementById("cografya2Dogru").value);
    var cografya2Yanlis = Number(document.getElementById("cografya2Yanlis").value);
    var aytCografya2Net = cografya2Dogru   -  cografya2Yanlis   *   0.25
    document.getElementById("aytCografya2Net").innerHTML =aytCografya2Net;
    var cografya2Toplam=cografya2Dogru+cografya2Yanlis
    if(cografya2Toplam>11){
        window.alert("Toplamda 11 soru girebilirsin.");
    }

    var felsefeDogru = Number(document.getElementById("felsefeDogru").value);
    var felsefeYanlis = Number(document.getElementById("felsefeYanlis").value);
    var aytFelsefeNet = felsefeDogru   -  felsefeYanlis   *   0.25
    document.getElementById("aytFelsefeNet").innerHTML =aytFelsefeNet;
    var felsefeToplam=felsefeDogru+felsefeYanlis
    if(felsefeToplam>12){
        window.alert("Toplamda 12 soru girebilirsin.");
    }

    var dinDogru = Number(document.getElementById("dinDogru").value);
    var dinYanlis = Number(document.getElementById("dinYanlis").value);
    var aytDinNet = dinDogru   -  dinYanlis   *   0.25
    document.getElementById("aytDinNet").innerHTML =aytDinNet;
    var dinToplam=dinDogru+dinYanlis
    if(dinToplam>6){
        window.alert("Toplamda 6 soru girebilirsin.");
    }

    var matematikDogru = Number(document.getElementById("matematikDogru").value);
    var matematikYanlis = Number(document.getElementById("matematikYanlis").value);
    var aytMatematikNet = matematikDogru   -  matematikYanlis   *   0.25
    document.getElementById("aytMatematikNet").innerHTML =aytMatematikNet;
    var matematik2Toplam=matematikDogru+matematikYanlis
    if(matematik2Toplam>40){
        window.alert("Toplamda 40 soru girebilirsin.");
    }

    var fizikDogru = Number(document.getElementById("fizikDogru").value);
    var fizikYanlis = Number(document.getElementById("fizikYanlis").value);
    var aytFizikNet = fizikDogru   -  fizikYanlis   *   0.25
    document.getElementById("aytFizikNet").innerHTML =aytFizikNet;
    var fizikToplam=fizikDogru+fizikYanlis
    if(fizikToplam>14){
        window.alert("Toplamda 14 soru girebilirsin.");
    }

    var kimyaDogru = Number(document.getElementById("kimyaDogru").value);
    var kimyaYanlis = Number(document.getElementById("kimyaYanlis").value);
    var aytKimyaNet = kimyaDogru   -  kimyaYanlis   *   0.25
    document.getElementById("aytKimyaNet").innerHTML =aytKimyaNet;
    var kimyaToplam=kimyaDogru+kimyaYanlis
    if(kimyaToplam>13){
        window.alert("Toplamda 13 soru girebilirsin.");
    }

    var BiyolojiDogru = Number(document.getElementById("BiyolojiDogru").value);
    var BiyolojiYanlis = Number(document.getElementById("BiyolojiYanlis").value);
    var aytBiyolojiNet = BiyolojiDogru   -  BiyolojiYanlis   *   0.25
    document.getElementById("aytBiyolojiNet").innerHTML =aytBiyolojiNet;
    var BiyolojiToplam=BiyolojiDogru+BiyolojiYanlis
    if(BiyolojiToplam>13){
        window.alert("Toplamda 13 soru girebilirsin.");
    }


/**
* @brief  obp alert added
*/
    var OBP = Number(document.getElementById("OBP").value);
    var OBP;
    if(OBP<0 ||OBP>100){
        window.alert("OBP Puanı 0-100 aralığında olmalıdır");
    }
    
/**
* @brief  diploma grade calculated
*/
    var OBP = Number(document.getElementById("OBP").value);
    OBP=5*Diplomanotu
    document.getElementById("Diplomanotu").innerHTML =Diplomanotu;
 


    
}
/**
* @brief  cleared all textboxes with clear button
*/
//TODO

/**
* @brief  the results are calculated with the calculate button
*/
var submit=document.getElementById("btnHesapla")
submit.onclick=function (){
/**
* @brief  raw score and placement score calculated
*/ 
    var tytHam= Turkcenet + sosyalnet + tmatematiknet + fennet;
    tytHam=tytHam*5

    if(document.getElementById("checkbox").checked = true){  //If the checkbox is checked, the score calculation is done as in this section.
        var tytYerlestirme=Diplomanotu*0.3+tytHam;
    }
    else{//Default score calculation
        var tytYerlestirme=Diplomanotu*0.6+tytHam 
    }
 
    var sayHam= aytMatematikNet + aytFizikNet + aytKimyaNet + aytBiyolojiNet; //say ham
    sayHam=sayHam*6.25;
    sayHam=0.6*sayHam+0.4*tytHam;

    if(document.getElementById("checkbox").checked = true){  //If the checkbox is checked, the score calculation is done as in this section.
        var sayYerlestirme=Diplomanotu*0.3+sayHam;
    }
    else{//Default score calculation
        var sayYerlestirme=Diplomanotu*0.6+sayHam 
    }

    var sözHam= aytEdebiyatNet + aytTarih1Net + aytCografya1Net + aytTarih2Net+aytCografya2Net+aytFelsefeNet+aytDinNet;
    sözHam=sözHam*6.25;
    sözHam=0.6*sözHam+0.4*tytHam;

    if(document.getElementById("checkbox").checked = true){  //If the checkbox is checked, the score calculation is done as in this section.
        var sözYerlestirme=Diplomanotu*0.3+sözHam;
    }
    else{//Default score calculation
        var sözYerlestirme=Diplomanotu*0.6+sözHam ;
    }

    var eaHam=(sözHam+12.5*aytMatematikNet)*0.5
    
    if(document.getElementById("checkbox").checked = true){  //If the checkbox is checked, the score calculation is done as in this section.
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