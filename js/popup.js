$(document).ready(function () {
    // 处理按钮点击事件
    $("#fullPwd").click(function () {
        chrome.runtime.sendMessage({ action: "fillCredentials" });
    });
});

