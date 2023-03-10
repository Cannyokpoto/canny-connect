let time = new Date().getHours();

let greet;

if (time < 12){
    greet = 'Good Morning!';
}

else if (time <= 16){
    greet = 'Good Afternoon!';
}

else {
    greet = 'Good Evening!';
}

document.getElementById('greet').innerHTML = greet;