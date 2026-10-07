console.log("hello")
function rgbcolor() {
let r=Math.floor(Math.random()*256) ;
let g=Math.floor(Math.random()*256) ;
let b=Math.floor(Math.random()*256) ;
return `rgb(${r}, ${g},${b})`;
  
}
const boxes=document.querySelectorAll('.box') ;
boxes.forEach(box=>{ box.style.backgroundColor=rgbcolor() }) ;




