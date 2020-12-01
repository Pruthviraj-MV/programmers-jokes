//here queryselctor assigns the entire html event to the variable

var inputText = document.querySelector("#input-text");

//joke button click processing 
var jokeBtn = document.querySelector("#joke-btn");

//joke output process
var jokeText = document.querySelector("#joke-text");

//output process
var outputText = document.querySelector("#output-text");


//test server URL
//var url = "https://lessonfourapi.tanaypratap.repl.co/joke/yoda.json";
//source code of yoda url https://repl.it/@tanaypratap/lessonfourapi


var url = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,sexist&type=single"


function errorHandler(error) {
    console.log("Error Occurred"); //useful if we print on console to debug
    alert("Oops! Error Occurred. Please try after sometime");
}



function jokeHandler() {

    var userName = inputText.value;
    console.log(inputText);
    outputText.innerText = userName + " Here is your joke 👇";

    fetch(url) //since here we are not providing any values to the key, direct url is enough

        .then(response => response.json())
        //Also => .then(function responseHandler(response) { return reponse.json() ))

        .then(json => {
            var joke = json.joke; //storing the value of joke key
            jokeText.innerText = joke;
            console.log(json.joke);
        })

        // Also => .then(function logJSON(json) { console.log(json) } )

        //error handling function
        .catch(errorHandler); //call back function if we encounter error on server
     
}







//EventListener needs an event like click,scroll... and a function to perform on it 
jokeBtn.addEventListener("click", jokeHandler)