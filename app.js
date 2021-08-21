var textArea = document.querySelector("#text-input");

var btn = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#div-output");

btn.addEventListener("click",function(){
    outputDiv.innerText=textArea.value;
}
)