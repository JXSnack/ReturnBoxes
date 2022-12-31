console.log("[ReturnBoxes] Content: I have been executed. If you didn't enter the page, something has been sent to me, or I have to do something. This message is for the developer");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("[ReturnBoxes] Content: worker() received message: " + request.txt)

        if( request.txt === "inpage down" ) {
            document.querySelectorAll('[style]')
                .forEach(el => el.removeAttribute('style'));
            console.log("[ReturnBoxes] Content: worker() has identified message as 'inpage down' and has executed everything that he should have done.")
        } else if (request.txt === "stylesheet down") {
            document.querySelectorAll('link[rel="stylesheet"]')
                .forEach(el => el.parentNode.removeChild(el));
            console.log("[ReturnBoxes] Content: worker() has identified message as 'stylesheet down' and has executed everything that he should have done.")
        } else if (request.txt === "extras down") {
            document.querySelectorAll('style')
                .forEach(el => el.parentNode.removeChild(el));
            console.log("[ReturnBoxes] Content: worker() has identified message as 'extras down' and has executed everything that he should have done.")
        } else {
            console.log("[ReturnBoxes] Content: worker() could not identify the message! Please report this issue.")
        }
    }
);
