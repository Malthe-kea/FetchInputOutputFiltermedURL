console.log("kommundropdown.js er her")
pbFetchKommuner = document.getElementById("pbFetchKommuner");
ddKommune = document.getElementById("ddKommuner");
pbFetchKommuner.addEventListener("click", actionFetch);

const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

async function actionFetch() {
    const kommuner = await fetchKommuner(urlKommune);
    ddKommune.innerHTML = ""; // Clear existing options
    kommuner.forEach(kommune => {
        const option = document.createElement("option");
        option.value = kommune.kode;
        option.textContent = kommune.navn;
        ddKommune.appendChild(option);
    });
}