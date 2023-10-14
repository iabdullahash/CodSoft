// Get elements
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');
const buttons = document.querySelectorAll('.buttons button');
const specialcharac = ["*","-","+","%","/","="]
let input = ''
let output = ''

const calculate = (val) => {
  if(val === '=' && input !== ''){
    try {
      output = eval(input.replace('%','/100'));
    } catch (error) {
      output = "Syntax Error";
    }
    display_output.innerHTML = output;
  } else if(val === "clear"){
    input = ''
    output = ''
    display_input.innerHTML = input;
    display_output.innerHTML = output;
  } else if (val === "backspace"){
    input = input.toString().slice(0,-1);
  } else {
    if(input === '' && specialcharac.includes(val)) return;

    input += val;
  }
  display_input.innerHTML = symbols(input);
 
}
buttons.forEach((button) => {

  button.addEventListener('click', e => calculate(e.target.dataset.value))
})


function symbols(input) {
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++) {
    if (input_array[i] == "*") {
      input_array[i] = ` <span class="operator">×</span> `;
    } else if (input_array[i] == "/") {
      input_array[i] = ` <span class="operator">÷</span> `;
    } else if (input_array[i] == "+") {
      input_array[i] = ` <span class="operator">+</span> `;
    } else if (input_array[i] == "-") {
      input_array[i] = ` <span class="operator">-</span> `;
    } else if (input_array[i] == "%") {
      input_array[i] = `<span class="percent">%</span>`;
    }
  }

  return input_array.join("");
}