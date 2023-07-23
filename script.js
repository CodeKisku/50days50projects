const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

const searchtype = () => {
  const searchbox = document.getElementById('input').value.toUpperCase();
  const projectItem = document.getElementById('projects-container');
  const project = document.querySelectorAll('.project')
  const pname = document.querySelectorAll('.project-title')

  for (var i = 0; i < pname.length; i++) {
    let match = project[i].querySelectorAll('.project-title')[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        project[i].style.display = "";
      } else {
        project[i].style.display = "none";
      }
    }

  }

}