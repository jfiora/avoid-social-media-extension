(function () {
    let objRef = document.body;
    const url = window.location.href;
    if (checkUrl(url)) {
        objRef.style.filter = "blur(15px)";
    }
})();

function checkUrl(_url) {
    let arr = ["https://twitter.com", "https://www.facebook.com", "https://www.instagram.com", "https://www.tiktok.com"];
    return arr.some(e => _url.startsWith(e));
}