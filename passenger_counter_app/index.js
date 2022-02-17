let historyEl = document.getElementById("history-el")
let clearEl = document.getElementById("clear-btn")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function save() {
    countStr = count + " - "
    historyEl.textContent += countStr
    count = 0 
    countEl.textContent = count
}

clearEl.addEventListener('click', clear)

function clear() {
    historyEl.textContent = "Previous entires: "
    count = 0
}
