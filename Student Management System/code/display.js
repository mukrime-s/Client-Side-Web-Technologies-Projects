var listNumber=8
var currentPage=1
const depts = {
    "1": "Bilgisayar Müh.",
    "2": "Elektrik-Elektronik Müh.",
    "3": "Endüstri Müh.",
    "4": "İnşaat Müh."
  };

function deleteFunction(index){

}
function infoFunction(index){
    
}
function editFunction(index){
    
}
const getUsers = () => {
    axios.get('http://localhost:3000/students')
    .then(response => {

        let temp=document.querySelector('.student-list')
        
        for(let i=((currentPage-1)*listNumber); i < (((currentPage-1)*listNumber)) + listNumber; i++){ 
            try{
                const students = response.data[i];
                let stringJson=JSON.stringify(students);
                let values=JSON.parse(stringJson);
                temp.innerHTML+=`
                <tr>
                    <td>${values.fname} ${values.lname}</td>
                    <td>${values.num}</td>
                    <td>${depts[values.dept.toString()]}</td>
                    <td class="btn-row">
                        <button class="delete${values.id}">Sil</button>
                        <button class="edit${values.id}">Düzenle</button>
                        <button class="info${values.id}">Detay</button>
                    </td>
                </tr>`
                
            }
            catch{   
            }
        }
        
        for(let i=0;i<(response.data.length)/listNumber;i++){
            document.querySelector('.page-buttons').innerHTML += `<button id="pageBtn${i}">${i+1}</button>`
        }

        for(let i=0;i<(response.data.length)/listNumber;i++){
            document.querySelector(`#pageBtn${i}`).onclick=function(){
                currentPage=i+1
                console.log(currentPage)
            }
        }
        
        
        for(let i=((currentPage-1)*listNumber)+1; i < (((currentPage-1)*listNumber)) + listNumber + 1;i++){
            
            document.querySelector(`.delete${i}`).onclick=function(){
                console.log("delete"+i)
                deleteFunction(i);
            }
            document.querySelector(`.info${i}`).onclick=function(){
                console.log("info"+i)
                infoFunction(i);
            }
            document.querySelector(`.edit${i}`).onclick=function(){
                console.log("edit"+i)
                editFunction(i);
            }
        }
    }

    ).catch(error => console.error(error));
   };

getUsers();

