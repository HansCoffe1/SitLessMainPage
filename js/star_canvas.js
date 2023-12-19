"use strict";
//模仿画布   星星动效
$(() => {
    init_star();  // 初始化星星动效
});

function init_star() {
    let obj = $('#star');  // 获取id为star的元素

    // 创建星星元素，添加类名，并添加到#star元素中
    let star1 = $('<img src="images/star.png"></img>');
    star1.addClass('stars');
    star1.addClass('ss1');
    obj.append(star1);

    let star2 = $('<img src="images/star.png"></img>');
    star2.addClass('stars');
    star2.addClass('ss2');
    obj.append(star2);

    let star3 = $('<img src="images/star.png"></img>');
    star3.addClass('stars');
    star3.addClass('ss3');
    obj.append(star3);

    let star4 = $('<img src="images/star.png"></img>');
    star4.addClass('stars');
    star4.addClass('ss4');
    obj.append(star4);

    let star5 = $('<img src="images/star.png"></img>');
    star5.addClass('stars');
    star5.addClass('ss5');
    obj.append(star5);

    let star6 = $('<img src="images/star.png"></img>');
    star6.addClass('stars');
    star6.addClass('ss6');
    obj.append(star6);

    // 创建月亮元素，添加类名，并添加到#star元素中
    let moon = $('<img src=images/moon.png></img>');
    moon.addClass('moon');
    obj.append(moon);
}