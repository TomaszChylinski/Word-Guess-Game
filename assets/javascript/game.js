    //keyUp function 
        //document.getElementById("userInput");
        var userText = document.getElementById("userInput");
        document.onkeyup  = function(event){
            userText.textContent = event.key;
            console.log(userText);
        };