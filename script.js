const fontSize1 = 50;
window.addEventListener('scroll',function(){
    let scrollHeight = window.scrollY;
    if (scrollHeight > 400){
        scrollHeight = 400;
    }
    if (scrollHeight >= 260){
        document.getElementById('header').style.backgroundColor  ="white";
    }
    else if (scrollHeight < 260){
        document.getElementById('header').style.backgroundColor  ="#00000000";
    }
    document.getElementById('swipe').style.opacity = 1-(scrollHeight/400);
});
