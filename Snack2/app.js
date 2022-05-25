/* Genero delle email casuali */
const nameRandom=["Biagio","Peppe","Domenico","Alice","Erica","Settimio"]
const surnameRandom=["Fossati","Ferro","Leica","Lentini","Borsellino","Falcone"]
let userGenerator=document.querySelector(".button-generator")
let explainHtml=document.querySelector(".explain")
let ulHtml=document.querySelector(".li-container")
const emails=[];
userGenerator.addEventListener("click", function(){
explainHtml.innerHTML=`I nomi sono stati prelevati fra i seguenti: [ ${nameRandom} ] <br>`;
explainHtml.innerHTML +=`I cognomi sono stati prelevati fra i seguenti: [ ${surnameRandom} ]`;
ulHtml.innerHTML= ""


for(let i = 0 ; i < 8; i++ ){
    /* genero delle posizioni random per pescare dai miei array */
    let x=nameRandom[Math.round(Math.random()*5)]
    let y=surnameRandom[Math.round(Math.random()*5)]
    
    /* inserisco la stringa email nel array emails */
    emails[i]= x+" "+y
   
    /* rendo ogni email diversa  */
    let k=0;
        if(emails[i]===emails[i-k]){
            emails.pop()
            i--
        }
    

    ulHtml.innerHTML+=`<li>${emails[i]}</li>`
}
console.log(emails);

})










