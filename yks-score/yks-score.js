var matrix=[
    //dersler
    ["tytTurkce","tytSosyal","tytMatematik","tytFen","aytEdebiyat","aytTarih1","aytCografya1","aytTarih2",
    "aytCografya2","aytFelsefe","aytDin","aytMatematik","aytFizik","aytKimya","aytBiyoloji"],
    //limitler
    [40,20,40,20,24,10,6,11,11,12,6,40,14,13,13],
    //netler
    []
]

function netYazma(cnt){
    let dogru=Number(document.getElementById(matrix[0][cnt]+"Dogru").value);
    let yanlis=Number(document.getElementById(matrix[0][cnt]+"Yanlis").value);
    let net = dogru - yanlis * 0.25;
    if (net==0){
        document.getElementById(matrix[0][cnt]+"Net").innerHTML ='-';
    }else{
        document.getElementById(matrix[0][cnt]+"Net").innerHTML =net;
    }
    matrix[2][cnt]=net;
    if((dogru+yanlis) > matrix[1][cnt]){
        window.alert("Toplamda "+matrix[1][cnt].toString()+" soru girebilirsin.");
        document.getElementById(matrix[0][cnt]+"Dogru").value = "-";
        document.getElementById(matrix[0][cnt]+"Yanlis").value = "-";
        document.getElementById(matrix[0][cnt]+"Net").innerHTML  = "-";
    }
}

var Diplomanotu
let body = document.querySelector('body');
body.onclick = function() {
    document.getElementById("Diplomanotu").value=50;
    document.getElementById("OBP").value=250;
 /**
* @brief  Calculations and warnings
*/  
    for(let i=0; i<matrix[0].length;i++){
        netYazma(i);
    }
/** 
* @brief  OBP alert added
*/  
    Diplomanotu = Number(document.getElementById("Diplomanotu").value);
    if(Diplomanotu < 0 || Diplomanotu > 100){
        window.alert("Diploma Notu 0-100 aralığında olmalıdır");
        document.getElementById("Diplomanotu").value=50;
    }
/**
* @brief  OBP grade calculated
*/
    document.getElementById("OBP").value = 5 * Diplomanotu; 
}
/**
* @brief  cleared all textboxes with clear button
*/

var temizle=document.getElementById("btnTemizle");
temizle.onclick=function (){
    for(let i=0; i<matrix[0].length;i++){
        document.getElementById(matrix[0][i]+"Dogru").value='-';
        document.getElementById(matrix[0][i]+"Yanlis").value='-';
    }

    document.getElementById("Diplomanotu").value=50
    document.getElementById("OBP").value=250
    document.getElementById("tytHam").innerHTML = '-';
    document.getElementById("tytYerlestirme").innerHTML = '-';
    document.getElementById("sayHam").innerHTML = '-';
    document.getElementById("sayYerlestirme").innerHTML = '-'; 
    document.getElementById("eaHam").innerHTML = '-';
    document.getElementById("eaYerlestirme").innerHTML = '-';
    document.getElementById("sözHam").innerHTML = '-';
    document.getElementById("sözYerlestirme").innerHTML = '-';
}

/**
* @brief  the results are calculated with the calculate button
*/
var hesapla=document.getElementById("btnHesapla");
hesapla.onclick=function (){

    var tytHam= (matrix[2][0] + matrix[2][1] +matrix[2][2] + matrix[2][3]) * 5;
    var sayHam= (matrix[2][11] + matrix[2][12] + matrix[2][13] + matrix[2][14]) * 6.25; 
    sayHam=0.6*sayHam+0.4*tytHam;
    var sözHam= (matrix[2][4] + matrix[2][5] + matrix[2][6] + matrix[2][7]+matrix[2][8]+matrix[2][9]+matrix[2][10]) *6.25;
    sözHam=0.6*sözHam+0.4*tytHam;
    var eaHam=(sözHam+12.5*matrix[2][11])*0.5;

    if(document.getElementById("checkbox").checked == true){
        var tytYerlestirme=Diplomanotu*0.3+tytHam;
        var sayYerlestirme=Diplomanotu*0.3+sayHam;
        var sözYerlestirme=Diplomanotu*0.3+sözHam;
        var eaYerlestirme=Diplomanotu*0.3+eaHam;
    }
    else{
        var tytYerlestirme=Diplomanotu*0.6+tytHam; 
        var sayYerlestirme=Diplomanotu*0.6+sayHam; 
        var sözYerlestirme=Diplomanotu*0.6+sözHam;
        var eaYerlestirme=Diplomanotu*0.6+eaHam;
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