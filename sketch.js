/// <reference path="./p5.global-mode.d.ts" />


var vertices = [];
function setup() {
    createCanvas(1530, 728);

    for (var i = 0; i < 100; ++i) {
        var v = createVector(random(width), random(height));
        vertices.push(v);
    }

}
function mousePressed() {
    var v = createVector(mouseX, mouseY);
    vertices.push(v);
}
function draw() {
    background(51);

    var visited = [];
    var unvisited = [...vertices];

    visited.push(unvisited[0]);
    unvisited.splice(0, 1);

    while (unvisited.length > 0) {

        var record = 100000;
        var vIndex;
        var uIndex;
        for (var i = 0; i < visited.length; ++i) {

            for (var j = 0; j < unvisited.length; ++j) {

                var v1 = visited[i];
                var v2 = unvisited[j];

                var d = dist(v1.x, v1.y, v2.x, v2.y);

                if (d < record) {
                    record = d;
                    vIndex = i;
                    uIndex = j;
                }

            }
        }

        line(visited[vIndex].x, visited[vIndex].y, unvisited[uIndex].x, unvisited[uIndex].y);

        visited.push(unvisited[uIndex]);
        unvisited.splice(uIndex, 1);

    }

    for (var i = 0; i < vertices.length; ++i) {

        fill(255);
        stroke(255);
        ellipse(vertices[i].x, vertices[i].y, 16, 16);

    }
}
