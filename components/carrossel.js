export function Carrossel(){
  const mascara1 = document.querySelector(".mascara1");
  const mascara2 = document.querySelector(".mascara2");
  const mascara3 = document.querySelector(".mascara3");

  if(mascara1.classList.contains("ativo")){
    mascara1.classList.remove("ativo");
    mascara2.classList.add("ativo");
  } else if(mascara2.classList.contains("ativo")){
    mascara2.classList.remove("ativo");
    mascara3.classList.add("ativo");
  } else {
    mascara3.classList.remove("ativo");
    mascara1.classList.add("ativo");

  }
  
}


