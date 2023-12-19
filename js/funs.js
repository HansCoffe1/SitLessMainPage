"use strict";
$(() => {
    // 当文档加载完成后执行以下代码
    // 显示 class 为 'fun_board' 的元素
    // console.log('qwq!');
    $('.fun_board').fadeIn(300);
    // 绑定点击事件到class为fun_board的元素
    $('.fun_board').bind('click', function(e) {
        // 从元素的 id 属性中获取数字
        let tid = parseInt($(this).attr('id').match(/fun(\d*)/i)[1]);
        // console.log(tid);//, e.target.id
        goto_fun(tid);
    });
    //当窗口大小改变时，重新设置页面高度
    $(window).scroll(funpage_height).resize(funpage_height);
    // 初始化页面高度
    funpage_height();
});
// 根据 tid 跳转到对应的页面
function goto_fun(tid) {
    // 获取当前 url 的路径部分
    let hp = Math.max(location.href.lastIndexOf('/'), 0);
    let ori = location.href.substr(0, hp);
    // 构造新的 url
    let new_href = ori + '/fun' + tid + '.html';
    // 跳转到新的 url
    location.href = new_href;
}

// 调整页面高度
function funpage_height() {
    // 如果窗口宽度小于 1024px，设置 class 为 'fun_frame' 的元素的高度为 680px
    // 否则，设置为 400px
    if (document.documentElement.clientWidth < 1024) {
        $('.fun_frame').css('height', '680px');
    } else {
        $('.fun_frame').css('height', '400px');
    }
    // 调整页脚的位置
    set_footer_position();
}