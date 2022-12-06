const tableDiv = document.querySelector("#studentsTable")
const pageNumsDiv = document.querySelector("#pageNums")

let currPage = 1; //sayfa numarası birden başlar
const numstudentsPerPage = 8;//sayfada datadan cekilen 8 kişi listelenir.
const numPages = Math.ceil(students.length/numstudentsPerPage); //sayfaları sekizer sekizer ayırması icin olusturuldu.

function renderTable(){
    const lastItemIndex = currPage*numstudentsPerPage;
    const firsItemIndex = lastItemIndex - numstudentsPerPage;
    const items = students.slice(firsItemIndex, lastItemIndex);
/** 
* @brief  listenin özellikleri belirlendi.
*/ 
    const listStyle = ` 
        display:flex; 
        justify-content: space-between; 
        height: 50px; 
        border-bottom: 1px solid black; 
        padding-top: 0;   
    `;
    // liste isterlere uygun şekilde düzenlendi.
    let template = '<ul>';
    items.forEach(item=>{
        template += `
            <li style= "${listStyle}">
                <span>${item.fname} <span>${item.lname}</span></span>
                <p>${item.num}</p>
                <p>${item.dept}</p>
                <button class="btnSil">Sil</button>
                <button class="btnDüzenle">Düzenle</button>
                <button class="btnDetay">Detay</button>
            </li>
        `;
    })  
    template += '</ul>'

    tableDiv.innerHTML = template;
}
/** 
* @brief  sayfa numarası için fonsiyon yazıldı.
*/ 
function renderPageNums(){
    let template = '<div>';

    for (let i=1; i<=numPages; i++){
        template += `<button 
        class="btnPageNumber ${i==currPage? 'active': ''}"
        onclick="pageClicked(${i})">${i}</button>
        `;
    }
    template += "</div>"
    pageNumsDiv.innerHTML = template;
}

function pageClicked(pageNum){
    if (pageNum == currPage) return;
    currPage = pageNum;
    renderAll();
}

function renderAll(){
    renderTable();
    renderPageNums();
}

window.addEventListener('DOMContentLoaded', (e) => {
    renderAll();
});

/** 
* @brief  yeni ögrenci ekleme fonksiyonu yazıldı.
*/ 
var addnewstudent=document.getElementById("addnewstudent");
addnewstudent.onclick=function (){

}