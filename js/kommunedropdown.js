console.log("kommundropdown.js er her")
let pbFetchKommuner = document.getElementById("pbFetchKommuner");
let ddSelectedKommune = document.getElementById("ddKommuner");
const kommuneMap = new Map();
const infoHolder = document.getElementById("info")
pbFetchKommuner.addEventListener("click", actionFetch);

const url = "https://api.dataforsyningen.dk/kommuner";

async function fetchKommuner(any) {
    const response = await fetch(url)
    return await response.json();
}

async function actionFetch() {
    const kommuner = (await fetchKommuner(url)).sort((a, b) => a.navn.localeCompare(b.navn));
    ddSelectedKommune.innerHTML = ""; // Clear existing options
    for (let kom of kommuner) {
        const option = document.createElement("option");
        option.value = kom.kode;
        option.textContent = kom.navn;
        ddSelectedKommune.appendChild(option);

        kommuneMap.set(kom.kode, kom)
    }
}


function showKommuneInfo(kommune) {
        infoHolder.innerHTML = "";
        const navn = document.createElement("h1")
        navn.textContent = kommune.navn
        infoHolder.appendChild(navn)

        const kode = document.createElement("h2")
        kode.textContent = kommune.kode
        infoHolder.appendChild(kode);
        updateMap(kommune)
}
ddSelectedKommune.addEventListener("change", function () {
    const kommune = kommuneMap.get(ddSelectedKommune.value);
    showKommuneInfo(kommune);
});
