    let likeButton = document.querySelectorAll('.likebutton');
    for (let i = 0; i<likeButton.length; i++){
        likeButton [i].addEventListener('click', function(){
            let likeCounter =document.querySelectorAll('.likecounter');
            likeCounter[i].innerHTML = Number(likeCounter[i].innerHTML) + 1;
        })
    }