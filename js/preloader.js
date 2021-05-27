window.onload = function(){
    let preloader = document.getElementById('preloader');
    setTimeout(function(){
        preloader.style.opacity = 0;
        preloader.style.zIndex = "0";
    }, 500);
};
