function toggleMode() {
   const html = document.documentElement
   html.classList.toggle('light')

   // pegar a tag img
   const img = document.querySelector("#profile img")

   // substituir a imagem 
   if(html.classList.contains("light")) {
   // se tiver light mode, addicionar a imagem light
     img.setAttribute("src", "./assets/avatar-light.jpg")

   } else {
   //se tiver sem light mode, manter a imagem normal
   img.setAttribute("src", "./assets/4bbbd364cb95c5924aef94e7ad39e04c.jpg")
   }

}