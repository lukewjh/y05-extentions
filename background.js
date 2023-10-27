


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fillCredentials") {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: autofillCredentials
            });
        });
    }
});

function autofillCredentials() {
    const usernameInput = document.querySelector('input[type="text"][name="userName"], input[type="email"][name="userName"], input[type="account"][name="userName"]');
    const passwordInput = document.querySelector('input[type="password"][name="password"]');
    // var usernameInput = document.querySelectorAll('input[type="text"][name="userName"],input[type="text"][name="account"]');
    // var passwordInput = document.querySelectorAll('input[name="password"][type="password"]');
    if (usernameInput && passwordInput) {
        // 这里只是一个示例，实际的账号和密码应该从chrome.storage或其他安全的地方获取
        usernameInput.value = "namename1";
        passwordInput.value = "pwdpwd2";
    }
}
