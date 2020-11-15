// Get canvas element
let canvas = document.getElementById("board")

// Set the canvas drawing context
let ctx = canvas.getContext("2d")

// Call the resize function
resize()

function resize() {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
}

// last known position
let position =  {
    x:0,
    y:0
}

// set new posotion coordinates from mouse events
function setPosition(event) {
    position.x = event.clientX
    position.y = event.clientY
}

// Create the draw function
function draw(event) {
    // If mouse not clicked, dont draw
    if (event.buttons !== 1) {
        return
    } 
    
    // Get the color from the input
    let color = document.getElementById("hex-color").value

    //begin the drawing path
    ctx.beginPath()

    // set line props
    ctx.lineWidth = document.getElementById("pointer-width").value  // Line width
    ctx.lineCap = "round" // rounded end cap
    ctx.strokeStyle = color // line color

    // draw line
    ctx.moveTo(position.x, position.y) // from position
    setPosition(event) //speaks for itself
    ctx.lineTo(position.x, position.y) // to position

    // draw the line
    ctx.stroke()

}

// set window listener listening to resize
window.addEventListener("resize", resize)

// add event listeners for mouse [enter, move, down] events
window.addEventListener("mousemove", draw)
window.addEventListener("mousedown", setPosition)
window.addEventListener("mouseenter", setPosition)
/* function nothing() {
    return "Does Nothing"
} */