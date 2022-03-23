let getTitle = document.querySelector('#titulo')
let getDescription = document.querySelector('#descricao')
let getImage = document.querySelector('#img')
let getCategory = document.querySelector('#categoria')
let getSalvar = document.querySelector('#salvar')
let getLimpar = document.querySelector('#limpar')
let getContainer = document.querySelector('.print')
let printsArray = []

function insert() {

  let postPendente = {
    title: getTitle.value,
    category: getCategory.options[getCategory.selectedIndex].value,
    description: getDescription.value,
    image: getImage.value
  }

  printsArray.push(postPendente)

  for (let post of printsArray) {
    printsArray = []
    getContainer.innerHTML += `
      <div class="item">
        <img src="${post.image}">
        <h3>${post.title}</h3>
        <h4>Estilo: ${post.category} <h4>
        <p>
          ${post.description}
        </p>
      </div>
    `
  }
}

function clear() {
  getTitle.value = ''
  getDescription.value = ''
  getImage.value = ''
  getCategory.selectedIndex = 0
}


getSalvar.addEventListener('click', function (event) {
  event.preventDefault()
  insert()
  clear()
})

getLimpar.addEventListener('click', function (event) {
  event.preventDefault()
  clear()
})