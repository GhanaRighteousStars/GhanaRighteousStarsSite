var menuIcon= document.getElementsByClassName("menuIcon")
var navLinks= document.getElementsByClassName("navLinks")

var onClickFunction= function(){
    if(navLinks.classList===('hide')){
        navLinks.classList.remove('hide')
        navLinks.classList.add('show')
    }
    else{
        navLinks.classList.remove('show')
        navLinks.classList.add('hide')
    }
}


menuIcon.addEventListener('onclick', onClickFunction);
