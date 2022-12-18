
let link='http://localhost:3000/students'//'http://umutdeniz.html-5.me/data/data.json'

//default parameters
var listlimit=5;
var currentPage=1;
var missedDataCounter=0;

//row and column number of modal
var rowNumber=3;
var columnNumber =2;

const depts = {
    "1": "Bilgisayar Müh.",
    "2": "Elektrik-Elektronik Müh.",
    "3": "Endüstri Müh.",
    "4": "İnşaat Müh."
};
/*  
const depts = {
    "1": "Bilgisayar Müh.",
    "2": "Elektrik-Elektronik Müh.",
    "3": "Endüstri Müh.",
    "4": "İnşaat Müh."
    };
*/

axios.get(`${link}`)
    .then(response => {
        var data=response.data//['students'];

        data.forEach((element,index) => {
            try{
                //Data Defination
                defineTableElement(element.fname,element.lname,element.num,element.dept,element.id);
                
                //Page Button Defination
                document.querySelector('.page-buttons').innerHTML += `<button class="pageBtn${index}">${index+1}</button>` 
            }
            catch {console.log('There are undisplayable elements!');}    
        });
        //default
        defineFunctions();
        callOnclick();
        display(5,1,5);
        
        function defaultModalOperations(modalObject,button,h1text){
            modalObject.style.display = 'block';
            document.querySelector('.modal-icon-header>h1').innerHTML=h1text

            if(button!=null){
                let modalButton=document.querySelector(".default-modal-footer-default-button");
                modalButton.innerHTML=button;
                modalButton.style.display='block'
            }
            else{document.querySelector(".default-modal-footer-default-button").style.display='none'}
            

            // When the user clicks on <span> (x) || Close || somewhere other than the modal
            for(let i=0;i<2;i++){   
                document.querySelectorAll(`.default-modal-close`)[i].onclick = () => {
                    modalObject.style.display = "none";
                }
            }
            window.onclick = (event) => {
                if (event.target == modalObject) {
                    modalObject.style.display = "none";
                    }
            }
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === 27) {
                    modalObject.style.display='none'
                    }
                }
            )    
        }

        function searchString(object) {
            let charCnt=0;
            let intCnt=0;
            for (let i = 0; i < object.length; i++) {
                if (isNaN(parseInt(object[i]))) {
                    charCnt++;
                }
                else{
                    intCnt++;
                }
            }
            return {charCnt,intCnt};
        }

        function inputsValidator(input){

            let validPoint=0;
            if (searchString(input.firstName).charCnt>=3 ) {
                validPoint+=1;

            }
        
            if (searchString(input.lastName).charCnt>=3 ) {
                validPoint+=1;

            }
            
            if (searchString(input.studentNum).intCnt==12 && searchString(input.studentNum).charCnt==0) {
                validPoint+=1;
                
            }
            
            if (searchString(input.department).intCnt==1) {
                validPoint+=1;
                
            }
            if (searchString(input.pob).charCnt>=3 && searchString(input.pob).intCnt==0) {
                validPoint+=1;

            }

            console.log(validPoint)
            
            
            if (validPoint==5) {
                return true;
            }
            return false;
        }

        function readDataFromModal(dataToRead){
            let temp;
                for(let i=0; i<rowNumber*columnNumber; i++){

                        temp=document.querySelectorAll(".form-control")[i].value;
                        dataToRead[Object.keys(dataToRead)[i]]=temp;
                    
                }
            return dataToRead;
        };

        function writeDataToModal(indexOfDataToWrite,readOnlyFlag,resetflag){
            let temp;
            let row;
            for(let i=0;i<rowNumber ;i++){
                for(let j=0; j<columnNumber; j++){
                    
                    row=document.querySelectorAll(".form-control")[(i*columnNumber)+j];
                    row.disabled = readOnlyFlag;

                    if (resetflag) {
                        row.value=null;
                        continue;
                    }
                    temp=data.find(item => item.id === indexOfDataToWrite); //get data by id
                    if (Object.keys(temp)[((i*columnNumber)+j)+1]=='dept') {
                        row.value=depts[temp[Object.keys(temp)[((i*columnNumber)+j)+1]]]; //write data
                    }
                    row.value=temp[Object.keys(temp)[((i*columnNumber)+j)+1]]; //write data
                }
            }
        }

        function deleteFunction(index){

            // Get the modal
            var modal = document.querySelector(".delete-pop-up");
            modal.style.display='block';
            
            document.querySelector('.delete-pop-up-information').innerHTML=
                `<b>${data.find(item => item.id === index).fname} ${data.find(item => item.id === index).lname
                }</b> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?`

            document.querySelector(`.close-pop-up`).onclick = () => {
                modal.style.display = "none";
            }
            
            window.onclick = (event) => {
                if (event.target == modal) {
                    modal.style.display = "none";   
                }
            }
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === 27) {
                    modal.style.display='none'
                }
              })

            for (let i = 0; i < 2; i++) {
                document.querySelector(`.delete-pop-up-buttons button:nth-child(${i+1})`).onclick = () => {
                    
                    if (JSON.parse(document.querySelector(`.delete-pop-up-buttons button:nth-child(${i+1})`).value.toLowerCase())) 
                        {
                            axios.delete(`${link}/${index}`)
                            .then(() => {
                                console.log('Delete successful')
                            })
                            .catch((error)=>{console.log('Delete error: '+error)})  
                        } 
                    else {modal.style.display='none';};
                };
            };
        };

        function infoFunction(index){

            var defaultModal = document.querySelector(".default-modal");
            defaultModalOperations(defaultModal,null,'Öğrenci Bilgileri');
            
            writeDataToModal(index,true,false);

        };
        
        function editFunction(index){
            
            //define Modal buttons
            var defaultModal = document.querySelector(".default-modal");
            defaultModalOperations(defaultModal,'Edit','Düzenlenecek Öğrenci Bilgileri');
            
            writeDataToModal(index,false,false);
            document.querySelector(".default-modal-footer-default-button").onclick = () =>{
                var forms=document.querySelectorAll(".needs-validation");
                console.log(Array.prototype.slice.call(forms)[0][0].checkValidty())
                console.log(forms)
                
                //Read inputs as a dict
                let updateData={firstName: null, lastName: null, studentNum: null, department: null, pob: null, dob: null}
                updateData=readDataFromModal(updateData);
                if(inputsValidator(updateData)==false){
                    return
                }

                //execute edit operation
                axios.patch(`${link}/${index}`, {  
                    fname: updateData.firstName,
                    lname: updateData.lastName,
                    num: updateData.studentNum,
                    dept: updateData.department,
                    pob: updateData.pob,
                    dob: updateData.dob
                })
                .catch(function (error) {
                    console.log("execute default operation error function: "+error);
                });
            };
        };

        function addFunction() {
            
            //define Modal buttons
            var defaultModal = document.querySelector(".default-modal");
            defaultModalOperations(defaultModal,'Add','Eklenecek Öğrenci Bilgileri');
            
            writeDataToModal(null,false,true);

            //add operation
            document.querySelector('.default-modal-footer-default-button').onclick = () =>{
                
                //Read inputs as a dict
                let insertData={firstName: null, lastName: null, studentNum: null, department: null, pob: null, dob: null}
                insertData=readDataFromModal(insertData);
                if(inputsValidator(insertData)==false){
                    return
                }
    
                //execute default operation
                axios.post(`${link}`, {  
                    id: data[`${data.length-1}`].id+1,
                    fname: insertData.firstName,
                    lname: insertData.lastName,
                    num: insertData.studentNum,
                    dept: insertData.department,
                    pob: insertData.pob,
                    dob: insertData.dob
                })
                .catch(function (error) {
                    console.log("execute default operation error function: "+error);
                });
            };
        }

        function noneDisplay(){
            data.forEach((element,index) => {
                let btn= document.querySelector(`.pageBtn${index}`);
                btn.style.display='none';
                let row = document.querySelector(`#row${element.id}`);
                row.style.display='none';
            });

        };

        function display(listlimit,initialPoint,finalPoint){
            noneDisplay();
            
            data.forEach((element,index) => {
                if (index<Math.ceil(data.length/listlimit)) {
                    let object= document.querySelector(`.pageBtn${index}`);
                    object.style.display='';
                }
                try{
                    if (index+1 >= initialPoint && index+1 <= finalPoint) {
                        let object= document.querySelector(`#row${element.id}`);
                        object.style.display='';
                        missedDataCounter++;
                    }
                }
                catch{console.log('There are undisplayable elements!');}
            });
            missedDataCounter=listlimit-missedDataCounter;
        };

        function defineTableElement(firstName,lastName,studentNum,department,elementId){
            let tablelist=document.querySelector('.student-list');
            tablelist.innerHTML+=
            `
                <tr id="row${elementId}">
                    <td>${firstName} ${lastName}</td>
                    <td>${studentNum}</td>
                    <td>${depts[department.toString()]}</td>
                    <td class="btn-row">
                        <button id="delete${elementId}">Sil</button>
                        <button id="edit${elementId}">Düzenle</button>
                        <button id="info${elementId}">Detay</button>
                    </td>
                </tr>
            `
        };

        function callOnclick(){

            display(listlimit,((currentPage-1)*listlimit)+1,(((currentPage-1)*listlimit)+listlimit));
            document.querySelector('.footer-title').innerHTML=`<strong>${data.length}</strong> öğrenciden <strong>${
                ((currentPage-1)*listlimit)+1}</strong>-<strong>${(((currentPage-1)*listlimit)+listlimit-missedDataCounter)} </strong>arası gösteriliyor`
            if (missedDataCounter!=0) {
                missedDataCounter=0;
            }
        }

        function defineFunctions(){
            
            let operations=["delete","info","edit"];
            let operationFunctions=[deleteFunction,infoFunction,editFunction];
            data.forEach((element,index) => {
                
                //define page button functions
                document.querySelector(`.pageBtn${index}`).onclick = () => {
                    currentPage=parseInt(document.querySelector(`.pageBtn${index}`).innerHTML);
                    callOnclick();
                }

                //define operation button functions 
                for(let j=0; j < operations.length; j++){
                    document.querySelector(`#${operations[j]}${(element.id)}`).onclick = () => {
                        operationFunctions[j](element.id);
                        callOnclick();
                    }
                }
            });

            //define limiter button functions
            for(let i=1;i<=3;i++){
                document.querySelector(`.limiter-buttons > button:nth-child(${i})`).onclick = () => {
                    listlimit=parseInt(document.querySelector(`.limiter-buttons > button:nth-child(${i})`).innerHTML);
                    if(currentPage>data.length/listlimit){
                        currentPage=Math.round(data.length/listlimit);
                    }
                    callOnclick();
                }
            }

            //Define add button
            document.querySelector("#add-button").onclick = () => {
                addFunction();
            }
        };
    }
)
    .catch(error => console.log(error));