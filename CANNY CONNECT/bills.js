//Navbar

let menu = document.getElementById('mobile-navbar');
function navbar(){
    if (menu.classList.contains('mobile-navbar-open')){
        menu.classList.remove('mobile-navbar-open');
    }

    else{
        menu.classList.add('mobile-navbar-open');
    }
}