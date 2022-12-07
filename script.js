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

    colorPicker.oninput = (e) => setNewColor(e.target.value)
    colorBtn.onclick = () => setNewBtn('color')
    rainbowBtn.onclick = () => setNewBtn('rainbow')
    erasrerBtn.onclick = () => setNewBtn('eraser')
    clearBtn.onclick = () => reloadGrid()
    sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
    sizeSlider.onchange = (e) => changeSize(e.target.value)

    let mouseDown = false 
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

    function changeSize(value) {
        setNewSize(value)
        updateSizeValue(value)
        reloadGrid()
    }

    function updateSizeValue(value) {
        sizeValue.innerHTML = `${value} x ${value}`
    }

    function reloadGrid() {
        clearGrid()
        setupGrid(currentSize)
    }

    function clearGrid() {
        grid.innerHTML = ''
    }

    function setupGrid(size) {
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

    function changeColor(e) {
        if (e.type === 'mouseover' && !mouseDown) return 
        if (currentBtn === 'rainbow') {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        } else if (currentBtn === 'color') {
            e.target.style.backgroundColor = currentColor 
        }   else if (currentBtn === 'eraser') {
            e.target.style.backgroundColor = '#fefefe'
        }
    }
    