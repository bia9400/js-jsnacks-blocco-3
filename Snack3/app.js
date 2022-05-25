let i=0;
let somma =0;
do{
    let userNumber=parseInt(prompt("Inserisci un numero"))
    somma+=userNumber
    
    i++

}while(i<5)
console.log(somma);
const printHtml=document.querySelector(".text-center");

printHtml.innerHTML=`<h1>La somma è ${somma} </h1>`