function changeColor() {
    let backgroundColor = document.body.style.backgroundColor;

    if(backgroundColor === 'rgb(221, 238, 255)') {
        console.log('1.Set background to rgb(255, 238, 221)');
        document.body.style.backgroundColor = 'rgb(255, 238, 221)';
    } else {
        console.log('2.Set background to rgb(221, 238, 255)');
        document.body.style.backgroundColor = 'rgb(221, 238, 255)';
    }
}

function makeButton2Active() {
    console.log('clicked #1');
    document.getElementById('color').addEventListener('click', changeColor);
}

