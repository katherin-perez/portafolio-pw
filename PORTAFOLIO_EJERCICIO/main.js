let varx1 = document.getElementById("varx1");
let varx2 = document.getElementById("varx2");
let vary1 = document.getElementById("vary1");
let vary2 = document.getElementById("vary2");
let distance = 0;

calculateDistance();

function calculateDistance(){
    let x1 = varx1.value;
    let x2 = varx2.value;
    let y1 = vary1.value;
    let y2 = vary2.value;
    let resta1 = x2 - x1;
    let resta2 = y2 - y1;

    distance = Math.sqrt(Math.pow(resta1, 2)+Math.pow(resta2, 2));
    console.log(distance);
    window.alert("La distancia es "+ distance);
}