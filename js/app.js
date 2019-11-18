/*
    Simple cal
        When buttons are pressed, store numbers
        when first number is pressed, store in first number
        when second number is pressed, store in current number
        when operator is pressed, save operator and to first number
        
        when equal button is clicked
            if input includes(+)
                run addition function
            else if input includes(-)
                run subtraction function
            else if input includes(divide symbol)
                run division function
            else if input includes (*)
                run multiplication function
*/

    var numbers = document.querySelectorAll('.num');
    var operator = document.querySelectorAll(".operator");
    var screen = document.getElementById("display");
    var equal = document.getElementById("equal-sign");
    var curNum = ""; // Current number
    var oldNum = ""; // First number
    var result;

    function clr() 
    { 
        curNum = "";
        oldNum = "";
        result = "";
        document.getElementById("display").value = "0"; 
    }

    //get current number
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click',function (result) {
           if (result) {
            curNum += this.getAttribute('data-value');
            result = "";
            console.log(curNum);
            
           } else {
            curNum = this.getAttribute('data-value');
            console.log(curNum);
            
           }
           screen.value = curNum;
        })
    }
    
    //everytime an operator is pressed, it stores the curNum in oldNum and resets if its two digit or more
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click',function () {
            oldNum = curNum;
            curNum = "";
            operator = this.getAttribute("data-op");
        })
    }

    function solve() {
    oldNum = parseFloat(oldNum);
    curNum = parseFloat(curNum);

    // Perform operation
    switch (operator) {
        case "+":
        result = oldNum + curNum;
        break;

        case "-":
        result = oldNum - curNum;
        break;

        case "*":
        result = oldNum * curNum;
        break;

        case "/":
        result = oldNum / curNum;
        break;

        // If equal is pressed without an operator, keep number and continue
        default:
        result = curNum;
    }
    screen.value = result;
    //resets and get the result 
    oldNum = 0;
    curNum = result;
        
}