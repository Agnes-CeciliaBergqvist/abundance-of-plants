//Program should calculate dropdown number with input field number
var list = [];


const enterNumber = document.getElementById('enter-number')
const dropDownMeny = document.getElementById('drop-down')
const addBtn = document.getElementById('addBtn')
const Result = document.getElementById('Result')


addBtn.onclick = () => {
    var result = enterNumber.valueAsNumber * Number(dropDownMeny.value);
    var li = document.createElement("li");
    li.innerText = result;

    var ul = document.querySelector(".ulList");
    ul.appendChild(li);
}


//Clearing function 
function clear() {
    location.reload()
}

var clearButton = document.querySelector("#clear")

clearButton.addEventListener("click", clear);