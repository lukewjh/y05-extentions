$(document).ready(function () {
    
    // 默认加载首页
    loadContent('index');
    
    // 处理按钮点击事件
    $("#fullPwd").click(function () {
        chrome.runtime.sendMessage({ action: "fillCredentials" });
    });

    // 处理导航链接的点击事件
    $('.navbar-nav a').click(function(event) {
        //因为是a标签，需要组织浏览器默认的跳转行为
        event.preventDefault();
        var pageId = $(this).attr('data-value');
        loadContent(pageId);
    });
    
});


// JavaScript部分处理内容的动态加载
function loadContent(page) {
    $("#main-content").load(page + ".html",function(response, status, xhr){
    // 检查加载是否成功
    if (status == "success") {

        // 首先，移除所有带有 data-custom-script 属性的 script 标签
        $("script[data-custom-script]").remove();
        $("script[data-custom-link]").remove();
        // 创建 script 元素
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '../js/'+page+'.js';  // 指定你的脚本文件路径
        script.setAttribute('data-custom-script', 'true');

        // 创建 link 元素用于引入 CSS
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../css/'+page+'.css';  // 指定你的 CSS 文件路径
        link.setAttribute('data-custom-link', 'true');


        // 将 script 元素添加到 head 中
        document.head.appendChild(script);
    } else {
        // 处理错误情况
        console.error("Content loading failed: " + xhr.status + " " + xhr.statusText);
    }
    });
    return false;
}


