var img;
var painters = [];
var pixelSlider;

function preload() {
    img = loadImage('img/land.jpeg');
}

function setup() {
    createP('Brush Size:');
    pixelSlider = createSlider(0, 10, 1);
    createP('<br>');

    createCanvas(640, 480);
    img.resize(width, height);

    init();
}

function draw() {
    pixelSize = pixelSlider.value();

    for (var i = 0 ; i < painters.length; i++) {
        fill(painters[i].getColor());
        painters[i].show();
        painters[i].update();
    }

    if (frameCount % 1000 === 0) {
        background(255);
        init();
    }
}

function init() {
    painters = [];

    for (var i = 0 ; i < 300; i++) {
        painters.push(new Painter(
                            createVector(
                                random(-10, 10),
                                random(-10, 10)
                            )
                        )
                    );
    }
}