// declaration des variable
var btn;
var output;
var nombre;
var numberDeviner;
 
// sizer
  btn = document.getElementById("btn");
  sortie = document.getElementById("sortietext");
  nombre = Math.floor(Math.random () *100);

//   traitment
function play() {
    numberDeviner = document.getElementById("userinput").value;
    if (numberDeviner == nombre ){
        output.innerHTML = 'bravo'
    }else{
        if (NombreDeviner < nombre){
            output.innerHTML = "le nombre que vous avez choisir est plus petit"
        }
        else {
            output.innerHTML = "le nombre que vous avez choisir est plus grand"


        }



    }

} 

