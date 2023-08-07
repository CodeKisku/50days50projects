const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let text = 'Enter text below to make text animation like this'
let idx = 1
let speed = 300 / 3

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  if (idx > text.length) {
    idx = 1
  }

  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)



function sendText() {
  text = document.getElementById('print-text').value
  idx = 1
  speed = 300 / 1
  speedEl.value = "1"
}