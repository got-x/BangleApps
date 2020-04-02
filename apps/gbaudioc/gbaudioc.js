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

function btn1() {
    displayText = "btn1";
    Bluetooth.println(JSON.stringify({t:"info", msg: displayText}));
    display();
}
function btn2() {
    displayText = "btn2";
    Bluetooth.println(JSON.stringify({t:"info", msg: displayText}));
    display();
}
function btn3() {
    displayText = "btn3";
    Bluetooth.println(JSON.stringify({t:"info", msg: displayText}));
    display();
}
function btn4() {
    displayText = "btn4";
    Bluetooth.println(JSON.stringify({t:"info", msg: displayText}));
    display();
}
function btn5() {
    displayText = "btn5";
    Bluetooth.println(JSON.stringify({t:"info", msg: displayText}));
    display();
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