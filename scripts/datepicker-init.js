initDateCheckboxes();

function initDateCheckboxes() {
    let startCheckbox = document.getElementById('startTime-checkbox');
    let startTime = document.getElementById('startTime-container');
    let endCheckbox = document.getElementById('endTime-checkbox');
    let endTime = document.getElementById('endTime-container');

    startCheckbox.addEventListener('change', (event) => {
        startTime.style.display = (event.target.checked) ? 'block' : 'none';
    });

    endCheckbox.addEventListener('change', (event) => {
        endTime.style.display = (event.target.checked) ? 'block' : 'none';
    });
}