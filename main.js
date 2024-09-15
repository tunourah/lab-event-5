const width = document.getElementById('input');
const height = document.getElementById('input1');
const borderRadius = document.getElementById('input2');
const colorPicker = document.getElementById('input3'); 
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const box = document.getElementById('box');

btn.addEventListener('click', () => {
   
    if (width.value) {
        box.style.width = width.value.includes('%') || width.value.includes('px') ? width.value : width.value + 'px';
    }

    
    if (height.value) {
        box.style.height = height.value.includes('%') || height.value.includes('px') ? height.value : height.value + 'px';
    }

    
    if (borderRadius.value) {
        box.style.borderRadius = borderRadius.value + 'px';
    }

    
    if (colorPicker.value) {
        box.style.backgroundColor = colorPicker.value;
    }

     
});

btn1.addEventListener('click', () => {
   
    box.style.width = '30%';
    box.style.height = '40%';
    box.style.backgroundColor = 'blue';
    box.style.borderRadius = '0px';
    box.style.border = '1px solid black';   
});
