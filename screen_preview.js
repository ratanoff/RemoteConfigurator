$(document).ready(function () {
    let dropdown = $('#startFragment');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Выберите экран</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://api.myjson.com/bins/gx5vy';    // Screens [name, imgUrl]

    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry).text(key));
        })
    });
});

$(function () {
    let update = function () {
        let dropdown = document.getElementById('startFragment');
        let screen = document.getElementById('image');
        screen.style.backgroundImage = "url(" + dropdown.value + ")";
    };

    update();
    $('form').change(update);
});


