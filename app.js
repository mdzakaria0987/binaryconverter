const binaryNum = document.querySelector('.binaryNum');
const submit = document.querySelector('#submitBtn');
function binary(e){
    const num = document.querySelector('.indexNum').value;
    if(num === ''){
        alert('Invalid number!')
    }else if(num < 0) {
        alert('please enter a positive number')
    }

    binaryNumber = Number(num).toString(2);
binaryNum.innerText = binaryNumber;
}



submit.addEventListener('click', binary);
