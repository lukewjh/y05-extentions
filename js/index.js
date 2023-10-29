
var curUrl = "";

// 在页面加载完成后调用渲染函数
$(document).ready(function () {
    renderOrderedList(responseData);
    getUrl();

});




// 模拟后台接口返回的数据
var responseData = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
];

// 将数据渲染到有序列表中
function renderOrderedList(data) {
    var orderedList = $("#ordered-list");

    for (var i = 0; i < data.length; i++) {
        var listItem = $("<li>").addClass("list-group-item").text(data[i]);
        orderedList.append(listItem);
    }
}

//获取当前标签页的主域名
function getUrl(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs && tabs[0]) {
            const currentTab = tabs[0];
            const currentUrl = new URL(currentTab.url);
            const mainDomain = currentUrl.hostname;
            curUrl = mainDomain;
          // 在这里可以使用主域名进行进一步处理
        //   console.log(`当前标签页的主域名是：${mainDomain}`);
            $("#curUrl").text(curUrl);
        }
      });
}
