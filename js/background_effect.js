
class Particle {
    constructor(x, y, vx, vy, r){
        this.posX = x;
        this.posY = y;
        this.velX = vx;
        this.velY = vy;
        this.r = r;
    }
    draw(ctx, color)
    {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.stroke();
        this.posX += this.velX;
        this.posY += this.velY;
        // add some acceleration
        if (this.velX > 0) {
            this.velX -= 0.01;
        }
        if (this.velX < 0) {
            this.velX += 0.01;
        }
    }

    edge(width, height)
    {
        if (this.posX > width) {
            this.posX = 0;
        }
        if (this.posY > height) {
            this.posY = 0;
        }
        if (this.posX < 0) {
            this.posX = width;
        }
        if (this.posY < 0) {
            this.posY = height;
        }
    }
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var particles = [];
var mousePoses = [
    {
        x: 0,
        y: 0
    },
    {
        x: 0,
        y: 0
    },
    {
        x: 0,
        y: 0
    }
];

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mouseHandler(event) {
    if (mousePoses.length > 2) {
        mousePoses.shift();
    }
    mousePoses.push(getMousePos(canvas, event));
    // console.log(mousePoses);
}

function setup()
{
    canvas.addEventListener("mousemove", mouseHandler);
    canvas.width = document.body.clientWidth - 4;
    canvas.height = document.body.clientHeight;

    for (var i = 0; i < 1024; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const vx = Math.random() * 2 + 0.1;
        const vy = Math.random() * 2 + 0.1;
        const r = 1.4;
        particles.push(new Particle(x, y, vx, vy, r));
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        p.draw(ctx, PARTICAL_COLORS); // draw particle
        p.edge(canvas.width, canvas.height); // edge control of particle
        
        // slide effect on particles via mouse move
        var diff = mousePoses[1]['x'] - mousePoses[0]['x'];
        if (Math.abs(p.velX) < 4.0) {
            p.velX -= diff * 0.001;
        }

    })
}

setup();
setInterval(draw, 20);


