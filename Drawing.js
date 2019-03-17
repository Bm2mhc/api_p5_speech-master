//Make a small drawing program with p5 speech 
//reference: http://ability.nyu.edu/p5.js-speech/
//Cloned from github.com/simmoe/api_p5_speech/

let myRec, browserCompatible, pen, direction, displayWord, timer;
let dick = false;
let LOL = false;


function setup() {
    cnv = createCanvas(800, 600);
    background('black');
    //Check browser compatibility
    browserCompatible = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;
    //If compatible browser - instantiate 
    if (browserCompatible !== undefined) {
        myRec = new p5.SpeechRec();
        myRec.continuous = true;
        myRec.interimResults = true;
        myRec.onResult = showResult;
        myRec.start();
    }
    displayWord = createDiv();
    pen = {
        x: width / 2,
        y: height / 2,
        size: 5,
        col: color(255, 255, 255),
        show: function () {
            noStroke();
            fill(this.col),
                ellipseMode(CENTER),
                ellipse(this.x, this.y, this.size, this.size)
        },
        bounce: function () {
            this.x = this.x < 0 ? 0 : this.x > width ? width : this.x;
            this.y = this.y < 0 ? 0 : this.y > height ? height : this.y;


        }
    }
    console.log("pen findes, og dens x værdi er: " + pen.x);
}


function draw() {
    if (direction == "left") pen.x -= 1;
    if (direction == "up") pen.y -= 1;
    if (direction == "down") pen.y += 1;
    if (direction == "right") pen.x += 1;
    if (direction == "dick") {
        if (!dick) {
            dick = true;
            timer = millis();
        }
        let time = millis() - timer;

        if (time < 6000) {
            pen.x ++;
        }
        if (time > 6000 && time < 6500) {
            pen.y++;
        }
        if (time > 6500 && time < 12500) {
            pen.x--;
        }
        if (time > 12500 && time < 13500) {
            pen.y++;
        }
        if (time > 13500 && time < 14500) {
            pen.x--;
        }
        if (time > 14500 && time < 16000){
            pen.y--;
        }
        if (time > 16000 && time < 17000){
            pen.x++;
        }
        if (time > 17000) {
            houseDrawing = false;
        }
    }
    if (direction == "LOL") createDiv("LOL");

    pen.bounce();
    pen.show();
}



function showResult() {
    if (myRec.resultValue == true) {
        word = myRec.resultString.split(' ').pop();
        displayWord.html(word.toLowerCase());
        switch (word) {
            case 'left':
            case 'lift':
                direction = "left"
                break;
            case 'right':
                direction = "right"
                break;
            case 'up':
                direction = "up"
                break;
            case 'down':
                direction = "down"
                break;
            case 'bigger':
                pen.size += 1;
                break;
            case 'bigger':
                pen.size -= 1;
                break;
            case 'did':
            case 'dik':
            case 'dick':
                direction = "dick"
                break;
            case 'laugh':
            case 'lol':
                direction = "LOL"
                break;
            default:
                direction = "stop"
        }
    }
}