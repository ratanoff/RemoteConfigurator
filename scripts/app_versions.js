// let fs = require('fs');
const gplay = require('google-play-scraper');

const minVersion = "2.30";

updateVersions();

async function updateVersions() {
    // let versions = require('./versions.json');
    let last = await getLastVersion();
    if (last == "0") return;

    let versions = range(parseFloat(minVersion), parseFloat(last));
    fillSelectVersions(versions);

    console.log(versions);
    fs.writeFileSync('scripts/config.json', JSON.stringify(versions, null, 2));
}

function range(start, end) {
    let ans = [];
    for (let i = start; i <= end; i += 0.01) {
        ans.push(i.toFixed(2));
    }
    return ans;
}

function getLastVersion() {
    return gplay.app({appId: 'ru.pay.bisys.centralkass'})
        .then(data => data.version, error => "0")
}

function fillSelectVersions(versions) {
    let minVersion = $('#minVersion');
    let maxVersion = $('#maxVersion');
    minVersion.empty();
    maxVersion.empty();

    versions.forEach(function (entry) {
        minVersion.append($('<option></option>').attr('value', entry.version).text(entry.version));
        maxVersion.append($('<option></option>').attr('value', entry.version).text(entry.version));
    });

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

