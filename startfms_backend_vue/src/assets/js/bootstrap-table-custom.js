//回傳資料，沒有設定值--(使用bootstarp table)
function ajaxRequest(params) {
    $.ajax({
        type: 'get',
        async: false,
        dataType: "json",
        url: url_GetTable,
        success: function (data) {
            if (!isRealValue(data)) {
                params.success(data);
            }
            else {
                params.success('');
            }
        }
    })
}

//回傳資料，有設定值--(使用bootstarp table)
function ajaxRequest_AllForm(params) {
    $.ajax({
        type: 'post',
        async: false,
        dataType: "json",
        //contentType: 'application/json; charset=UTF-8',
        url: url_GetTable_AllForm,
        data: $('#ajax-contact-form').serialize(),
        success: function (data) {
            if (!isRealValue(data)) {
                params.success(data);
            }
            else {
                params.success('');
            }
        }
    })
}

//明細資料
function detailFormatter(index, row) {
    var html = [];
    let col = Get_DataColumn_Sub(Object.values(row)[0]);
    let data = Get_DataTable_Sub(Object.values(row)[0]);
    let arr = [];
    html.push('<div id="subTable" class="table-body"><table id="table-sub" class="table table-bordered table_sub col-10"><thead><tr>');
    col.forEach(function (el, index) {
        arr.push(el.field);
        html.push('<th data-field="' + el.field + '">' + el.title + '</th>');
    });
    html.push('</tr></thead><tbody>');
    data.forEach(function (el, index) {
        var data_keys = Object.keys(el);
        html.push('<tr>');
        arr.filter(text => text.indexOf(data_keys)).forEach(function (value) {
            html.push('<td>' + el[value] + '</td>');
        });
        html.push('</tr>');
    });
    return html.join('')
}
