// variable stores calculator result
var calcResult;

// object for canvas heading
var cavasObj = {
    Styling: 'Shopping-List',
    Calculator: 'Calculator',
    Clock: 'Clock'
};
// Event handling for all buttons in id buttons 
var theButton = document.querySelector('#buttons');
theButton.addEventListener('click', calcMe);
function calcMe(e) {
    e.preventDefault();
    var numberOne = parseInt(document.getElementById('input1').value);
    var numberTwo = parseInt(document.getElementById('input2').value);
    if (e.target !== e.currentTarget) {
        var switchVal = e.target.id;
        // getDiv variable holds the div id to print the result
        var getDiv = switchVal + 'Res';
        switch (switchVal) {
            case 'add':
                calcResult = numberOne + numberTwo;
                break;
            case 'subtract':
                calcResult = numberOne - numberTwo;
                break;
            case 'multiply':
                calcResult = numberOne * numberTwo;
                break;
            case 'divide':
                calcResult = numberOne / numberTwo;
                break;
            default:
                break;
        }
        document.getElementById(getDiv).innerHTML = calcResult;
    }
}
// radio buttons handling
var radioBut = document.querySelector('#form');
radioBut.addEventListener('click', showDiv);
//show/hide sections based on user choice
function showDiv(e) {
     if(e.target.nodeName==='INPUT'){
    e.preventDefault();
    document.getElementById('Calculator').style.display = 'none';
    document.getElementById('Styling').style.display = 'none';
    document.getElementById('Clock').style.display = 'none';
    var show = document.getElementById(e.target.value);
    show.style.display = 'block';

    drawCanvas(e.target.value);
     }
}

//using canvas to write heading based on user choice Calculator/Styling/Time 
function drawCanvas(id) {
    var covaId = 'canv' + id;
    var canvas = document.getElementById(covaId);
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(cavasObj[id], canvas.width / 2, canvas.height / 2);
}

