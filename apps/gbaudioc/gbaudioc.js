function initializeApp() {
    display();
    setWatch(btn1, BTN1, {repeat:true});
    setWatch(btn2, BTN2, {repeat:true});
    setWatch(btn3, BTN3, {repeat:true});
    setWatch(btn4, BTN4, {repeat:true});
    setWatch(btn5, BTN5, {repeat:true});
    display();
}

var displayText = "gbAudicC";
var lastAction = "";
var play = true;

function btn1() {
    lastAction = "volumneup";
    Bluetooth.println(JSON.stringify({t:"music", n: lastAction}));
    refreshMessage();
}
function btn2() {
    lastAction = play ? "pause" : "play";
    play = !play;
    Bluetooth.println(JSON.stringify({t:"music", n: lastAction}));
    refreshMessage();
}
function btn3() {
    lastAction = "volumedown";
    Bluetooth.println(JSON.stringify({t:"music", n: lastAction}));
    refreshMessage();
}
function btn4() {
    lastAction = "previous";
    Bluetooth.println(JSON.stringify({t:"music", n: lastAction}));
    refreshMessage();
}
function btn5() {
    lastAction = "next";
    Bluetooth.println(JSON.stringify({t:"music", n: lastAction}));
    refreshMessage();
}

function refreshMessage() {
    E.showMessage(lastAction,displayText);
}

function display() {
    g.clear();
    g.setFontAlign(0,0); // center font
    g.setFont("Vector",30);
    // draw the current value
    g.drawString(displayText, g.getWidth()/2, g.getHeight()/2);
    // this keeps the watch LCD lit up
    g.flip();
}

initializeApp();