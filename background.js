chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "inputFocus") {
        const url = message.url;
        console.log(url);
        
    }
});
// 发送消息给本地应用程序
// chrome.runtime.sendNativeMessage('com.example.nativeapp', { message: 'Hello, Native App!' }, function(response) {
//     if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError);
//     } else {
//         console.log('收到本地应用程序的响应：', response);
//     }
// });
