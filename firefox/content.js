console.log("[ReturnBoxes] Content: I have been executed. If you didn't enter the page, something has been sent to me, or I have to do something. This message is for the developer");

(function() {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    browser.runtime.onMessage.addListener(worker);
    function worker(message) {
        console.log("[ReturnBoxes] Content: worker() received message: " + message.txt)

        if (message.txt === "inpage down") {
            document.querySelectorAll('[style]')
                .forEach(el => el.removeAttribute('style'));
            console.log("[ReturnBoxes] Content: worker() has identified message as 'inpage down' and has executed everything that he should have done.")
        } else if (message.txt === "stylesheet down") {
            document.querySelectorAll('link[rel="stylesheet"]')
                .forEach(el => el.parentNode.removeChild(el));
            console.log("[ReturnBoxes] Content: worker() has identified message as 'stylesheet down' and has executed everything that he should have done.")
        } else if (message.txt === "extras down") {
            document.querySelectorAll('style')
                .forEach(el => el.parentNode.removeChild(el));
            console.log("[ReturnBoxes] Content: worker() has identified message as 'extras down' and has executed everything that he should have done.")
        } else {
            console.log("[ReturnBoxes] Content: worker() could not identify the message! Please report this issue.")
        }
    }
})();
