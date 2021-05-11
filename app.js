"use restrict"
//modo oscuro
const boton = document.getElementById('botonModo');
const textInfo = document.getElementById('textInfo');
const body = document.querySelector('body');
boton.addEventListener("click",()=>{
    body.classList.toggle("dark-mood");
    body.classList.toggle("ligth-mood");
    if(textInfo.textContent == "Modo Oscuro"){
      textInfo.textContent = "Modo Claro";
    }else{
      textInfo.textContent = "Modo Oscuro";
    }
})
//------------------------cambio panel---no funciona-------------------------------------------
const botonImg = document.querySelector('.imagen')
   const botonTexto = document.getElementById('.texto')
   const aside = document.querySelector('aside')
   const panelImg = document.querySelector('.section-aside-img')
   const panelText = document.querySelector('.section-aside-text')


   botonImg.addEventListener("click", ()=>{
   aside.classList.remove("ocultar");
   panelText.classList.add("ocultar");
   panelImg.classList.remove("ocultar")
   });

   botonTexto.addEventListener("click", ()=>{
   aside.classList.remove("ocultar");
    panelImg.classList.add("ocultar");
    panelText.classList.remove("ocultar")
    });

    //---------------------------------------funciones panel Imagen-----------------------------------------------------

    //-------------cambio del color del fondo
let color = document.getElementById("mezclador");
 const cambiarcolor = () => {
   document.getElementById("imagenMeme").style.backgroundColor =`${color.value}`;
}

color.addEventListener('input', cambiarcolor)


//-------------cambio de tamaño de fuente no funciona------------------------------
const tamanioFuente = document.getElementById("text-size-input");
const topTitle = document.querySelector(".topText");
const bottomTitle = document.querySelector(".bottomText")

tamanioFuente.addEventListener("input", () =>{
    const selectTamanioFuente = tamanioFuente.value;
    topTitle.style.fontSize = `${selectTamanioFuente}px`;
    bottomTitle.style.fontSize = `${selectTamanioFuente}px`;
});


//---------------------Filtros-----------------------------
const input = document.getElementById("inputImg");
    const img = document.getElementById("img");

    //sliders
    const brightness = document.getElementById("brightness-slider");
    const opacity = document.getElementById("opacity-slider");
    const contrast = document.getElementById("contrast-slider");
    const blur = document.getElementById("blur-slider");

    img.src = "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560";
  
    input.addEventListener("change",()=>{
      img.src = input.value;
    });

    const updateFilter = () => {
      img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px)`;
    }

    brightness.addEventListener("change",updateFilter);

    opacity.addEventListener("change",updateFilter);

    contrast.addEventListener("change",updateFilter);

    blur.addEventListener("change",updateFilter)


//---------reestablecer filtros
const actualizarFiltros = ()=>{
  divUrl.style.filter = `brightness(${filtroBrillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaDeGrises.value}%) sepia(${sepia.value}) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
}


//------------boton de descarga
const botonDescarga = document.getElementById('boton-descarga');

botonDescarga.addEventListener("click",()=>{
    domtoimage.toBlob(document.querySelector("#div-container-imagen")).then(function (blob) {
        window.saveAs(blob, "my-node.png");
      });
})
