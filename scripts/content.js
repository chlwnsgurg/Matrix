let comments=document.querySelectorAll('ytd-comment-thread-renderer');

// if comments exist
if (comments) {
    for (let comment of comments) {
        let text=comment.querySelector("#content-text").innerText; //text is a string 
        /* Filter Comments */
        comment.style.visibility = 'hidden';
    }
}