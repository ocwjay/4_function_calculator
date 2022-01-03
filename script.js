var num1 = 0;
var num2 = 0;
var switchNum = 0;
var operator = 0;
var result = 0;
var overwriteDisplay = 1;

function clr() {
    num1 = 0;
    num2 = 0;
    switchNum = 0;
    operator = 0;
    result = 0;
    document.querySelector("#display").innerHTML = 0;
}

function press(num) {
    if(switchNum == 0){
        if(overwriteDisplay == 1) {
            document.querySelector("#display").innerHTML = num;
            num1 = num;
            overwriteDisplay = 0;
        } else {
            num1 = document.querySelector("#display").innerHTML + num;
            document.querySelector("#display").innerHTML = num1;
        }
    } else {
        if(overwriteDisplay == 1) {
            num2 = num;
            document.querySelector("#display").innerHTML = num2;
        } else {
            num2 = document.querySelector("#display").innerHTML + num;
            document.querySelector("#display").innerHTML = num2;
        }
    }
}

function setOP(op) {
    operator = op;
    switchNum = 1;
    overwriteDisplay = 1;
}

function calculate() {
    result = eval(num1 + operator + num2);
    document.querySelector("#display").innerHTML = result;
    switchNum = 0;
    overwriteDisplay = 1;
}

