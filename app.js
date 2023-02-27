const display_para = document.querySelector(".num_display");
const numbers = document.querySelectorAll(".numbers");
const symbol = document.querySelectorAll(".symbols")
const reset_btn = document.querySelector("#clear");
const para = document.createElement('p');
const all_keys = document.querySelectorAll("key");


let operand1= '';
let operand2='';
console.log(operand2);
let curr_operator = "";
let initialVal;
let keyType = "";
let decimalStatus = false;


//to fix : disabling entire number input when = is pressed.[done]
//rounding numbers
// add classes for design.
numbers.forEach((button)=> {
    button.addEventListener("click", function (e){
        if (keyType =="equal") {clear(); reset()};
        if (e.target.innerText ==="." && decimalStatus !==false){
            return;
        }
    if(curr_operator ===""){
        if (e.target.innerText=="."){
            decimalStatus =true;
        }
        operand1 += e.target.innerText;
        console.log(para.innerText += e.target.innerText); 
        display_para.appendChild(para);
        
    }else{
        
        if (e.target.innerText=="."){
            decimalStatus =true;
        }
        initialVal = curr_operator; 
        if (initialVal ==curr_operator){
            operand2 += e.target.innerText;
            console.log(para.innerText =para.innerText + e.target.innerText); 
            display_para.appendChild(para);    
        }
    }
    keyType = "numbers";
    

    // if (button.dataset.type == "decimal") decimalStatus = true;
    // console.log(decimalStatus);
});
});



function run (){
    operand1 =(operate(curr_operator,Number(operand1),Number(operand2))).toPrecision(2);
    para.innerText += operand1;
    display_para.appendChild(para);
    operand2 = "";
    
}

symbol.forEach((button)=> {
    
    button.addEventListener("click", function (e){
        // if (operand2 != "undefined"){
            //   operand1 = operate(operator,(operand1,operand2))
            //    operand2 = "undefined";
            // }
    if (keyType !== "operator" || (keyType.dataset=="numbers")){
        decimalStatus =false;
        keyType = "operator";
        if (initialVal == curr_operator || e.target.innerText ==="="){
            clear();
            run();
        }    
        console.log(e.target.innerText);
        curr_operator = e.target.innerText;

        if (e.target.innerText === "="){
            // keyType = "";
            keyType = "equal";
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
       decimalStatus = false;
  }   



reset_btn.addEventListener('click', ()=>{
    clear();
    reset();
    
});


function reset () {
    
operand1= '';
operand2='';
console.log(operand2);
curr_operator = "";
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