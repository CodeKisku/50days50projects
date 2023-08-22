const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('rating')) {
    removeActive()
    e.target.classList.add('active')
    // console.log(e.target.childNodes[3].innerHTML)
    selectedRating = e.target.childNodes[3].innerHTML
  }
})

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}