const minVersion = "2.30";
const lastVersionUrl = "http://46.146.211.31:8081/api/version";

getLastVersion();

function getLastVersion() {
    $.ajax({
        url: lastVersionUrl
    }).then(function (data) {
        updateVersions(data);
    });
}

function updateVersions(lastVersion) {
    let versions = range(parseFloat(minVersion), parseFloat(lastVersion));
    fillSelectVersions(versions);
}

function range(start, end) {
    let versions = [];
    for (let i = start; i <= end; i += 0.01) {
        versions.push(i.toFixed(2));
    }
    return versions;
}

function fillSelectVersions(versions) {
    let minVersion = $('#minVersion');
    let maxVersion = $('#maxVersion');
    minVersion.empty();
    maxVersion.empty();

    versions.forEach(function (entry) {
        minVersion.append($('<option></option>').attr('value', entry).text(entry));
        maxVersion.append($('<option></option>').attr('value', entry).text(entry));
    });

    minVersion.prop('selectedIndex', 0);
    maxVersion.prop('selectedIndex', versions.length - 1);

    initCheckboxes()
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

