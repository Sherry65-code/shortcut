const fontSize1 = 50;
window.addEventListener('scroll',function(){
    let scrollHeight = window.scrollY;
    if (scrollHeight > 400){
        scrollHeight = 400;
    }
    
    document.getElementById('swipe').style.opacity = 1-(scrollHeight/400);
});
