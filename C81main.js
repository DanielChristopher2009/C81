canvas = document.getElementById("my_canvas")
ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 2
ctx.arc(200, 200, 40, 0, 2 * Math.PI)
ctx.stroke()

function circle(mouseX, mouseY) {
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 2
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI)
    ctx.stroke()
} 
canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e){
    mouseX=e.clientX-canvas.offsetLeft
    mouseY=e.clientY-canvas.offsetTop
    circle(mouseX, mouseY) 
}