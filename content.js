const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let observer,target;
let init=false;
(async function () {
    observer = new MutationObserver(filterLoadingComments);
    while (!target) {
        target = document.querySelector('#comments #contents');
        await sleep(1000);
    }
    init=true;
})();
(async function () {
    while (!init) await sleep(1000);
    const result = await chrome.storage.local.get("filter");
    let filter = result.filter;
    if (filter) {
        filterLoadedComments();
        observer.observe(target, { childList: true });
    }
})();

chrome.storage.onChanged.addListener(async (changes,_) => { 
    while (!init) await sleep(1000);
    if (changes.filter) {
        let filter = changes.filter.newValue;
        if (filter) {
            filterLoadedComments();
            observer.observe(target, { childList: true});
        } else {
            observer.disconnect();
        }
    }
});

function filterLoadedComments(){
    let comments = document.querySelectorAll('ytd-comment-thread-renderer'); 
    if (comments) { 
        for (let comment of comments) { 
            let text=comment.querySelector("#content-text").innerText; /* Filter Comments */ 
            console.log(text);
        }        
    }
}


function filterLoadingComments(mutationList, _) {
    mutationList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement&&node.tagName=='YTD-COMMENT-THREAD-RENDERER') {
                let text = node.querySelector("#content-text").innerText;
                console.log(text);
            }
        });
    });
}