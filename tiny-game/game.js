// initial state for our game
px = py = 10 //init place for snake head
gs = ts = 20 // init pos for snake body 
ax = ay = 15 // init pos for apple

// only values manipulated w/key presses (directional values)
xv = yv = 0  // x-value and y-value

// { x: px, y: py}
body = [] // add to it as you eat apples
segments = 5 


// logic for game
const game = () => {
    px += xv
    py += yv

    // init render is black
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#2ED9EB'

    // if head is < 0, move to other side of screen
    if (px < 0) {
        px = ts - 1
    }

    // if head is too far right, set it to 0
    if (px > ts -1) {
        px = 0
    }

    // same for y-axis
    if (py < 0) {
        py = ts - 1
    }

    if (py > ts - 1) {
        py = 0
    }


    // color each segment of the body
    for (let i = 0; i < body.length; i++) {
        ctx.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs - 2)

        // if head of snake intersects body, reset segements to initial state
        if (body[i].x === px && body[i].y === py) {
            segments = 5
        }
    }

    body.push({x: px, y: py}) // fill in head of snake

    // keep segments and body.length equal
    while(body.length > segments) {
        body.shift()
    }

    // eat an apple
    if (ax === px && ay === py) {
        segments++
        //set new apple
        ax = Math.floor(Math.random() * ts)
        ay = Math.floor(Math.random() * ts)
    }

    // create apple
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2)

}


// fn to recognize key press / control D-Pad
// manipulates xv and xy
const keyDown = e => {
    // console.log(e.keyCode)

    switch(e.keyCode) {
        case(65): // a
            xv = -1
            yv = 0
            break
        case(87):
            xv = 0
            yv = -1
            break
        case(68):
            xv = 1
            yv = 0
            break
        case(83):
            xv = 0
            yv = 1
            break
    }
}

// fn to initialize the game
const init = () => {
    canvas = document.getElementById('game') // grab canvas // globally hoisted
    ctx = canvas.getContext('2d') // declare context
    document.addEventListener('keydown', keyDown)
    setInterval(game, 1000 / 15) // speed snake moves (1000/15 is randomish)
}

// window.onload = init() // same as DOMContentLoaded event listener

document.addEventListener("DOMContentLoaded", init)