//codigo responsavel pela funcionalidade do dropdown menu em Produtos.html
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
   //deletar localStorage
  function deleteFormData() {
    
    localStorage.removeItem('formDataValues');
     
      const formDataContainer = document.getElementById('formData');
      formDataContainer.textContent = 'Produto não cadastrado.'; 
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Retrieve stored data from localStorage
    const formDataValues = JSON.parse(localStorage.getItem('formDataValues'));

    // Define the specific fields you want to display
    const fieldsToDisplay = [
       'NomeProduto', 'Categoria', 'ValorVenda', 'EstoqueDisponível',
    'ValorCusto', 'EstoqueMínimo', 'Fornecedor', 'NCM'
    ];

    const formDataContainer = document.getElementById('formData');

    if (formDataValues) {
        fieldsToDisplay.forEach(field => {
            const value = formDataValues[field];
            if (value !== undefined) {
                const p = document.createElement('p');
                p.textContent = value;
                formDataContainer.appendChild(p);
            }
        });
    } else {
        formDataContainer.textContent = 'Produto não cadastrado.';
    }
});