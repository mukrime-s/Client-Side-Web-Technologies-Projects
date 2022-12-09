//default parameters
var listlimit=5;
var currentPage=1;

const depts = {
    "1": "Bilgisayar Müh.",
    "2": "Elektrik-Elektronik Müh.",
    "3": "Endüstri Müh.",
    "4": "İnşaat Müh."
};

//In Progress
function deleteFunction(index){

};
function infoFunction(index){
    
};
function editFunction(index){
    
};

function resetButtons(loopLength){
    for(let i=1; i <= loopLength ;i++){
        let object= document.querySelector(`.pageBtn${i}`);
        object.style.display='none';
    }
};

function buttonDisplay(listlimit,dataLength){
    resetButtons(dataLength);

    for(let i=1 ; i<=Math.ceil(dataLength/listlimit);i++){
        let object=document.querySelector(`.pageBtn${i}`);

        //To display buttons
        object.style.display='';
    }
}

function resetTable(){
    for(let i=1; i <= 25 ;i++){
        let object= document.querySelector(`#row${i}`);
        object.style.display='none';
    }
};

function listTableElements(initialPoint,finalPoint){
    resetTable();
    try{
        for(i=initialPoint;i<=finalPoint;i++){
            let object= document.querySelector(`#row${i}`);
            object.style.display='';
        }
    }
    catch{
        console.log('There is no such that a data!');
    }
}

function defineTableElement(firstName,lastName,studentNum,department,elementId){
    
    let tablelist=document.querySelector('.student-list');
    tablelist.innerHTML+=
    `
        <tr id="row${elementId}">
            <td id="first-name${elementId}">${firstName} ${lastName}</td>
            <td id="last-name${elementId}">${studentNum}</td>
            <td id="department${elementId}">${depts[department.toString()]}</td>
            <td class="btn-row">
                <button id="delete${elementId}">Sil</button>
                <button id="edit${elementId}">Düzenle</button>
                <button id="info${elementId}">Detay</button>
            </td>
        </tr>
    `
};
function defineFunctions(loopLength){
    
    //define page button functions
    for(let i=1;i<=loopLength;i++){
        document.querySelector(`.pageBtn${i}`).onclick=function(){
            currentPage=parseInt(document.querySelector(`.pageBtn${i}`).innerHTML);
            callOnClick(loopLength);
        }
    }

    //define limiter button functions
    for(let i=1;i<=3;i++){
        document.querySelector(`.limiter-buttons > button:nth-child(${i})`).onclick=function(){
            listlimit=parseInt(document.querySelector(`.limiter-buttons > button:nth-child(${i})`).innerHTML);
            if(currentPage>loopLength/listlimit){
                currentPage=Math.round(loopLength/listlimit);
            }
            callOnClick(loopLength);
        }
    }

    //define operation functions    
    let operations=["delete","info","edit"];
    let operationFunctions=[deleteFunction,infoFunction,editFunction];
    for(let i=1; i <= loopLength; i++){
        for(let j=0; j < operations.length; j++){
            document.querySelector(`#${operations[j]}${i}`).onclick=function(){
                console.log(`.${operations[j]}${i}`);
                operationFunctions[j](i);
            };
        };
    };
}

function callOnClick(dataLength){
    buttonDisplay(listlimit,dataLength);
    listTableElements(((currentPage-1)*listlimit)+1,(((currentPage-1)*listlimit)+listlimit));
}
function executeProgram (){
    axios.get('http://localhost:3000/students')
    .then(response => {
        var dataLength=response.data.length;

        //Data Defination
        for(let i=0; i < dataLength ;i++){
            try{
                const values = JSON.parse(JSON.stringify(response.data[i]));
                defineTableElement(values.fname,values.lname,values.num,values.dept,values.id);
            }
            catch {console.log('There are undisplayable elements!');}
        }
        //Button Definition
        for(let j=1;j<=dataLength;j++){
            let object=document.querySelector('.page-buttons')
            object.innerHTML += `<button class="pageBtn${j}">${j}</button>`
        }
    
        
        defineFunctions(dataLength);
        
        //default
        buttonDisplay(5,dataLength);
        listTableElements(1,5);
    
    }
    ).catch(error => console.log(null));
};

executeProgram();