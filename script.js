document.getElementById('generate-pin').addEventListener('click', function(event){
    
    let pin = Math.floor(1000 + Math.random() * 9000);
    let pinString = pin + ' ';
    let pinField = document.getElementById('input-pin');
    pinField.value = pinString;
});
let inputText = document.getElementById('inputText');
function calculate(num){
    inputText.value+= num;
}

function clr(){
    inputText.value = " ";
}

function del(){
    inputText.value = inputText.value.slice(0, -1);
}

document.getElementById('submitBtn').addEventListener('click', function(event){
    const generatePin  =parseInt(document.getElementById('input-pin').value);
    const typePin = parseInt(document.getElementById('inputText').value);
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    let count = parseInt(document.getElementById('count').innerText);
    const countTag = document.getElementById('countTag');
    if(generatePin == typePin)
    {
        success.style.display = 'block';
        fail.style.display = 'none';
        count--;
        document.getElementById('count').innerText = count;
        countTag.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        fail.style.display = 'block';
        count--;
        document.getElementById('count').innerText = count;
    }
});