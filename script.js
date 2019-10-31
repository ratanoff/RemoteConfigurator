$(function () {
    let update = function () {
        $('#serializearray').text(
            JSON.stringify(
                $('form').serializeArray()
                    .reduce(function (a, x) {
                        a[x.name] = x.value;
                        return a;
                    }, {})
            )
        )
    };

    update();
    $('form').change(update);
});
