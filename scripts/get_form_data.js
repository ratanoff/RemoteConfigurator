
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


function logForm() {
    $('form').serializeArray()
        .reduce(function (a, x) {
            a[x.name] = x.value;
            console.log(a);
        }, {})
}