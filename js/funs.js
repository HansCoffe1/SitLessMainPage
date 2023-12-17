"use strict";
$(() => {
    // console.log('qwq!');
    $('.fun_board').fadeIn(300);
    $('.fun_board').bind('click', function(e) {
        let tid = parseInt($(this).attr('id').match(/fun(\d*)/i)[1]);
        // console.log(tid);//, e.target.id
        goto_fun(tid);
    });
    $(window).scroll(funpage_height).resize(funpage_height);
    funpage_height();
    // set_footer_position();
    // set_footer_position();
});

function goto_fun(tid) {
    // let slash_pos = Math.max(0, location.href.lastIndexOf('/'));
    // let new_href = location.href.substr(0, slash_pos);
    // let new_href = location.origin + '/fun' + tid + '.html'; 非live会炸
    let hp = Math.max(location.href.lastIndexOf('/'), 0);
    let ori = location.href.substr(0, hp);
    let new_href = ori + '/fun' + tid + '.html';
    location.href = new_href;
}

function funpage_height() {
    if (document.documentElement.clientWidth < 1024) {
        $('.fun_frame').css('height', '680px');
    } else {
        $('.fun_frame').css('height', '400px');
    }
    set_footer_position();
}