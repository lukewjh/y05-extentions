document.addEventListener('focus', function(e) {
    if (e.target.type === "password" || (e.target.type === "text" && (e.target.name.toLowerCase().includes("user") || e.target.name.toLowerCase().includes("account")) )) {
        console.log(window.location.href)
        chrome.runtime.sendMessage({type: "inputFocus", url: window.location.href});
    }
    
},true);

