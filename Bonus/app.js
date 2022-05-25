const arrayElements = document.getElementById("floatingInput")
const arrayElements2 = document.getElementById("floatingInput-2")
const arrayGenerator = document.getElementById("array-generator")
const arrayGenerator2 = document.getElementById("array-generator-2")
let newArray = [];
let lunghezza1 = newArray.length
arrayGenerator.addEventListener("click", function () {
    let printHtml = document.querySelector(".peppino");
    let x = parseInt(arrayElements.value);
    printHtml.innerHTML = ""
    let stringArray = "";
    for (let i = 0; i < x; i++) {
        newArray[i] = Math.round(Math.random() * 100) + 1;
        stringArray += ` ${newArray[i]}`



    }

    printHtml.innerHTML += `<h6>Il primmo vettore generato è: [ ${stringArray} ] </h6>`
})

let newArray2 = [];
let lunghezza2 = newArray2.length
arrayGenerator2.addEventListener("click", function () {
    let printHtml2 = document.querySelector(".peppino2");
    let y = parseInt(arrayElements2.value);
    printHtml2.innerHTML = ""
    let newstringArray = "";
    for (let i = 0; i < y; i++) {
        newArray2[i] = Math.round(Math.random() * 100) + 1;
        newstringArray += ` ${newArray2[i]}`



    }

    printHtml2.innerHTML += `<h6>Il secondo vettore generato è: [ ${newstringArray} ] </h6>`
})



let mainButton = document.querySelector(".mainPrintButton");
mainButton.addEventListener("click", function () {
    let lunghezza1 = newArray.length
    let lunghezza2 = newArray2.length
    let mainPrint = document.querySelector(".mainPrint")
    if (lunghezza1 == lunghezza2) {
        mainPrint.innerHTML += "I due vettori sono uguali"

    }
    else if (lunghezza1 < lunghezza2) {
       let x= lunghezza2-lunghezza1;
       for(let i=0; i<x ;i++){
           newArray.push(Math.round(Math.random() * 100) + 1)
       }
       mainPrint.innerHTML += "Il primo vettore, sistemato diviene [ "+newArray+" ]"
    }
    else  {
        let x= lunghezza1-lunghezza2;
       for(let i=0; i<x ;i++){
           newArray2.push(Math.round(Math.random() * 100) + 1)
           
       }
       mainPrint.innerHTML += "Il secondo vettore, sistemato diviene [ "+newArray2+" ]"
    }
})
