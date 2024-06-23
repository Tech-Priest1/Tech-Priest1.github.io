//codigo responsavel por monstrar e esconder os forms em cadastroProdutos.html
document.addEventListener('DOMContentLoaded', function() {
  function toggleDisplay(clickElementId, elementsToHide, elementsToShow) {

      document.getElementById(clickElementId).addEventListener('click', function(event) {
          event.preventDefault(); 
          elementsToHide.forEach(elementId => {
              document.getElementById(elementId).classList.add('esconder');
          });
          elementsToShow.forEach(elementId => {
              document.getElementById(elementId).classList.remove('esconder');
          });
      });
  }
  toggleDisplay('Form1', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['informaçõesGerais']);
  toggleDisplay('Form2', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['valores']);
  toggleDisplay('Form3', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['Estoque']);
  toggleDisplay('Form4', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['Fotos']);
  toggleDisplay('Form5', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['PesoDimencoes']);
  toggleDisplay('Form6', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['DadosFiscais']);
});


//codigo responsavel pela funcionalidade do form imagens em cadastroProdutos.html
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //variavel global 

button.onclick = ()=>{
  input.click(); //se o botão foi clickado input também sera clickado
}

input.addEventListener("change", function(){
  //recebendo o arquivo do usuário, files[0] significa que só receberemos o primeiro arquivo
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //chamando a função
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //prevenindo default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Solte a imagem Para enviar arquivo";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Arraste & solte a imagem aqui para fazer upload";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //prevenindo default behaviour
  //selecionando o arquivo do usuário [0] significa que se tiver varios arquivos só receberemos o primeiro
  file = event.dataTransfer.files[0];
  showFile(); //chamando a função
});

function showFile(){
  let fileType = file.type; //pegando o tipo de arquivo selecionado
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //um array com os formatos de imagem validos
  if(validExtensions.includes(fileType)){ //se o arquivo do usuário é uma imagem
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; 
      let imgTag = `<img src="${fileURL}" alt="">`; //criando uma img tag e passando a source da imagem para um src attribute
      dropArea.innerHTML = imgTag; //adicionando a img tag criada dentro de dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("Isso não é um arquivo de Imagem");
    dropArea.classList.remove("active");
    dragText.textContent = "Solte a imagem Para enviar arquivo";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mostrarMais').addEventListener('click', function(event) {
      event.preventDefault();
      var dropdownMenu = document.getElementById('dropdownMenu');
      dropdownMenu.classList.toggle('esconder');
  });
});