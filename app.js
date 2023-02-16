const display_para = document.querySelector(".num_display");
const numbers = document.querySelectorAll(".numbers");
const symbol = document.querySelectorAll(".symbols")
const reset_btn = document.querySelector("#clear");
const para = document.createElement('p');
const all_keys = document.querySelectorAll("key");


let operand1= '';
let operand2='';
console.log(operand2);
let operator = "";
let initialVal;
let keyType = "";
let decimalStatus;



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
    keyType = "numbers";
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
    if (keyType !== "operator" || (keyType.dataset=="numbers" && keyType.dataset =="decimal")){
        
        keyType = "operator";
        if (initialVal == operator || e.target.innerText ==="="){
            clear();
            run();
        }    
        console.log(e.target.innerText);
        operator = e.target.innerText;

        if (e.target.innerText === "="){
            keyType = "";
            para.innerText += " ";
        }else{
            para.innerText += " " + ` ${e.target.innerText}  `;
        }
    display_para.appendChild(para);
          }
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



