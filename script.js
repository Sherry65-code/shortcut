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
    this.document.getElementById('c1').style.left = 1-(scrollHeight/400)*100 + 'px';
    this.document.getElementById('c2').style.right = 1-(scrollHeight/400)*100 + 'px';
    document.getElementById('swipe').style.opacity = 1-(scrollHeight/400);
});
