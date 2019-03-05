let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt, img;

function setup() {
    
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;


    cnv = createCanvas(400, 400);
    background('red');
    txt = createElement("h5", "Say something..")
        .position(40, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myVoice = new p5.Speech();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString.split(' ').pop();
        resultP.html(sentence);
        if (sentence.includes("idiot")) {
            switchImage('img/1200px-Donald_Trump_official_portrait');
        }
        if (sentence.includes("Coco")) {
            switchImage('img/kakao-vitamin-d-quelle-teaser.jpg');
        }
        if (sentence.includes("like")) {
            switchImage('img/348-8444.jpg');
        }
        if (sentence.includes("want")) {
            switchImage('img/348-8444.jpg');
        }
        if (sentence.includes("life")) {
            switchImage('img/348-8444.jpg');
        }
        if (sentence.includes("Denmark")){
            switchImage('img/minherre.png');
            myVoice.speak('Der er et yndigt land, det står med brede bøge, nær salten østerstrand,nær salten østerstrand. Det bugter sig i bakke, dal, det hedder gamle Danmark, og det er Frejas sal, og det er Frejas sal. Der sad i fordums tid, de harniskklædte kæmper, udhvilede fra strid, udhvilede fra strid. Så drog de frem til fjenders mén, nu hvile deres bene, bag højens bautasten, bag højens bautasten. Det land endnu er skønt, thi blå sig søen bælter, og løvet står så grønt og løvet står så grønt. Og ædle kvinder, skønne mør og mænd og raske svende, bebo de danskes øer, bebo de danskes øer. Hil drot og fædreland!, Hil hver en danneborger, som virker, hvad han kan som virker, hvad han kan!, Vort gamle Danmark skal bestå, så længe bøgen spejler, sin top i bølgen blå, sin top i bølgen blå. Vort gamle Danmark skal bestå, så længe bøgen spejler, sin top i bølgen blå, sin top i bølgen blå.');
        }
        if (sentence.includes("Kommunikation")){
            switchImage('img/cand-hum-kommunikation-it-l.jpeg');
        }
        if (sentence.includes("Programing")){
            switchImage('img/Wyvern-programming-languages-in-one.jpg');
        }

  
    }
}

function switchImage(url){
    if(img == undefined){
        img = createImg(url)
        .position(0, 0)
        .style("width:300px;height:300px");
    }else{
        img.attribute('src', url)
    }
}

