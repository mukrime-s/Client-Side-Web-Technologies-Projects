let timer = setInterval(update, 1000); //Her saniyede kontrol edip güncellemek için olusturuldu.
//Her birimi uygun yere eklemek için veriler arası bağlanti saglandi.
let hours = document.querySelector('#hourId'); 
let minutes = document.querySelector('#minuteId');
let seconds = document.querySelector('#secondId');

let cycle = document.querySelector('.greenBox');//Saatin kaç olduguna göre ogleden once icin "am" ve ogleden sonrasi icin "pm" yazması saglandi 
printCycle();

function printCycle() { //Saati olusturma fonsiyonu
    if (new Date().getHours() > 12) {
        cycle.innerHTML = `<p> PM </p>`;
    } else {
        cycle.innerHTML = `<p> AM </p>`;
    }
}
function update() { //Zamana gore saatin guncellenmesi fonksiyonu
    hours.innerHTML = `<p> ${(new Date().getHours() % 12).toString().padStart(2, "0")} </p>`;
    minutes.innerHTML = `<p>${new Date().getMinutes().toString().padStart(2, "0")}</p>`; 
    seconds.innerHTML = `<p>${new Date().getSeconds().toString().padStart(2, "0")}</p>`;
}