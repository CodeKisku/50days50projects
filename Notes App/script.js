const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML = `
  <div class="tools">
    <!-- This div conatins edit and delete buttons  -->
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <!-- This div will be used dynamically when the user is not editing text and will be set to display: none when user is not editing -->

  <!-- This is the area where user will input note as text -->
  <textarea class=${text ? "hidden" : ""}></textarea>
  `
  document.body.appendChild(note)

  const editBtn = document.querySelector('.edit')
  const deleteBtn = document.querySelector('.delete')
  const main = document.querySelector('.main')
  const textArea = document.querySelector('textarea')

  console.log(text)
  textArea.value = text
  main.innerHTML = marked(text)

  deleteBtn.addEventListener('click', () => {
    note.remove()
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)
  })
}
