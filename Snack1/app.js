let inputsNumber=document.getElementById("inputNumber");


let printHtml= document.querySelector(".text-center")
let button=document.getElementById("bottone")


button.addEventListener("click", function(){
    let x =parseInt(inputsNumber.value);
 if(x%2 ==0){
    printHtml.innerHTML=`<h1>Il tuo numero è pari: ${x} </h1>`
}
else{
    printHtml.innerHTML=`<h1>Il tuo numero, ${x}, è dispari per cui stampiamo il successivo: ${x+1}  </h1>`
}
   
})

/* let inputsNumber=document.getElementById("inputNumber")
let printHtml= document.querySelector(".text-center")
let button=document.getElementById("bottone")


let array=[];
let numeroUtente;
let i=0;

 do{
 numeroUtente=prompt("Inserisci un numero")
 let x= parseInt(numeroUtente)
if(isNaN(x)){
    alert("nserisci Un valore valido")

    i--
}
 else if(x%2!==0){
 array.push(numeroUtente)}
 else{
     i--
 }
 i++


 }while(i<6)
 console.log(array); */