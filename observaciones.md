# Observaciones

Flor, felicitaciones por tu entrega. Estoy contenta recorriendo tu trabajo, ya que se nota que te esforzaste muchisimo y el resultado es una web funcional, muy linda y facil de recorrer, con codigo de calidad. 

Se que no llegaste con todo y hay cositas que quedaron a medias. No se si es falta de tiempo o que algunas cosas no quedaron claras - si es el segundo caso, me escribis? Feliz de asistirte con lo que no haya quedado claro. 

Lo que no me deja satisfecha es notar que, si bien hay una marcada mejora con respecto al portfolio, hay algunas indicaciones que te hice allí que se repiten aquí. Te aseguro que cada comentario que te marco es importante, son cosas que se te evaluarán en entrevitas y que tus líderes van a comentarte en el trabajo. Es importante que vayas reconociendo estas cosas en tu código para dejar de hacerlas cuanto antes. 


## Estructura correcta de documento HTML

Mejoraste muchisimo en el sentido de que ya no hay tantos divs innecesarios, y noto mucho mejor tu HTML en general. 

Nuevamente no me modificaste el "title" del HTML. Es importante, por SEO y por Accesibilidad, que agregues un titulo. Ademas se ve mas lindo :) 

Nuevamente usas la etiqueta `strong` en HTML. Esto es un error. La separación de responsabilidades entre HTML y CSS es vital: no damos estilo en HTML, por lo que usar esa etiqueta es incorrecto. 

Nuevamente dejas muchas lineas largas en HTML que se hacen muy dificiles de leer. 

## Respeta el diseño dado

Hay ocasiones en donde te alejás del diseño. No me refiero a estilar los inputs, se que eso es dificil, pero mas bien a las distancias entre las cosas por ejemplo, que ya te habia remarcado en el trabajo anterior. Estos parecen detalles, pero son muy importantes y un equipo de diseño en tu trabajo va a velar para que cumplas las distancias especificadas en sus modelos. Por ejemplo tu aside tiene un justify-content space between que hace que el contenido se vaya muuuy para abajo... tan para abajo que no puedo hacer click en el boton "restablecer filtros"!. 

## Respeta el funcionamiento

Hay varias cosas que no funcionan y que dejaste comentadas en tu archivo de CSS. Si necesitas que las veamos juntas, escribime!

## Responsive funciona correctamente

Entre 500 y 700px tu web se ve muy apretujada. La solucion mas sencilla seria modificar tus media queries para que arranquen en 700. 

## Buena estructura de proyecto

Cumplido, aunque falta un favicon. 

## Código bien indentado

Nuevamente tenes problemas con el tabulado en HTML. Recordá que VSCode te simplifica mucho este trabajo si haces click derecho + "format document", aunque por supuesto, es mejor si te acostumbras vos a irlo haciendo prolijo. 

## Comentarios que permiten mejorar la legibilidad del código

Cumplido.

## Uso correcto de etiquetas semánticas

 Algunos comentarios. 

## Buenos nombres de clases

Marcada mejora con respecto al TP1, aunque ahora cometes el error de escribir los nombres de clases en camelCase, como en "inputDivs". En HTML siempre separamos con guiones, eso incluye a las clases y a los ids. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

No hay una mejora respecto al TP1 en el sentido de que seguis utilizando muchisimas ordenes de CSS que no necesitas, como flex-direction row, y que sigo notando desorden, estilos innecesarios y confusos, y en general la impresión de que no estás 100% segura de lo que estás haciendo con CSS. Tomate el trabajo de recorrer tu codigo examinando criticamente tu CSS: mejor si empezas por el portfolio que es mas sencillo. Trata de ir sacando las cosas que te hagan ruido, o ir pensando si realmente las necesitas. Te vas a sorprender de la cantidad de CSS que podes sacar sin consecuencias. 


## Funciones pequeñas

Cumplido. 

## Accesibilidad

Faltan algunas aria label, y no me parece correcto usar h3 en lugar de algunas label, pero en general está cumplido. 

## Commits con mensajes adecuados

Hay poquitos commits, espero al menos unos 20 en un trabajo de estas caracteristicas. "maquetado y funcionalidades" no me dice nada por ejemplo, espero un commit para el aside de texto, un commit para los filtros en js, etc. Cada funcionalidad nueva debe ser un commit. 

# Nota final: 8

