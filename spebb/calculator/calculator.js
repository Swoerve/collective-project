let textBox = document.getElementById("inputBox")

let before = 0
let after = 0

let result = 0
console.log("Test")
console.log(textBox)

function calcInput(element) {
    let num = Number(element.innerText)

    textBox.value += num
}

function calcOperator(element) {
    let operator = element.innerText

    if (operator === "+") {
        before += Number(textBox.value)
        textBox.value = ""
    }
    if (operator === "=") {
        after += Number(textBox.value)
        result = before + after
        textBox.value = result
        before = 0
        after = 0
        result = 0
    }
}
