let myArray=[];
let somma =0;
do{
    let userNumber=parseInt(prompt("Inserisci un numero"))
    somma+=userNumber
    myArray.push(userNumber)
    

}while(somma<50)
console.log(myArray);