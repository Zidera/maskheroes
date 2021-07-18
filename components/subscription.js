export const Cadastro = document.querySelector(".principal__form-botao").
addEventListener("click", 
function(event){
  event.preventDefault()
  let inputNome = document.querySelector('[data-form-nome]');
  let nome = inputNome.value
  let inputEmail = document.querySelector('[data-form-email]');
  let email = inputEmail.value
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

  const dados = {
    nome,
    email
  }

  const cadastrosAtualizados = [... cadastros,dados]

   localStorage.setItem('cadastros', JSON.stringify(cadastrosAtualizados));
   
  inputNome.value = " ";
  inputEmail.value = " ";

});
