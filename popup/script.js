const toggle = document.getElementById('toggle');
const state = document.getElementById('state');
const description = document.getElementById('description');

function set_popup(filter) {
    if (filter) {
        state.innerText = 'Filtered';
        description.innerHTML = 'You are <span style="color: #2196F3;">safe</span> in Matrix';
    } else {
        state.innerText = 'Unfiltered';
        description.innerHTML = 'You are exposed to <span style="color: red;">danger</span>';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const result = await chrome.storage.local.get("filter");
    let filter = result.filter;
    toggle.checked = filter;
    set_popup(filter);
});

toggle.addEventListener('change', (event) => {
    let filter=event.target.checked;
    chrome.storage.local.set({filter:filter});
    set_popup(filter);
});

