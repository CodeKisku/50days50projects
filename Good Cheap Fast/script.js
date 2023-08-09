const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => addEventListener('change', (e) => selectTwo(e.target)))

function selectTwo(clicked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clicked) fast.checked = false;
    if (cheap === clicked) good.checked = false;
    if (fast === clicked) cheap.checked = false;
  }
}