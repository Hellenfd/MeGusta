let likeButton = document.querySelector('.likebutton');

function aumentarLikes() {
    let currentLikes = Number(likecounter1().textContent);
    likeCounters().textContent = currentLikes++;
}