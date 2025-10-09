let form = document.querySelector(".login-form");
let inputs = document.querySelectorAll(".login-form-input");
let labels = document.querySelectorAll(".login-form-label");
// labels.forEach(label =>{
//     label.onclick = () =>{ 
//         label.style.display = "none";
//         let inputName = label.htmlFor
//         let input = document.querySelector(`input[name=${inputName}]`)
//         input.classList.toggle("focus")
//         InputClicked(input)
//      }
// })

let isInputClicked = false;
inputs.forEach(input => {
    input.onmouseover = () => {
        InputOnHover(input);
    }
    input.onfocus = () => {
        InputClicked(input);
    }
    input.onblur = () => {
        isInputClicked = false
        input.classList.toggle("active")

        console.log("odkliknięto")

    }
})
function InputClicked(clickedInput) {
    if (isInputClicked) return;
    isInputClicked = true
    console.log("kliknięto")
    let inputBorder = document.createElement("span")
    clickedInput.appendChild(inputBorder)
    setTimeout(() => {
        inputBorder.classList.add("input-border")
    })
}



function InputOnHover(hoveredInput) {
    let hoveredLabel = document.querySelector(`.login-form-label[for=${hoveredInput.name}]`)
    console.log(hoveredLabel)
}
