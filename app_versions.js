$(document).ready(function () {
    let url = "https://data.42matters.com/api/v2.0/android/apps/versions.json?access_token=ba32d047435afdfc0d41671e71cc394a67047596&p=ru.pay.bisys.centralkass";
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        fillSelectVersions(data.versions);
        initCheckboxes();
    }).catch(function () {
        console.log("load error");
    })
});

function fillSelectVersions(versions) {
    let minVersion = $('#minVersion');
    let maxVersion = $('#maxVersion');
    minVersion.empty();
    maxVersion.empty();

    versions.forEach(function (entry) {
        minVersion.append($('<option></option>').attr('value', entry.version).text(entry.version));
        maxVersion.append($('<option></option>').attr('value', entry.version).text(entry.version));
    })
}

function initCheckboxes() {
    let minCheckbox = document.getElementById('minVersion-checkbox');
    let minDropdown = $('#minVersion');
    let maxCheckbox = document.getElementById('maxVersion-checkbox');
    let maxDropdown = $('#maxVersion');

    minCheckbox.addEventListener('change', (event) => {
        minDropdown.prop('disabled', !event.target.checked);
    });

    maxCheckbox.addEventListener('change', (event) => {
        maxDropdown.prop('disabled', !event.target.checked);
    });
}

