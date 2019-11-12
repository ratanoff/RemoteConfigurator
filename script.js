$(document).ready(function(){
    let dropdown = $('#startFragment');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Выберите экран</option>');
    dropdown.prop('selectedIndex', 0);

    // const url = 'https://api.myjson.com/bins/7xq2x'; // countries
    const url = 'https://api.myjson.com/bins/zxm2w';  // fragments

// Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', key).text(key));
        })
    });
});

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

function changeSquareColor() {
    let square = document.getElementById('square');
    square.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
}