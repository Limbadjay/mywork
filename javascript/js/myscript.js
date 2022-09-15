/*var message = prompt("what is your name");
document.getElementById("title").innerHTML = message;

var message2 = prompt("what is your address");
document.getElementById("address").innerHTML = message2;

var city = document.getElementById("city").innerHTML;
alert(city);*/


function calculate_area()
{
    var length,width;
    length = document.getElementById("length");
    width = document.getElementById("width");
    console.log(length + " " + width);

    var area = parseInt(length) * parseInt(width);
    console.log(area);
    return document.getElementById("output").innerHTML = 'output is' + area;
}


