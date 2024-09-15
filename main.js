
const width  = document.getElementById('input');
const height = document.getElementById('input1');
const btn    = document.getElementById('btn');
const border = document.getElementById('input2');
const clear = document.getElementById('clear');

btn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.style.width = width.value + 'px';
    div.style.color = 'blue';
    
    div.style.height = height.value + 'px';
    div.style.border = border.value + 'px solid black';
    document.body.appendChild(div);
} );
 