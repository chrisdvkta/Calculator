const display_para = document.querySelector(".num_display");
const numbers = document.querySelectorAll(".numbers");
const symbol = document.querySelectorAll(".symbols")
const reset_btn = document.querySelector("#clear");
const para = document.createElement('p');


//event listener for keys => number and symbols 
//put 0 as initial value, so operator can be triggered. 
//in numbers, take the target as a string, 
//if operator is not triggered then concatenate the numbers into a singele variable (operand1)
// then check if any symmbol is triggered, then append it to display as well, set it to operator
// wait for 2nd number to be pressesed, concatenate and append to display set the 2nd number to operand2
//if another symbol is pressed then send operand1,2 and operator to operate function. 
//append the result onto display
// set operand1 as the result from operate() and operator as the 2nd symbol as operator.


//step 1 : do it by hand 
// initial display is 0
// pressed 78, appended to display 
// press operator, append to display
// press 2nd number, 21
//press another operator
//num1 and num2 is calculated and the result is displayed, 
// result is set as num1 and is waitinig for num2, 
//num 2 is pressed, 1, and is waiting for another operator to be pressed. 


//Listen for click and append the number to display 
//

let operand1= '';
let operand2='';
console.log(operand2);
let operator = "";


let initialVal;





numbers.forEach((button)=> {
    button.addEventListener("click", function (e){
    if(operator ===""){
        operand1 += e.target.innerText;
        console.log(para.innerText += e.target.innerText); 
        display_para.appendChild(para);
        
    }else{
        initialVal = operator; 
        if (initialVal ==operator){
            operand2 += e.target.innerText;
            console.log(para.innerText += e.target.innerText); 
            display_para.appendChild(para);    
        }
    }
});
});

function run (){
    operand1 = operate(operator,Number(operand1),Number(operand2));
    para.innerText += operand1;
    display_para.appendChild(para);
    operand2 = "";
}

//remove event listener/ disable buttons after first operator. 
symbol.forEach((button)=> {
    button.addEventListener("click", function (e){
        // if (operand2 != "undefined"){
        //   operand1 = operate(operator,(operand1,operand2))
        //    operand2 = "undefined";
        // }
        if (initialVal == operator || e.target.innerText ==="="){
            clear();
            run();
        }    
        console.log(e.target.innerText);
        operator = e.target.innerText;

        if (e.target.innerText === "="){
            para.innerText += " ";
        }else{
            para.innerText += " " + ` ${e.target.innerText}  `;
        }
    display_para.appendChild(para);
    
    })

})


function clear (){
       para.innerText = '';
  }   



reset_btn.addEventListener('click', ()=>{
    clear();
    reset();
    
});


function reset () {
    
operand1= '';
operand2='';
console.log(operand2);
operator = "";
}



function add(...args){
   return args.reduce ((sum, currentVal)=>sum +currentVal,0)
}

function subtract(...args){
    return args.reduce ((currentVal,nextVal)=> currentVal - nextVal);
}

function divide (...args){
    return args.reduce ((dividend, divisor)=> dividend/divisor);
}

function multiply (...args){
    return args.reduce((initialVal,currentVal)=> initialVal *currentVal);
}


function operate(operator,...args){
    if (operator =="+"){
       return add(...args);
    } else if (operator=="-"){
        return subtract(...args);
    }else if (operator=="*"){
        return multiply(...args);
    }else if (operator=="/"){
        return divide(...args);
    }else return "ERROR";
}



