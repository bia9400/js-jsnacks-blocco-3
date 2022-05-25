const nameRandom = ["Biagio", "Peppe", "Domenico", "Alice", "Erica", "Settimio"]
const surnameRandom = ["Fossati", "Ferro", "Leica", "Lentini", "Borsellino", "Falcone"]
let userGenerator = document.querySelector(".button-generator")
let explainHtml = document.querySelector(".explain")
let ulHtml = document.querySelector(".li-container")
const emails = [];

userGenerator.addEventListener("click", function () {
    explainHtml.innerHTML = `I nomi sono stati prelevati fra i seguenti: [ ${nameRandom} ] <br>`;
    explainHtml.innerHTML += `I cognomi sono stati prelevati fra i seguenti: [ ${surnameRandom} ]`;
    ulHtml.innerHTML = ""


    for (let i = 0; i < 8; i++) {
        /* genero delle posizioni random per pescare dai miei array */
        let x = nameRandom[Math.round(Math.random() * 5)]
        let y = surnameRandom[Math.round(Math.random() * 5)]

        /* inserisco la stringa email nel array emails */
        emails[i] = x + " " + y

        /* rendo ogni email diversa  */
        for (let k = 0; k < emails.length; k++) {
            if (emails[i] === emails[k]) {
                emails.pop

            }
        }

        ulHtml.innerHTML += `<li>${emails[i]}</li>`
    }
    console.log(emails);

})


let controlButton = document.getElementById("control")
let controlHrml = document.querySelector(".generaNome")
let myName = document.getElementById("myName")

controlButton.addEventListener("click", function () {
    myName = myName.value;
    controlHrml.innerHTML = ``;
    for (let i = 0; i < emails.length; i++) {
        if (myName == emails[i]) {
            let x= `<h1>Sei stato invitato Alla festa</h1>`;
        }
        else {
           let y= `<h1>Non sei stato invitato</h1>`;
        }
    }
}
   
    
    
 
    
    )
