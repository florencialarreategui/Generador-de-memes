"use restrict"
//modo oscuro funciona
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
//------------------------cambio panel---funciona----------------------------------------
const botonImg = document.querySelector('.imagen')
   const botonTexto = document.querySelector('.texto')
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
//---------------agregar imagen con url------funciona----------------
 // Obtengo el input del html
const inputImg = document.getElementById("imgUrl");
 // Obtengo la imagen del html
const  imgMeme = document.getElementById("imagenMeme");
 //Cuando el input cambia("change") 
 
inputImg.addEventListener("input", ()=>{
  const url = inputImg.value;
  imgMeme.style.backgroundImage = `url('${url}')`
})

    //-------------cambio del color del fondo no funciona
const color = document.getElementById("mezclador");//llamo al input de color
const spanColorImg = document.getElementById("text-color-img") //llamo al span nombre del color

 color.addEventListener = ("input",() => {
  imgMeme.style.backgroundColor =`${color.value}`;
  spanColorImg.textContent = `${color.value}`
})


//Select de Efectos de Imagen
const blendMode = document.getElementById("blend-mode-select");

blendMode.addEventListener("input", ()=> {
    imgMeme.style.backgroundBlendMode = blendMode.value;
});


/*
*/

/*
//---------------------Filtros-----------------------------
 const inputFilter = document.getElementById("imgUrl");
 const imgMemeImagen = document.getElementById("memeImg");

    //sliders
    const brightness = document.getElementById("brightness-slider");
    const opacity = document.getElementById("opacity-slider");
    const contrast = document.getElementById("contrast-slider");
    const blur = document.getElementById("blur-slider");
    const grayscale = document.getElementById("grayscale-slider");
    const sepia = document.getElementById("sepia-slider");
    const hue = document.getElementById("hue-slider");
    const saturacion = document.getElementById("saturacion-slider");
    const negativo = document.getElementById ("negativo-slider");
  
   
   const updateFilter = () => {
      imgMemeImagen.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue(${hue.value}) saturacion(${saturation.value}%) negativo(${invert.value})` ;
    }

    brightness.addEventListener("change",updateFilter);

    opacity.addEventListener("change",updateFilter);

    contrast.addEventListener("change",updateFilter);

    blur.addEventListener("change",updateFilter);

    grayscale.addEventListener("change",updateFilter);

    sepia.addEventListener("change",updateFilter);

    hue.addEventListener("change",updateFilter);

    saturacion.addEventListener("change",updateFilter);

    negativo.addEventListener("change",updateFilter);


//---------reestablecer filtros----------------
const actualizarFiltros = ()=>{
  input.style.filter = `brightness(${filtroBrillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaDeGrises.value}%) sepia(${sepia.value}) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
}


//--------------Funciones del panel de texto----------------------------------------------------------------------------------------


//-------escribir texto-no funciona-----------
const textoArriba = document.getElementById("topText"); //llamo  a los inputs superior e inferior
const textoAbajo = document.getElementById("bottonText");
const textoSuperior = document.getElementById("textoSuperior"); //aca llamo a los parrafos superior e inferior
const textoInferior = document.getElementById("textoInferior");

  textoArriba.addEventListener("input", ()=>{
    textoSuperior.innerText =textoArriba.value;
  });

  textoAbajo.addEventListener("input", ()=>{
    textoInferior.innerText = textoAbajo.value;
  });

//-----------check box con o sin texto--------------------------
const cajaTopText = document.getElementById("topText"); //llamo a los divs
const cajaBottomText = document.getElementById("bottomText")
const checkboxSuperior = document.getElementById("checkSuperior"); //llamo a los checkboxs
const checkboxInferior = document.getElementById("checkInferior");


checkboxSuperior.addEventListener ("click", ()=>{
  if (checkboxSuperior.checked) {
    cajaTopText.classList.add("ocultar")
  }
  else{
    cajaTopText.classList.remove("ocultar")
  }

checkboxInferior.addEventListener ("click", ()=>{
  if (checkboxInferior.checked) {
    cajaBottomText.classList.add("ocultar")
  }
  else{
    cajaBottomText.classList.remove("ocultar")
  }



//-------------cambio de tamaño de fuente no funciona------------------------------
const fuenteSize = document.getElementById("text-size-input");

fuenteSize.addEventListener("input", () =>{
    const selectTamanioFuente = fuenteSize.value;
    textoSuperior.style.fontSize = `${selectTamanioFuente}px`;//por que este se escribe entre llaves y con signopesos
    textoInferior.style.fontSize = `${selectTamanioFuente}px`;
});

//-----------alineación de texto-----------
const textoIzquierda = document.getElementById("text-left-align-button"); //llamo a los botones
const textoCentrado = document.getElementById("text-center-align-button");
const textoDerecha = document.getElementById("text-right-align-button");
 

textoIzquierda.addEventListener ("click", ()=>{
  textoSuperior.style = `text-aling: left;`
  textoInferior.style = `text-aling: left;`
  
})

textoCentrado.addEventListener ("click", ()=>{
  textoSuperior.style = `text-aling: center;`
  textoInferior.style = `text-aling: center;`
  
})

textoDerecha.addEventListener ("click", ()=>{
  textoSuperior.style = `text-aling: right;`
  textoInferior.style = `text-aling: right;`
  
})

//-------------color letra------------

const colorTexto = document.getElementById("text-color-input");
const referenciaColorTexto = document.querySelector("text-color");

colorTexto.addEventListener("input",()=>{
    textoSuperior.style.color = colorTexto.value; //por que este no se escribe con llaves
    textoInferior.style.color = colorTexto.value;
    referenciaColorTexto.textContent = colorTexto.value; //actualiza referencia color del texto en el span
});

//-------------color fondo de texto------------
const colorFondo = document.getElementById("text-background-color-input");
const referenciaColorFondo = document.getElementById("text-background-color");

colorFondo.addEventListener("input",()=>{
    cajaTopText.style.backgroundColor = colorFondo.value;
    cajaBottomText.style.backgroundColor = colorFondo.value;
    referenciaColorFondo.textContent = colorFondo.value;//actualiza referencia color de fondo en el span
});

//---------check box fondo transparente--------------
const fondoTransparente = document.getElementById("text-no-background-checkbox");

fondoTransparente.addEventListener("input",()=>{
    cajaTopText.style = `background-color: transparent;`
   cajaBottomText.style = `background-color: transparent;`
});

// ------------contorno-------revisar----------------

const ninguno = document.getElementById("no-outline-button");
const claro = document.getElementById("light-outline-button");
const oscuro = document.getElementById("dark-outline-button");

ninguno.addEventListener("click", ()=>{
    textoUsuarioTop.classList.add("sinContorno");
    textoUsuarioBottom.classList.add("sinContorno");
});

claro.addEventListener("click", ()=>{
    textoUsuarioTop.classList.add("contornoClaro");
    textoUsuarioBottom.classList.add("contornoClaro");
});

oscuro.addEventListener("click", ()=>{
    textoUsuarioTop.classList.add("contornoOscuro");
    textoUsuarioBottom.classList.add("contornoOscuro");
});


//---------------espaciado--------------------
const espaciado = document.getElementById("padding-input");
espaciado.addEventListener ("input", ()=>{
    textoSuperior.style.padding = `${espaciado.value}px`;
    textoInferior.style.padding = `${espaciado.value}px`;
}
);
//----------------interlineado---------------------

const interlineado = document.getElementById("line-height-input");
interlineado.addEventListener("input", ()=>{
    textoSuperior.style.leneHeight = interlineado.value;
    textoInferior.style.leneHeight = interlineado.value;
});

//------------boton de descarga----no entiendo-------------------
/*const botonDescarga = document.getElementById('boton-descarga');

botonDescarga.addEventListener("click",()=>{
    domtoimage.toBlob(document.querySelector("#div-container-imagen")).then(function (blob) {
        window.saveAs(blob, "my-node.png");
    }}*/
