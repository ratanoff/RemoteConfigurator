$(function () {
    let update = function () {
        let banner = document.getElementById('banner_text');
        let bannerInput = document.getElementById('banner_text_input');

        bannerInput.oninput = function() {
            banner.innerHTML = bannerInput.value
        };
    };

    update();
    $('form').change(update);
});