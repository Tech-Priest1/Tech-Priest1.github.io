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
let file;

button.onclick = ()=>{
  input.click();
}

input.addEventListener("change", function(){
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); 
});



dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); 
  dropArea.classList.add("active");
  dragText.textContent = "Solte a imagem Para enviar arquivo";
});


dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Arraste & solte a imagem aqui para fazer upload";
});

dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
  
  file = event.dataTransfer.files[0];
  showFile(); 
});

function showFile(){
  let fileType = file.type; 
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; 
      let imgTag = `<img src="${fileURL}" alt="">`; 
      dropArea.innerHTML = imgTag; 
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("Isso não é um arquivo de Imagem");
    dropArea.classList.remove("active");
    dragText.textContent = "Solte a imagem Para enviar arquivo";
  }
}
