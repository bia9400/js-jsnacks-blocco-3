const arrayElements = document.getElementById("floatingInput")
const arrayGenerator = document.getElementById("array-generator")
const arrayExtractor = document.getElementById("array-extractor")
let newArray = [];
arrayGenerator.addEventListener("click", function () {
let printHtml = document.querySelector(".peppino");
    let x = parseInt(arrayElements.value);
    printHtml.innerHTML =""
    let stringArray="";
    for (let i = 0; i < x; i++) {
        newArray[i] = Math.round(Math.random() * 100) + 1;
        stringArray +=` ${newArray[i]}`
        
        
        
    }
    
printHtml.innerHTML +=`<h6>Il vettore generato è: [ ${stringArray} ] </h6>` 
})

arrayExtractor.addEventListener("click",function(){
    let somma=0;
    let printHtml = document.querySelector(".peppino");
    
    
    for(let i=1; i<newArray.length; i=i+2){
        somma +=newArray[i]
    }
    printHtml.innerHTML +=`<h6>La somma delle posizioni di indice dispari è: [ ${somma} ] </h6>` 
    console.log(somma);
})
