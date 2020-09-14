const input = document.querySelector('input[name="question"]')
const buttons = {
  brainly: document.querySelector('button#brainly'),
  google: document.querySelector('button#google')
}

buttons.brainly.addEventListener('click', function () {
  window.open(`https://brainly.com.br/app/ask?q=${encodeURI(input.value)}`)
})
buttons.google.addEventListener('click', function () {
  window.open(`https://google.com/search?q=${encodeURI(input.value)}`)
})

document.querySelector('form').addEventListener('submit', e => e.preventDefault())
