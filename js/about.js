console.log("sketch.js loaded");

var waves = [];

var yoff = 0.0; // 2nd dimension of perlin noise
var waveHeight = mouseY;

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('myP5Container');
}

function draw() {
    clear();

    for (var i = 0; i < bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
    }
}

function draw() {
    clear();
    for (var i = 0; i < bugs.length; i++) {
        waves[i].move();
        waves[i].recede();
        waves[i].display();
    }

}

function mouseClicked() {
    bugs.push(new Jitter());
};


function Wave() {
    this.magnitude = mouseY;
    this.fluctuate = 0.0;
    this.alpha = 0.5;

    this.move() {
        this.fluctuate += 0.01;
    }

    this.recede() {
        this.magnitude -= 0.01;
        this.alpha -= 0.01;
    }

    this.display() {
        beginShape();
        var xoff = 0;

        // Iterate over horizontal pixels to draw one wave
        for (var x = 0; x <= width + 10; x += 10) {
            var y = map(noise(xoff, yoff), 0, 1, magnitude, height);
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
    }
}