/*
    Simple calc

        when current number is pressed, store in current number
        when operator is pressed, save operator and store current number in old number and reset current number

        Then convert numbers from string to interger
        
        when equal button is clicked
        if the case was '+'
            do addition operation
        if the case was '-'
            do addition operation
        if the case was '*'
            do addition operation
        if the case was '/'
            do addition operation
         then DISPLAY "result"
         if continuing to do operation against result
         reset old number
         have current number equal result
         
    Completed
        NEW!
        do multiple operations
        accept more than 1 right hand number
        if there is more than one right hand number 
            do the left hand number and the first right hand number
            then do 
*/

    var numbers = document.querySelectorAll('.num');
    var operator = document.querySelectorAll(".operator");
    var screen = document.getElementById("display");
    var clear = document.getElementsByClassName("all-clear")
    var equal = document.getElementById("equal-sign");
    var curNum = ""; // Current number
    var oldNum = ""; // First number
    var result;

    for (let i = 0; i < clear.length; i++) {
        //for addeventlistener function, there is no way to pass a param
        clear[i].addEventListener('click',function () {
            curNum = "";
            oldNum = "";
            result = "";
            document.getElementById("display").value = "0";
        })
        
    }
    

    //get current number
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click',function () {

            curNum += this.getAttribute('data-value');
            result = "";
            console.log(curNum);
            
            screen.value = curNum;
        })
    }
    
    //everytime an operator is pressed, it stores the curNum in oldNum and resets 
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click',function () {
            oldNum = curNum;
            curNum = "";
            operator = this.getAttribute("data-op");
            console.log(operator);
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
    //resets old number and changes result to current number
    oldNum = 0;
    curNum = result;
        
}

