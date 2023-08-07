const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const pContainer = document.getElementById('projects-container')

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

function addProjects() {
  fetch("projects.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let project of data) {
        const title = project.projectName
        const imageName = title.split(" ").join("")
        const path = title.split(" ").join("%20")
        const url = `https://github.com/CodeKisku/50days50projects/tree/master/${path}`
        var div = document.createElement("div");
        div.innerHTML = `
        <div class="project">
          <a href="${title}/index.html" target="_blank"><img src=img/${imageName}.${project.imgType} alt=""></a>
          <h3 class="project-title">${title}</h3>
          <div class="project-links">
            <a href="${url}"><i class="fa-brands fa-github"></i> Github Link</a>
            <a class="project-link" href="${title}/index.html"><i class="fa-solid fa-up-right-from-square"></i> Demo Link</a> 
          </div>
        </div>
        `;

        document.getElementById("projects-container").appendChild(div);
      }
    })
}

function bodyLoad() {
  addProjects()
}