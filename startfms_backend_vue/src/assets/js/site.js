// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.
$(document).ready(function () {


});
let Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 8000,
    timerProgressBar: true,
});

let ToastTop = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 8000,
    timerProgressBar: true,
});

let ToastBottom = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 8000,
    timerProgressBar: true,
});

//檢查obj是否是空值
function isRealValue(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}


function SelectItemByAjax($el, query, url) {
    $el.select2({
        placeholder: "Select a state",
        ajax: {
            url: url,
            dataType: 'json',
            delay: 350,
            data: function (params) {
                //var query = {
                //    search: search,
                //}
                return query;
            },
            cache: true,
            processResults: function (data, params) {
                params.page = params.page || 1;
                params.term = (typeof (params.term) == 'undefined') ? "" : params.term;
                return {
                    results: data.results.filter((req) => {
                        return req.text.toUpperCase().indexOf(params.term.toUpperCase()) !== -1
                    }),
                }
            },
        }//ajax
    });
}



//-------------------------------------------//

