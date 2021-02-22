var nav = document.querySelector('.nav');
    
window.onscroll = function() {
    if(window.scrollY >= 550){
        nav.style.backgroundColor = "#2E3658";
    } else{
        nav.style.backgroundColor = "transparent";
    }
};