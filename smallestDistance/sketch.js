var n = 6;

var plots = [];
var indexes = [];
var bestIndexes = [];

var minLength = 100000;
var p;
var fin;

function setup() {
    createCanvas(400, 400);
    createPlots();

    p = createP();
}

function draw() {
    background(51);

    var length = calculateLength();
    if (minLength > length) {
        minLength = length;
        bestIndexes = indexes.slice();
        p.html("Best Distance: " + nf(minLength, 6, 2));

    }

    drawBest();
    drawLines();
    incrementIndexes();
}

function createPlots() {
    for (var i = 0; i < n; i++) {
        plots.push(new Plot());
        plots[i].show();
        indexes.push(i);
    }
}

function drawLines() {
    for (var i = 0; i < indexes.length - 1; i++) {
        stroke(255);
        strokeWeight(1);
        line(
            plots[indexes[i]].pos.x,
            plots[indexes[i]].pos.y,
            plots[indexes[i + 1]].pos.x,
            plots[indexes[i + 1]].pos.y
            );
    }
}

function drawBest() {
    for (var i = 0; i < bestIndexes.length - 1; i++) {
        stroke(255, 0, 100);
        strokeWeight(3);
        line(
            plots[bestIndexes[i]].pos.x,
            plots[bestIndexes[i]].pos.y,
            plots[bestIndexes[i + 1]].pos.x,
            plots[bestIndexes[i + 1]].pos.y
            );
    }
}

function calculateLength() {
    var sum = 0;

    for (var i = 0; i < indexes.length - 1; i++) {
        sum +=  dist(
                    plots[indexes[i]].pos.x,
                    plots[indexes[i]].pos.y,
                    plots[indexes[i + 1]].pos.x,
                    plots[indexes[i + 1]].pos.y
                    );
    }

    return sum;
}

function isUnique() {
    for (var i = 0; i < indexes.length - 1; i++) {
        for (var j = i + 1; j < indexes.length; j++) {
            if (indexes[i] == indexes[j]) {
                return false;
            }
        }
    }

    return true;
}

function incrementIndexes() {
    do {
        checkFinished();
        indexes[indexes.length - 1]++;

        for (var i = indexes.length - 1; i >= 0; i--) {
            if (indexes[i] > indexes.length - 1) {
                indexes[i] = 0;
                indexes[i - 1]++;
            }
        }
    } while (!isUnique());
}

function checkFinished() {
    var done = true;

    for (var i = 0; i < indexes.length; i++) {
        if (indexes[i] != indexes.length - 1) {
            done = false;
            break;
        }
    }

    if (done == true) {
        fin = createP();
        fin.html("Finished!");
        noLoop();
    }
}