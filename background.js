chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "inputFocus") {
        const url = message.url;
        console.log(url);
        
    }
});

