// Set default values 
const default_color = '#000000'
const default_btn = 'color' 
const default_size = '16' 

let currentColor = default_color
let currentBtn = default_btn
let currentSize = default_size

// Functions to keep values relevent 
    function setNewColor(newColor) {
        currentColor = newColor 
    };

    function setNewBtn(newBtn) {
        activateBtn(newBtn)
        currentBtn = newBtn 
    };

    function setNewSize(newSize) {
        currentSize = newSize
    };

    // Cach DOM elements 
    const colorPicker = document.getElementById('colorPicker')
    const colorBtn = document.getElementById('colorBtn')
    const rainbowBtn = document.getElementById('rainbowBtn')
    const erasrerBtn = document.getElementById('eraserBtn')
    const clearBtn = document.getElementById('clearBtn')
    const sizeValue = document.getElementById('sizeValue')
    const sizeSlider = document.getElementById('sizeSlider')
    const grid = document.getElementById('grid')

    for (let i = 1; i < 257; i++) {
        const square = document.createElement('div');
        square.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        grid.appendChild(square);
}
   
