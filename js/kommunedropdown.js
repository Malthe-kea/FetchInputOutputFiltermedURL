console.log("kommundropdown.js er her")
let pbFetchKommuner = document.getElementById("pbFetchKommuner");
let ddKommune = document.getElementById("ddKommuner");
let selectedKommune = ddKommune.addEventListener("change", goToHref)
pbFetchKommuner.addEventListener("click", actionFetch);

const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

async function actionFetch() {
    const kommuner = (await fetchKommuner(urlKommune)).sort((a, b) => a.navn.localeCompare(b.navn));
    ddKommune.innerHTML = ""; // Clear existing options
    kommuner.forEach(kommune => {
        const option = document.createElement("option");
        option.value = kommune.kode;
        option.textContent = kommune.navn;
        ddKommune.appendChild(option);
    });
}

function goToHref(){
    const selectedValue = ddKommune.value;
    if(selectedValue){
        window.location.href = selectedValue
    }
}