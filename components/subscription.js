export const Cadastro = document.querySelector(".principal__form-botao").
addEventListener("click", 
function(event){
  event.preventDefault()
  const nome = document.querySelector('[data-form-nome]').value;
  const email = document.querySelector('[data-form-email]').value;
  console.log(nome);
  console.log(email);
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

  const dados = {
    nome,
    email
  }

  const cadastrosAtualizados = [... cadastros,dados]

   localStorage.setItem('cadastros', JSON.stringify(cadastrosAtualizados));
   
  input.value = " ";

});
