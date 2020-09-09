const input = document.querySelector('input[name="question"]')
const button = document.querySelector('button')
input.addEventListener('change', function () {
  if (this.value !== '') button.disabled = false
  else button.disabled = true
})
input.addEventListener('input', function () {
  if (this.value !== '') button.disabled = false
  else button.disabled = true
})
button.addEventListener('click', function () {
  window.open(`https://brainly.com.br/app/ask?q=${encodeURI(input.value)}`)
})
