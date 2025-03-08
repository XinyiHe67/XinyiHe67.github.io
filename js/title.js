// 动态标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        // 离开当前页面
        document.title = "w(ﾟДﾟ)w 不要走！再看看嘛！";
        clearTimeout(titleTime);
    } else {
        // 回到页面
        document.title = "♪(^∇^*)欢迎肥来！" + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});