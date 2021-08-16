"use restrict"
//modo oscuro funciona
const boton = document.getElementById('botonModo');
const textInfo = document.getElementById('textInfo');
const body = document.querySelector('body');
boton.addEventListener("click",()=>{
    body.classList.toggle("dark-mood");
    body.classList.toggle("ligth-mood");
    if(textInfo.textContent == "Modo Claro"){
      textInfo.textContent = "Modo Oscuro";
    }else{
      textInfo.textContent = "Modo Claro";
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
    //-----------------------boton para cerrar el panel---funciona----
    const botonCruz = document.querySelector("#botonCerrar");

    //cuando hago click en boton de cerrar se cierra el panel de aside
    //agrega la clase ocultar
    botonCruz.addEventListener("click", ()=>{
        aside.classList.add("ocultar");
    } )
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

    //-------------cambio del color del fondo  funciona
const color = document.getElementById("mezclador");//llamo al input de color
const spanColorImg = document.getElementById("text-color-img") //llamo al span nombre del color

 color.addEventListener ("input",() => {
  imgMeme.style.backgroundColor = color.value;//cuando necesito escribir texto y mezclarlo con mi variable
  spanColorImg.textContent = color.value
})


//Select de Efectos de Imagen---------funciona 
const blendMode = document.getElementById("blend-mode-select");

blendMode.addEventListener("input", ()=> {
    imgMeme.style.backgroundBlendMode = blendMode.value;
});


//*/---------------------Filtros--funciona---------------------------
 const inputFilter = document.getElementById("imgUrl");
 

    //sliders
    const brightness = document.getElementById("brightness-slider");
    const opacity = document.getElementById("opacity-slider");
    const contrast = document.getElementById("contrast-slider");
    const blur = document.getElementById("blur-slider");
    const grayscale = document.getElementById("grayscale-slider");
    const sepia = document.getElementById("sepia-slider");
    const hue = document.getElementById("hue-slider");
    const saturation = document.getElementById("saturacion-slider");
    const invert = document.getElementById ("negativo-slider");
  
   
   const updateFilter = () => {
      imgMeme.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturation.value}%) invert(${invert.value})` ;
    }

    brightness.addEventListener("change",updateFilter);

    opacity.addEventListener("change",updateFilter);

    contrast.addEventListener("change",updateFilter);

    blur.addEventListener("change",updateFilter);

    grayscale.addEventListener("change",updateFilter);

    sepia.addEventListener("change",updateFilter);

    hue.addEventListener("change",updateFilter);

    saturation.addEventListener("change",updateFilter);

    invert.addEventListener("change",updateFilter);

/* 
//---------reestablecer filtros-----revisado, no funciona me desabilita el resto de las funciones-----------
const actualizarFiltros = document.getElementById("reestablecerFiltros")
const actualizarFiltros = (click, () =>{
  inputFilter.style.filter = brightness.value="1";
                              opacity.value="1";
                              contrast.value="100";
                              blur.value="1";
                              grayscale.value="0";
                              sepia.value="0";
                              hue.value="0";
                              saturation.value="100";
                              invert.value="0";
                              inputFilter();
});

*/
//--------------Funciones del panel de texto----------------------------------------------------------------------------------------


//-------escribir texto---funciona---------
const textoArriba = document.getElementById("topText"); //llamo  a los inputs superior e inferior
const textoAbajo = document.getElementById("bottomText");
const textoSuperior = document.getElementById("textoSuperior"); //aca llamo a los parrafos superior e inferior
const textoInferior = document.getElementById("textoInferior");

  textoArriba.addEventListener("input", ()=>{
    textoSuperior.innerText =textoArriba.value;
  });

  textoAbajo.addEventListener("input", ()=>{
    textoInferior.innerText = textoAbajo.value;
  });

//-----------check box con o sin texto----funciona----------------------
/**/const cajaTopText = document.getElementById("cajaTopText"); //llamo a los divs
const cajaBottomText = document.getElementById("cajaBottomText");
const checkboxSuperior = document.getElementById("checkSuperior"); //llamo a los checkboxs
const checkboxInferior = document.getElementById("checkInferior");

checkboxSuperior.addEventListener ("click", ()=>{
  if (checkboxSuperior.checked) {
    cajaTopText.classList.add("ocultar")
  }
  else{
    cajaTopText.classList.remove("ocultar")
  }
})
  

checkboxInferior.addEventListener ("click", ()=>{
  if (checkboxInferior.checked) {
    cajaBottomText.classList.add("ocultar")
  }
  else{
    cajaBottomText.classList.remove("ocultar")
  }
})


//-------------cambio de tamaño de fuente funciona------------------------------
const fuenteSize = document.getElementById("text-size-input");

fuenteSize.addEventListener("input", () =>{
    const selectTamanioFuente = fuenteSize.value;
    textoSuperior.style.fontSize = `${selectTamanioFuente}px`;
    textoInferior.style.fontSize = `${selectTamanioFuente}px`;
});
//--------CAMBIO TIPOGRAFIA---funciona-----
//select de las opciones
const selectTipografias = document.getElementById("text-font-select");

selectTipografias.addEventListener("input", () => {
    textoSuperior.style.fontFamily = selectTipografias.value;
    textoInferior.style.fontFamily = selectTipografias.value;
}
);
//-----------alineación de texto---funciona--------
const textoIzquierda = document.getElementById("text-left-align-button"); //llamo a los botones
const textoCentrado = document.getElementById("text-center-align-button");
const textoDerecha = document.getElementById("text-right-align-button");
 

textoIzquierda.addEventListener ("click", ()=>{
  textoSuperior.classList.add("alineacionIzquierda")
  textoInferior.classList.add("alineacionIzquierda")
  
})

textoCentrado.addEventListener ("click", ()=>{
  textoSuperior.classList.add("alineacionCentro")
  textoInferior.classList.add("alineacionCentro")
  
})


textoDerecha.addEventListener ("click", ()=>{
  textoSuperior.classList.add("alineacionDerecha")
  textoInferior.classList.add("alineacionDerecha")
  
})
/**/
//-------------color letra-funciona-----------

const colorTexto = document.getElementById("text-color-input");
const referenciaColorTexto = document.getElementById("text-color");

colorTexto.addEventListener("input",()=>{
    textoSuperior.style.color = colorTexto.value; //por que este no se escribe con llaves
    textoInferior.style.color = colorTexto.value;
    referenciaColorTexto.textContent = colorTexto.value; //actualiza referencia color del texto en el span
});

//-------------color fondo de texto---funciona---------
const colorFondo = document.getElementById("text-background-color-input");//input color
const referenciaColorFondo = document.getElementById("text-background-color"); //span con nombre del color

colorFondo.addEventListener("input",()=>{
    cajaTopText.style.backgroundColor = `${colorFondo.value}`;
    cajaBottomText.style.backgroundColor = `${colorFondo.value}`;
    referenciaColorFondo.textContent = colorFondo.value;//actualiza referencia color de fondo en el span
});

//---------check box fondo transparente--- no funciona, probé tres formas distintas-----------
const fondoTransparente = document.getElementById("text-no-background-checkbox");
/*
fondoTransparente.addEventListener("input",()=>{
    cajaTopText.style = `background-color: transparent;`
   cajaBottomText.style = `background-color: transparent;`

});
fondoTransparente.addEventListener("click", ()=>{
  cajaTopText.classList.add("fondoTransparente")
 cajaBottomText.classList.add("fondoTransparente")

});
*/
checkboxSuperior.addEventListener ("input", ()=>{
  if (checkboxSuperior.checked) {
    cajaTopText.classList.add("fondoTransparente")
    cajaBottomText.classList.add("fondoTransparente")
  }
  else{
    cajaTopText.classList.remove("fondoTransparente")
    cajaBottomText.classList.add("fondoTransparente")
  }
})

// ------------contorno-------revisar-lo pone pero solo una vez---------------

const ninguno = document.getElementById("no-outline-button");
const claro = document.getElementById("light-outline-button");
const oscuro = document.getElementById("dark-outline-button");

ninguno.addEventListener("click", ()=>{
    textoSuperior.classList.add("sinContorno");
    textoInferior.classList.add("sinContorno");
});

claro.addEventListener("click", ()=>{
    textoSuperior.classList.add("contornoClaro");
    textoInferior.classList.add("contornoClaro");
});

oscuro.addEventListener("click", ()=>{
    textoSuperior.classList.add("contornoOscuro");
    textoInferior.classList.add("contornoOscuro");
});


//---------------espaciado----funciona----------------
const espaciado = document.getElementById("padding-input");
espaciado.addEventListener ("input", ()=>{
    textoSuperior.style.padding = `${espaciado.value}px`;
    textoInferior.style.padding = `${espaciado.value}px`;
}
);
//----------------interlineado-----no funciona----------------

const interlineado = document.getElementById("line-height-input");
interlineado.addEventListener("input", ()=>{
    textoSuperior.style.leneHeight = interlineado.value;
    textoInferior.style.leneHeight = interlineado.value;
});

//------------boton de descarga----no entiendo no funciona-------------------
/*const botonDescarga = document.querySelector(".descargar");
const recuadroMeme = document.querySelector(".container");

botonDescarga.addEventListener("click",()=>{
    domtoimage.toBlob(document.querySelector(".recuadroMeme")).then(function (blob){
        window.saveAs(blob,"memazo.png");
  }}
  */