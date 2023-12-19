"use strict"; // 使用严格模式
var banner_width = 1000 + 'px'; // 定义横幅宽度为1000px
$(() => { // 使用jQuery的ready方法，当DOM加载完成后执行函数
    footer_obj = $('#footer_frame'); // 获取id为'footer_frame'的元素，并赋值给footer_obj
    set_footer_position(); // 调用set_footer_position函数，设置页脚的位置
    $(window).scroll(set_footer_position).resize(set_footer_position); // 当窗口滚动或者大小改变时，调用set_footer_position函数
})

var footer_height = 0, // 页脚的高度为0
    footer_top = 0, // 页脚的顶部位置为0
    footer_obj; // 页脚对象

// 设置页脚的位置
function set_footer_position() {
    footer_height = footer_obj.height(); // 获取页脚对象的高度，并赋值给footer_height
    footer_top = ($(window).scrollTop() + $(window).height() - footer_height) + 'px'; // 计算页脚的顶部位置，并赋值给footer_top
    if (($(document.body)).height() < $(window).height()) { // 如果文档的高度小于窗口的高度
        footer_obj.css({ position: 'absolute' }).stop().animate({ top: footer_top }); // 设置页脚对象的position属性为'absolute'，并使其停止当前的动画，然后开始一个新的动画，使其top属性变为footer_top
    } else { // 如果文档的高度大于或等于窗口的高度
        footer_obj.css({ position: 'static' }); // 设置页脚对象的position属性为'static'
    }
}