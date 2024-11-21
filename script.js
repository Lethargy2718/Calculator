let firstNum = "0"
let secondNum = "0"
let currentOp = null
let currentOpBtn = null

const output = document.querySelector(".output")
const equal = document.querySelector("#equal")
const AC = document.querySelector("#AC")
const DEL = document.querySelector("#DEL")
const point = document.querySelector("#point")
const percent = document.querySelector("#percent")

document.querySelectorAll(".num").forEach((element) => {
    element.addEventListener("click", () => {
        if (currentOp === null) {
            if (firstNum === "0") firstNum = ""
            firstNum += element.textContent
            output.textContent = firstNum
            console.log("adding to first num")
        }
        else {
            if (secondNum === "0") secondNum = ""
            secondNum += element.textContent
            output.textContent = secondNum
            console.log("adding to second num")
        }    
    })
})

document.querySelectorAll(".op").forEach((element) => {
    element.addEventListener("click", () => {
        if (currentOp) {
            evaluate(element)
        }
        else newBtn(element)
    })
})

equal.addEventListener("click", () => {
    evaluate()
})

AC.addEventListener("click", () => {
    firstNum = "0"
    secondNum = "0"
    currentOp = null
    currentOpBtn = null
    output.textContent = "0"
})

DEL.addEventListener("click", () => {
    if (!currentOp) {
        firstNum = firstNum.slice(0, -1) || "0";
        output.textContent = firstNum;
    } else {
        secondNum = secondNum.slice(0, -1) || "0";
        output.textContent = secondNum;
    }
})

point.addEventListener("click", () => {
    if (currentOp) {
        console.log("second");
        if (!secondNum.includes(".")) {
            secondNum += ".";
            output.textContent = secondNum;
        }
    } else if (!firstNum.includes(".")) {
        console.log("first");
        firstNum += ".";
        output.textContent = firstNum;
    }
});

percent.addEventListener("click", () => {
    if (currentOp) {
        secondNum = String(parseFloat(secondNum/100))
        output.textContent = secondNum
    }
    else {
        firstNum = String(parseFloat(firstNum/100))
        output.textContent = firstNum
    }
})

function evaluate(element = null) {
    if (secondNum) {  
        let first = parseFloat(firstNum)
        let second = parseFloat(secondNum)
        switch (currentOp) {
            case "+":
                firstNum = first + second
                break
            case "-":
                firstNum = first - second
                break
            case "x":
                firstNum = first * second
                break
            case "/":
                firstNum = first / second
                break
            case "^":
                firstNum = first ** second
                break
        }
        firstNum = String(firstNum)
        secondNum = "0"
        output.textContent = firstNum
    }

    if (currentOp) {
        currentOp = null
        currentOpBtn.classList.remove("active")
        currentOpBtn = null
    }
    
    if (element) newBtn(element)
}

function newBtn(element) {
    currentOp = element.textContent
    element.classList.add("active")
    if (currentOpBtn) currentOpBtn.classList.remove("active")
    currentOpBtn = element
}

