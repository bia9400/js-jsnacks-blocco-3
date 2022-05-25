const numeroUtente=parseInt(prompt("Quanti array vuoi generare?"))

let arrays=[];
let i=0;
while( i<numeroUtente){
let array=[];
    for(let k=0;k<10;k++){
        array[k]=Math.round(Math.random()*100)+1
       
    }
    arrays[i]=array
    console.log(array);
    i++
}

console.log(arrays);
