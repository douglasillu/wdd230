// DOM 

//declare and instantiate a variable to hold your name
let myName = 'Douglas Josue Illú Cos';
//place the value of the name variable into the HTML file
document.querySelector('#name2').textContent= myName ;
//modifycation date and time 
let oLastModif = new Date(document.lastModified);
document.querySelector('#modify').textContent= oLastModif ;
// mobile screenshots
let Picture1 = 'imagesl2/lds.jpg';
document.querySelector('#img').setAttribute('src', Picture1);
let Picture2 = 'imagesl2/apple.jpg';
document.querySelector('#img2').setAttribute('src', Picture2);
let Picture3 = 'imagesl2/weather.jpg';
document.querySelector('#img3').setAttribute('src', Picture3);