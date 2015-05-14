var yoff = 0.0; // 2nd dimension of perlin noise
var waveHeight = mouseY;

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('contact-animation');
}

function draw() {
    //    background(255);
    clear();
    noStroke();
    fill("rgba(0, 0, 0, 0.2)");

    beginShape();
    var xoff = 0;

    // Iterate over horizontal pixels to draw one wave
    for (var x = 0; x <= width + 10; x += 10) {
        var y = map(noise(xoff, yoff), 0, 1, height - 400, height);
        //draw each dot along the wave
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.05;
    }
    //draw a point at the lower right corner of the screen
    vertex(width, height);
    //draw a point at the lower left corner of the screen
    vertex(0, height);
    //connect all dots along the wave, and the two points at the corner
    endShape();

    // increment y dimension for the next wave
    yoff += 0.01;
}

