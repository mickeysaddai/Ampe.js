document.addEventListener("DOMContentLoaded", () => {
    // const main = document.getElementById('main')
    console.log('Ampe!!!')
})

const canvas = document.getElementById('canvas'); //canvas setup
const ctx = canvas.getContext('2d'); //allow us to use built in canvas methods
canvas.width = 600;
canvas.height = 400;

let angle = 0; //make player goes up or down
let hue = 0; 
let score = 0;
// let gamespeed = 2;

function boardsize(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    // ctx.fillRect(10, 10, 50, 50)
    // requestAnimationFrame(animate)
}
boardsize()




let player = {
    x: 300,
    y: 300,
    width: 20,
    height: 20

    // x_vel: 0,
    // y_vel: 0

}








// ctx.strokeRect(100, 100, 100, -100);
// ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(30, 30, 50, 50);

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');

//         ctx.fillRect(25, 25, 100, 100);
//         ctx.clearRect(45, 45, 60, 60);
//         ctx.strokeRect(50, 50, 50, 50);
//     }
// }