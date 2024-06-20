const display =document.getElementById("display");

function appeToDisplay(input){
     
    display.value += input;

}


function clearDisplay(){
    display.value="";

}


function calculate(input){

    display.value= eval(display.value);

}