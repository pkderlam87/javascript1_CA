const facebook = document.querySelector(".facebook");
const linkedin = document.querySelector(".linkedin");
const twitter = document.querySelector(".twitter");
facebook.onclick = function () {
    window.open('https://www.facebook.com/sharer/sharer.php?u=modest-heisenberg-00a94a.netlify.app', 'facebook-share-dialog',
        'width=600,height=400');
}
linkedin.onclick = function () {
    window.open('https://www.linkedin.com/shareArticle?mini=true&url=modest-heisenberg-00a94a.netlify.app', 'linkedin-share-dialog', 'width=600,height=400');
}
twitter.onclick = function () {
    window.open('https://twitter.com/intent/tweet?url=modest-heisenberg-00a94a.netlify.app', 'twitter-share-dialog', 'width=600,height=400');
}