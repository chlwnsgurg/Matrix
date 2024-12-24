
document.querySelectorAll('ytd-comment-thread-renderer');
// if comments exist
if (comments) {
    for (let comment of comments) {
        let text=comment.querySelector("#content-text").innerText; //text is a string 
        let words=text.split(" ");
        /* Filter Comments */
        comment.querySelector("#content-text").innerText = "WANG!~";
    }
}