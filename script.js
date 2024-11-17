let firstNum = null
let secondNum = null
let currentOp = null


document.querySelectorAll(".num").forEach((element) => {
    element.addEventListener("click", () => {
        alert(element.textContent)
    })
})

document.querySelectorAll(".op").forEach((element) => {
    element.addEventListener("click", () => {
        alert(element.textContent)
    })
})