// Temperature Conversion

const number = document.getElementById(`textBox`);
const radio1 = document.getElementById(`toFarenheite`);
const radio2 = document.getElementById(`toCelsius`);
const Result = document.getElementById(`result`)

let temp;

function convert() {

    if(radio1.checked) {
        temp = Number(number.value);
        temp = temp * 9 / 5 + 32 ;
        Result.textContent = temp.toFixed(1) + "F";
    }
    else if(radio2.checked) {
        temp = Number(number.value);
        temp = (temp - 32) * (5/9);
        Result.textContent = temp.toFixed(1) + "C";

    }
    else {
        Result.textContent = " Select a Unit";
    }
}