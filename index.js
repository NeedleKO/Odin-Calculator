const buttonsAll = Array.from(document.querySelectorAll("button"));
let display = document.querySelector(".display");





buttonsAll.forEach(button => {
    button.addEventListener("click", (e) => {
        


        let clicked = e.target.innerText
        console.log(clicked)
        let displayContent = display.innerHTML += clicked
        switch(e.target.id) {
            case "CLEAR":
                display.innerText = "";
                break;
            case "DEL":
                display.innerText = display.innerText.slice(0, -1);
                break;
            }
            
        
        if (clicked === "=") {
            if (displayContent.includes("/")) {
                splitStuff = displayContent.split("/")
                result = parseFloat(splitStuff[0]) / parseFloat(splitStuff[1])
                display.innerText = result;
                console.log(result)
            }
            if (displayContent.includes("-")) {
                splitStuff = displayContent.split("-")
                result = parseFloat(splitStuff[0]) - parseFloat(splitStuff[1])
                display.innerText = parseFloat(result);
                console.log(result)
            }
            if (displayContent.includes("+")) {
                splitStuff = displayContent.split("+")
                result = parseFloat(splitStuff[0]) + parseFloat(splitStuff[1])
                display.innerText = result;
                console.log(result)
            }
            if (displayContent.includes("*")) {
                splitStuff = displayContent.split("*")
                result = parseFloat(splitStuff[0]) * parseFloat(splitStuff[1])
                display.innerText = result;
                console.log(result)
            }
        } 
              
    })
})















