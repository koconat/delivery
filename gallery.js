//call button
let btn_prev = document.querySelector('#gallery .buttons #prev');
let btn_next = document.querySelector('#gallery .buttons #next');

//make gallery of photo
let images = document.querySelectorAll('#gallery .photo img');

let i = 0; //current image

//active next
btn_next.onclick = function () {
    images[i].style.display = 'none'; //hidden current photo
    //chek borders
    i++;
    if(i >= images.length){
    i = 0;
}
    images[i].style.display = 'inline';
}

//active previe
btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'inline';
}