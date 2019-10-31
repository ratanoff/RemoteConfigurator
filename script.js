$(function () {
    var update = function () {
        $('#serializearray').text(
            JSON.stringify($('form').serializeArray())
        );
    };
    update();
    $('form').change(update);
})