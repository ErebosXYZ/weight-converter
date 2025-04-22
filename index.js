// Buena suerte
const inputPounds = document.querySelector("#input");
const weightResult = document.querySelector("#result");

inputPounds.addEventListener("input", (event) =>{
    const pounds = event.target.value;

    weightResult.textContent = (pounds * 0.453592).toFixed(2);
})