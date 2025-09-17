console.log("im in fetchurl.js");

const inpUrl = document.getElementById("inpUrl");
const textArea = document.getElementById("txt");
const pbFetch = document.getElementById("pbFetchUrl");
pbFetch.addEventListener("click", actionFetchUrl);

function getKeysAndValuesFromObj(obj) {
    const keys = Object.keys(obj)
    return keys.map(key => `${key} : ${obj[key]}`)
}

async function actionFetchUrl (btn) {
    const url = inpUrl.value;
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url);

    let showTxt = "";
    if (Array.isArray(jsonOutput)) {
        showTxt = getKeysAndValuesFromObj(jsonOutput[0]);
    } else {
        showTxt = getKeysAndValuesFromObj(jsonOutput);
    }
    textArea.textContent = showTxt;
    console.log(jsonOutput);
}

function fetchAnyUrl (url) {
    console.log("inside fetch url = " + url);
    return fetch(url).then(response => response.json())
}

function fetchAnyUrlText (url) {
    console.log("inside fetch text url = " + url);
    return fetch(url).then(response => response.text())
}

