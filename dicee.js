var number1 = Math.floor(Math.random() * 6) + 1;
var image = "dice" + number1 + ".png";
var folder = "images/" + image;
var all = document.querySelectorAll("img")[0];

all.setAttribute("src", folder);



var number2 = Math.floor(Math.random() * 6) + 1;
var image1 = "dice" + number2 + ".png";
var folder1 = "images/" + image1;
var all1 = document.querySelectorAll("img")[1];

all1.setAttribute("src", folder1);




if(number1 > number2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else if (number1 < number2){
    document.querySelector("h1").innerHTML = 'Player 2 wins!🚩';
}else {
    document.querySelector("h1").innerHTML = 'Draw!';
};

    // document.querySelector("img img1").setAttribute('src', `images/dice${n}.png`);

    // var m = Math.random() * 6;
    // m = Math.floor(m) + 1;
    // console.log(m);

    // document.querySelector('img2').setAttribute('src', `images/dice${m}.png`);
