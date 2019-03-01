let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
let img, imageholder, minherre;
let myVoice;

function setup() {
    minherre = loadImage('img/minherre.png');
    img = loadImage('img/kakao-vitamin-d-quelle-teaser.jpg');
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(400, 600);
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
        myVoice = new p5.Speech();
        myVoice.setLang('da-DK');
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.default_language = 'da-DK';
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {
  
}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

        if (sentence.includes("Coco")) {
            image(img, 0, height / 2, img.width / 2, img.height / 2);
        } else if (sentence.includes("Denmark")){
            image(minherre, 0, height/2, minherre.width/2, minherre.height/2);
            myVoice.speak('Der er et yndigt land, det står med brede bøge, nær salten østerstrand,nær salten østerstrand. Det bugter sig i bakke, dal, det hedder gamle Danmark, og det er Frejas sal, og det er Frejas sal. Der sad i fordums tid, de harniskklædte kæmper, udhvilede fra strid, udhvilede fra strid. Så drog de frem til fjenders mén, nu hvile deres bene, bag højens bautasten, bag højens bautasten. Det land endnu er skønt, thi blå sig søen bælter, og løvet står så grønt og løvet står så grønt. Og ædle kvinder, skønne mør og mænd og raske svende, bebo de danskes øer, bebo de danskes øer. Hil drot og fædreland!, Hil hver en danneborger, som virker, hvad han kan som virker, hvad han kan!, Vort gamle Danmark skal bestå, så længe bøgen spejler, sin top i bølgen blå, sin top i bølgen blå. Vort gamle Danmark skal bestå, så længe bøgen spejler, sin top i bølgen blå, sin top i bølgen blå.');
        }

    }
}