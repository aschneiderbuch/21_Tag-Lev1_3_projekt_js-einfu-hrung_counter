console.log("test klappts")


/*      Frage


auf Buttons drücken
        html inhalt wird in    let eingabe geschrieben

        
dann wird was dazu gerechnet
oder was weg gerechnet
oder was multipliziert
                                function rechnen 


dann wird es Angezeigt
                                let output 
                                wird mit innerHTML angezeigt

mann kann auch alles auf 0 Setzen


*/

let inhalt = 0;
let ergebniss = 0;

let output = document.getElementById("output");

let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let button5 = document.getElementById("button5")
let button6 = document.getElementById("button6")
let button7 = document.getElementById("button7")
let button8 = document.getElementById("button8")





button1.addEventListener("click", rechnen1); // + 
button2.addEventListener("click", rechnen2); // - 
button3.addEventListener("click", rechnen3); // +
button4.addEventListener("click", rechnen4); // -
button5.addEventListener("click", rechnen5); // +
button6.addEventListener("click", rechnen6); // -
/* button7.addEventListener("click", rechnen7); // Reset */
button8.addEventListener("click", rechnen8); // mal 2



function rechnen1(){

 ergebniss += ((button1.innerHTML)*1)

console.log( inhalt)
ergebniss = ergebniss
console.log(ergebniss)
output.innerHTML = (ergebniss )
}


function rechnen2(){

    ergebniss += ((button2.innerHTML)*1)
   
   console.log( inhalt)
   ergebniss = ergebniss
   console.log(ergebniss)
   output.innerHTML = ( " Ergebniss = " + ergebniss )
   }

function rechnen3(){

    ergebniss += ((button3.innerHTML)*1)
   
   ergebniss = ergebniss
   console.log(ergebniss)
   output.innerHTML = ( " Ergebniss = " + ergebniss )
   }

   function rechnen4(){

    ergebniss += ((button4.innerHTML)*1)
   
   ergebniss = ergebniss
   console.log(ergebniss)
   output.innerHTML = ( " Ergebniss = " + ergebniss )
   }

   function rechnen5(){

    ergebniss += ((button5.innerHTML)*1)
   
   ergebniss = ergebniss
   console.log(ergebniss)
   output.innerHTML = ( " Ergebniss = " + ergebniss )
   }

   function rechnen6(){

    ergebniss += ((button6.innerHTML)*1)
   
   ergebniss = ergebniss
   console.log(ergebniss)
   output.innerHTML = ( " Ergebniss = " + ergebniss )
   }

   function rechnen8(){

    ergebniss *= ((button8.innerHTML)*1)
    
   ergebniss = ergebniss
   console.log(ergebniss)
   output.innerHTML = ( ergebniss )
   }