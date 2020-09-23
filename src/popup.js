const input = document.querySelector('input[name="question"]')
const btn = {
  brainly: document.querySelector('button#brainly'),
  google: document.querySelector('button#google')
}

btn.brainly.addEventListener('click', function () {
  if (confirm('Tem certeza?')) {
    window.open(`https://brainly.com.br/app/ask?q=${encodeURI(input.value)}`)
  }
})
btn.google.addEventListener('click', function () {
  if (confirm('Tem certeza?')) {
    window.open(`https://google.com/search?q=${encodeURI(input.value)}`)
  }
})

document.querySelector('form').addEventListener('submit', e => e.preventDefault())
