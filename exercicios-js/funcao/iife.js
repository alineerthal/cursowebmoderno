// IIFE -> Immediately Invoked Function Expression
/*  
 * tente sempre fugir do escopo global
 * uma das formas de fugir do escopo global é com a função auto invocada, ou IIFE
 * 
*/

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()