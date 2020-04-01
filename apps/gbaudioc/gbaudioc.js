function init() {
    setWatch(btn1, BTN1, {repeat:true});
    setWatch(btn2, BTN2, {repeat:true});
    setWatch(btn3, BTN3, {repeat:true});
    setWatch(t1, BTN4, {repeat:true});
    setWatch(t2, BTN5, {repeat:true});
    display();
}

function btn1() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"btn1"}));
}
function btn2() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"btn2"}));
}
function btn3() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"btn3"}));
}
function btn4() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"btn4"}));
}
function btn5() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"btn5"}));
}

function display() {
    g.clear();
    g.setFontAlign(0,0); // center font
    g.setFont("Vector",30);
    // draw the current value
    g.drawString("gbAudicC", g.getWidth()/2, g.getHeight()/2);
    // this keeps the watch LCD lit up
    g.flip();
}

init();