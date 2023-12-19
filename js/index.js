"use strict"; // 严格模式
var banner_width = 1000; // 横幅宽度
const normal_speed = 500; // 正常速度
const slow_speed = 800; // 慢速
const banner_button_dif = 45; // 横幅按钮差值
const banner_button_edif = 35; // 另一个横幅按钮差值
const banner_cycle = 5000; // 横幅周期
var slide_event; // 滑动事件
var now_slide_id = 1; // 当前滑动ID
var slide_moving = false; // 一个标志，表示是否正在滑动 
$(() => { // 使用jQuery的ready方法，当DOM加载完成后执行函数
    //播放动画
    $('img').prop('draggable', false); // 设置所有img元素的draggable属性为false，禁止拖动。注意，即使在Firefox中禁止了，也可以拖动
    // $('img').draggable({ disabled: true }); //禁止所有img元素的拖动功能
    $('#what_is_it').fadeIn(normal_speed); // id为'what_is_it'的元素以normal_speed的速度淡入
    // $('.what_is_it_qa').css({ display: 'none' }); //设置class为'what_is_it_qa'的所有元素的display属性为'none'，使其不显示
    $('.content1').fadeIn(normal_speed); // class为'content1'的所有元素以normal_speed的速度淡入
    $('.title2').fadeIn(normal_speed); // class为'title2'的所有元素以normal_speed的速度淡入
    $('.title0').fadeIn(normal_speed); // class为'title0'的所有元素以normal_speed的速度淡入
    $(window).scroll(set_banner_width).resize(set_banner_width); // 当窗口滚动或者大小改变时，调用set_banner_width函数

    $('#b_img1').slideDown(slow_speed); // 使id为'b_img1'的元素以slow_speed的速度滑下
    slide_event = setInterval(next_banner, banner_cycle); // 每隔banner_cycle的时间，调用next_banner函数
    set_banner_width(); // 调用set_banner_width函数，设置横幅的宽度
});

// 定义一个函数，用于设置横幅的宽度
function set_banner_width() {
    banner_width = $('#banner').width(); // 获取id为'banner'的元素的宽度，并赋值给banner_width
    reposition_banner_button(); // 调用reposition_banner_button函数，重新定位横幅按钮
}

// 定义一个函数，将一个数字i转换为对应的横幅对象
function i_to_banner_obj(i) {
    return $('#b_img' + i); // 返回id为'b_img' + i的元素
}

// 定义一个函数，将一个数字i转换为对应的横幅按钮对象
function i_to_banbut_obj(i) {
    return $('#b_but' + i); // 返回id为'b_but' + i的元素
}

// 用于切换横幅
function switch_banner(from, to) {
    slide_moving = true; // 设置slide_moving为true，表示正在滑动
    let obj_from = i_to_banner_obj(from); // 获取from对应的横幅对象
    let obj_to = i_to_banner_obj(to); // 获取to对应的横幅对象
    obj_from.slideUp(slow_speed); // 使from对应的横幅对象以slow_speed的速度滑上
    obj_to.slideDown(slow_speed); // 使to对应的横幅对象以slow_speed的速度滑下
    let obj_but_from = i_to_banbut_obj(from); // 获取from对应的横幅按钮对象
    let obj_but_to = i_to_banbut_obj(to); // 获取to对应的横幅按钮对象
    obj_but_from.removeClass('slide_button_now'); // 移除from对应的横幅按钮对象的'slide_button_now'类
    obj_but_to.addClass('slide_button_now'); // 给to对应的横幅按钮对象添加'slide_button_now'类
    setTimeout(() => { // 设置一个定时器
        slide_moving = false; // slow_speed时间后，设置slide_moving为false，表示滑动结束
    }, slow_speed);
}
function reposition_banner_button() {
    for (let i = 1; i <= 3; ++i) {
        let obj = i_to_banbut_obj(i);
        obj.css({ left: banner_button_dif + i * banner_button_edif + 'px' })
            // obj.css({ left: banner_width + banner_button_dif + i * banner_button_edif + 'px' })
    }
}

// 用于切换到下一个横幅
function next_banner() {
    let next_slide_id = (now_slide_id) % 3 + 1; // 计算下一个横幅的ID
    switch_banner(now_slide_id, next_slide_id); // 切换到下一个横幅
    now_slide_id = next_slide_id; // 更新当前横幅的ID
}

// 用于切换到指定的横幅
function to_banner(to) {
    if (slide_moving || to == now_slide_id) { // 如果正在滑动，或者要切换到的横幅就是当前横幅，那么直接返回
        return;
    }
    switch_banner(now_slide_id, to); // 切换到指定的横幅
    now_slide_id = to; // 更新当前横幅的ID
    clearInterval(slide_event); // 清除当前的定时器 重新计时
    slide_event = setInterval(next_banner, banner_cycle); // 重新设置定时器，每隔banner_cycle的时间，切换到下一个横幅
}