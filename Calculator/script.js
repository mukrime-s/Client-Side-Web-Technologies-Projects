//All HTML buttons in a single array
var keypad=['0','1','2','3','4','5','6','7','8','9','Clear','Equal','Add','Mult','Subt','Div']

//Digits are keep in this array
var memory=[]
//Operaitons are keep in this array
var operations=[]
//Numbers are keep in this array
var inputNumbers=[]
var tempInputs=[]
var tempElement=0

//This variables stands for FSM Implementation
var currentState=0
var previousState=0 
var j=0
var result=0

var resultFlag=false

//A dictionary that keeps the operation keys and the function that stands for
var mathOperations = {
    '12': (x, y) => { return x + y },
    '14': (x, y) => { return x - y },
    '13': (x, y) => { return x * y },
    '15': (x, y) => { return x / y }
}    

//Main state loop that terminates all operations
for(let i=0;i<keypad.length;i++){
    //Accessing the spesific buttons Ex: "btn"+keypad[0] = "btn0"
    var temp=document.getElementById("btn"+keypad[i]);

    temp.onclick= () => {
        //State decisions according to the FSM

        //If the user presses any number button
        if(i<10){
            if(currentState==0 || currentState==1)  {currentState=1}
            else{currentState=3}
        }
        //If the user presses any operator button
        else if(i>11)   {currentState=2}
        //If the user presses the equal button
        else if(i==11)  {if(currentState==3) {currentState=0}}
        //If the user presses the clear(C) button
        else{currentState=0}

        //If the user presses an operator after an operator program returns 
        if((currentState==2 && previousState==2)||((currentState==0 && previousState==0)&& (i!=10))) {return}

        //All states performs a different operation and these operations are written in here
        switch (currentState) {    
            case 0:
                //If the pressed button is clear(C) 
                if(i==10){
                    resetVariables()
                    document.getElementById("result").innerHTML=0
                    document.getElementById("memory").innerHTML=""
                }
                //If the pressed button is equal(=) 
                else{
                    inputNumbers.push(tempInputs[tempInputs.length-1])
                    for(let k=0;k<operations.length;k++){
                        //Multiplication and division operations must be done first, this part of code makes that
                        if(operations[k]==13 ||operations[k]==15){
                            result=mathOperations[operations[k].toString()](inputNumbers[k],inputNumbers[k+1])
                            inputNumbers[k+1]=result
                            inputNumbers[k]=0

                            //If the previous operation is subtraction
                            if(operations[k-1]==14){ 
                                operations[k]=14
                            }
                            else{
                                operations[k]=12
                            }
                        }    
                    }

                    result=inputNumbers[0]

                    for(let k=0;k<operations.length;k++){
                        result=mathOperations[operations[k]](result,inputNumbers[k+1])
                    }

                    //If the number is fractional, program displays 2 precision on screen
                    if(result % 1!= 0) {result=parseFloat(result.toFixed(2))}

                    document.getElementById("result").innerHTML=result
                    document.getElementById("memory").innerHTML=document.getElementById("memory").innerHTML+tempInputs[tempInputs.length-1]+document.getElementById("btn"+keypad[i]).innerHTML
                    
                    //When the result is calculated, this boolean value will be true
                    resultFlag=true

                    resetVariables()
                    tempInputs.push(result)
                }

                break;   
            case 2:
                //The case that operators will be pressed
                
                inputNumbers.push(tempInputs[tempInputs.length-1])
                memory=[]
                j=0
                operations.push(i)
                
                if(resultFlag){
                    document.getElementById("memory").innerHTML=""
                    resultFlag=false
                }

                document.getElementById("memory").innerHTML=document.getElementById("memory").innerHTML+tempInputs[tempInputs.length - 1]+document.getElementById("btn"+keypad[i]).innerHTML
    
                break;
            default:
                //These default case stands for state 1 and state 3 in FSM
                
                memory[j++]=i

                //Digits turns into numbers Ex: 123 = 1*10^2 + 2*10^1 + 3*10^0
                for(let cnt=0;cnt<memory.length;cnt++){
                    tempElement+=memory[cnt]*(10**(memory.length-1-cnt))
                }

                //If the user enters a division by zero event
                if(tempElement==0 && operations[operations.length-1]==15){
                    document.getElementById("result").innerHTML=0
                    document.getElementById("memory").innerHTML=""
                    window.alert("Exception: Cannot Divided by Zero");
                    resetVariables()
                    return
                }

                tempInputs.push(tempElement)
                document.getElementById("result").innerHTML=tempElement
                tempElement=0

                break;
        }

        previousState=currentState
    }
}

function resetVariables(){
    operations=[]
    memory=[]
    inputNumbers=[]
    tempInputs=[]
    j=0
    tempElement=0
}

//Changing themes
//After clicking the rotate arrow, theme will be changed;
const rotateClick = document.querySelector('.fa-arrow-rotate-right');

rotateClick.addEventListener('click', switchThemes);

//Switching algorithm
function switchThemes() {
    //Theme button for changin the theme icon
    let themeButton = document.querySelector('#theme');

    //Current theme for changing the themes
    let currentTheme = document.querySelector('#themeRef');

    if (currentTheme.getAttribute('href') == 'light.css') {
        currentTheme.setAttribute('href', 'dark.css');
        themeButton.className = "fa-sharp fa-solid fa-moon";
    } else {
        currentTheme.setAttribute('href', 'light.css');
        themeButton.className = "fa-sharp fa-solid fa-sun";
    }
}