// 在页面加载完成后调用渲染函数
$(document).ready(function () {
    renderOrderedList(responseData);
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
