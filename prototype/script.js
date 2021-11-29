        // Declaring variables 
        var randomNumber;
        var userInput;
        var message;
        // Enter : seize  
         randomNumber = Math.floor(Math.random() * 101);
         userInput = prompt("Entrez un numéro");
        // treatment 
        var n = parseInt(userInput);
        if (randomNumber > userInput) {

            message = userInput + "  "  + "est plus petit que" + "  " + randomNumber;
            
        }

        else if (randomNumber < userInput) {

            message = userInput + "  " + "est supérieur à" + "  " + randomNumber;
        }

        else {
            message = "Vous l'avez deviné" + " " + "!! Bravo !";

        }
        // exit : display
        console.log(randomNumber);
        alert(message);