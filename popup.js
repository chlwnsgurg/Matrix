const toggle = document.getElementById('toggle');
const state = document.getElementById('state');
const description = document.getElementById('description');

let savedChecked = localStorage.getItem('checked') === 'true';
toggle.checked = savedChecked;
(set_popup = (checked) => {
    if (checked) {
        state.innerText = 'Filtered';
        description.innerHTML = 'You are <span style="color: #2196F3;">safe</span> in Matrix';
    } else {
        state.innerText = 'Unfiltered';
        description.innerHTML = 'You are exposed to <span style="color: red;">danger</span>';
    }
})(savedChecked);


toggle.addEventListener('change', (event) => {
    let checked=event.target.checked;
    localStorage.setItem('checked', checked);
    set_popup(checked);
});

