const buttonsAll = document.querySelectorAll("button")
let display = document.querySelector(".display")
operators = ["*", "/", "-", "+"]




buttonsAll.forEach((e) => {
    e.addEventListener("click", (e) => {
        let clicked = e.target.id
        console.log(clicked)
        let displayContent = display.innerHTML += clicked
        
        if (clicked === "=") {
            if (displayContent.includes("/")) {
                const splitStuff = displayContent.split(" /")
                console.log(splitStuff)
            }
            if (displayContent.includes("-")) {
                
            }
            if (displayContent.includes("+")) {
                
            }
            if (displayContent.includes("*")) {
                
            }
        }



        /*
        if (clicked === "CLEAR") {
            location.reload();
        }
        */
        
    })
})

const operate = (operator, num1, num2) => {

}














/*
function add(num1, num2) {
    return num1 + num2
}


function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}




function operators(numbers) {
    return numbers
}




console.log(operators(subtract(5,5)))


*/






