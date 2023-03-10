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


//Data price list for different networks


function showMtn(){
    if (document.getElementById('mtn').checked){
        document.getElementById('mtn-pl').style.display="block";
        document.getElementById('empty').style.display="none";
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('data-logo').src="./mtnlogo.png";
        document.getElementById('data-logo').style.animation='none';
    }

    else{
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('empty').style.display="block";
    }
}

function showAirtel(){
    if (document.getElementById('airtel').checked){
        document.getElementById('airtel-pl').style.display="block";
        document.getElementById('empty').style.display="none";
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('data-logo').src="./airtel-logo.png";
        document.getElementById('data-logo').style.animation='none';
    }

    else{
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('empty').style.display="block";
    }
}

function show9mobile(){
    if (document.getElementById('nine-mobile').checked){
        document.getElementById('nine-mobile-pl').style.display="block";
        document.getElementById('empty').style.display="none";
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('data-logo').src="./9mobile-logo.png";
        document.getElementById('data-logo').style.animation='none';
    }

    else{
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('empty').style.display="block";
    }
}

function showGlo(){
    if (document.getElementById('glo').checked){
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('empty').style.display="none";
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('glo-pl').style.display="block";
        document.getElementById('data-logo').src="./glo-logo.jpg";
        document.getElementById('data-logo').style.animation='none';
    }

    else{
        document.getElementById('nine-mobile-pl').style.display="none";
        document.getElementById('mtn-pl').style.display="none";
        document.getElementById('airtel-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('glo-pl').style.display="none";
        document.getElementById('empty').style.display="block";
    }
}