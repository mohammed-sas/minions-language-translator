var textArea = document.querySelector("#text-input");

var btn = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#div-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occurred",error);
    alert("something wrong with the server");
}

function clickHandler() {
    var text = textArea.value;
    fetch(getTranslation(text)).then(response => response.json()).then(json =>
        outputDiv.innerText = json.contents.translated).catch(errorHandler);
}

btn.addEventListener("click", clickHandler);