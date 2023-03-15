// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.
$(document).ready(function () {
    //----設定Menu背景-----//
    //取得背景顏色
    let color = localStorage.getItem("bodyColor");
    //取得切換Menu顏色
    let bt_action = localStorage.getItem('menuSwitch');
    if (color != null || color != "") { $('#jquery-accordion-menu').addClass(color); }
    if (bt_action != "") { $('.menu.menu__body').addClass('menu-close'); }

    $('a.color').click(function () {
        $('body').removeClass($('body').attr('class'));
        if ($(this).attr('class').indexOf('color') >= 0) {
            let colorName = $(this).attr('class').replace("color", "");
            localStorage.setItem("bodyColor", colorName);
            $('body').addClass(colorName);
        }
    })
    $('.menu-switch').click(function () {
        $switch = $('.menu.menu__body');
        if ($switch.attr('class').indexOf('menu-close') > 0) {
            $switch.removeClass('menu-close');
            localStorage.setItem("menuSwitch", '');
        }
        else {
            $switch.addClass('menu-close');
            localStorage.setItem("menuSwitch", 'menu-close');
        }
    });

    $('a:not(.menu,.color)').click(function () { Loading(); });
    $('input[type="submit"]').click(function () {Loading();});
});


function Loading(message, timeout = 5000) {
    if (message == null || message == '') message = 'Please wait , Loading....';
    $.blockUI({
        message: '<img class="load-img" src="~/images/loader.gif" />' + '<div class="loading load-desc">' + message + '</div>',
        css:
        {
            border: 'none',
            padding: '15px',
            backgroundColor:
                '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        }
    });
    setTimeout($.unblockUI, timeout);
}


//BlockUI 設定按下存檔訊息 (文字)
function BlockUI(msg, start) {
    if (start == null) { start = true }
    if (start) {
        $.blockUI({
            message: '<label style="font-size:40px">' + msg + '</label>',
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });
    } else {
        $.unblockUI()
    }
}

//BlockUI 設定按下存檔訊息 (文字)
function Loading_Font(msg, start) {
    if (start == null) {
        $.blockUI({
            message: '<label style="font-size:40px">' + msg + '</label>',
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });
    } else {
        $.unblockUI()
    }
}

//BlockUI 載入視窗(圖片 + 文字)
function Loading(message, timeout = 10000) {
    if (message == null || message == '') message = 'Please wait , Loading....';
    $.blockUI({
        message: '<img class="load-img" src="~/images/loader.gif" />' + '<div class="loading load-desc">' + message + '</div>',
        css:
        {
            border: 'none',
            padding: '15px',
            backgroundColor:
                '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        }
    });
    setTimeout($.unblockUI, timeout);
}

//回上一頁的function(使用 #bt_return - id ) ，傳入值請設定預設返回頁面
function ReturnIndex() {
    $('#bt_return').click(function () {
        const urlSearchParams = new URLSearchParams(window.location.search);
        var params = Object.fromEntries(urlSearchParams.entries());
        var url_return = '/Main';
        var procode = localStorage.getItem('ProCode');

        Loading();
        if (!isRealValue(params) && Object.keys(params).indexOf("ProCode") != -1) {
            url_return = '/' + params.ProCode;
        }

        if (procode != null) {
            url_return = '/' + procode;
            localStorage.removeItem('ProCode');
        }
        window.location.href = url_return;
    });
}

//按下按鈕後需要連結過去的內容
// btn = 按鈕名稱
// prgcode = 頁面名稱
// url = 連結過去的位置
function MoveIndex(btn, prgcode, url) {
    $(document).on('click', btn, function () {
        var params = { ProCode: prgcode };
        window.location.href = url + '?' + $.param(params);
        localStorage.setItem('ProCode', prgcode);
        Loading();
    });
}

//檢查obj是否是空值
function isRealValue(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

//-------------------------------------------//

