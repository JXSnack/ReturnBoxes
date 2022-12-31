function setup() {
    // Starting the popup
    console.log("[ReturnBoxes] Popup opened");
    document.getElementById("js-check").innerHTML = "JavaScript working"; // Setting the state
    let manifest_data = browser.runtime.getManifest(); // Get the manifest

    // Get debug info
    document.getElementById("manifest-version").innerHTML = manifest_data.manifest_version; // Manifest version
    document.getElementById("manifest-number").innerHTML = manifest_data.version; // Extension version
    document.getElementById("manifest-name").innerHTML = manifest_data.name; // Extension name
}

function myFunction() { // didn't know how to call this, please give ideas
    var copyText = document.getElementById("debug-info").innerText + " | " + document.getElementById("js-state").innerText;
    navigator.clipboard.writeText(copyText);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!"
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}


// Run the setup
setup() // setup


// Add a few events
document.getElementById("copy-button").addEventListener("click", function () {
    myFunction()
})

document.getElementById("copy-button").addEventListener("mouseout", function () {
    outFunc()
})

// the remove buttons
document.getElementById("userinput-inpage").addEventListener("click", (e) => {
    var query = browser.tabs.query({currentWindow: true, active: true})
    var tab = query.then(getTab, onError)

    function getTab(tabs) {
        for (let tab of tabs) {
            send(tab.id)
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`)
    }

    function send(tab) {
        browser.tabs.executeScript(tab, {
            file: "content.js",})
            .then(function () {browser.tabs.sendMessage(tab, {txt: "inpage down"})})
            .catch(console.error.bind(console))
    }
})

document.getElementById("userinput-stylesheet").addEventListener("click", (e) => {
    var query = browser.tabs.query({currentWindow: true, active: true})
    var tab = query.then(getTab, onError)

    function getTab(tabs) {
        for (let tab of tabs) {
            send(tab.id)
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`)
    }

    function send(tab) {
        browser.tabs.executeScript(tab, {
            file: "content.js",})
            .then(function () {browser.tabs.sendMessage(tab, {txt: "stylesheet down"})})
            .catch(console.error.bind(console))
    }
})

document.getElementById("userinput-extras").addEventListener("click", (e) => {
    var query = browser.tabs.query({currentWindow: true, active: true})
    var tab = query.then(getTab, onError)

    function getTab(tabs) {
        for (let tab of tabs) {
            send(tab.id)
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`)
    }

    function send(tab) {
        browser.tabs.executeScript(tab, {
            file: "content.js",})
            .then(function () {browser.tabs.sendMessage(tab, {txt: "extras down"})})
            .catch(console.error.bind(console))
    }
})
