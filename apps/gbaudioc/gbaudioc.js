function init() {
    setWatch(btn1, BTN1);
    setWatch(btn2, BTN2);
    setWatch(btn3, BTN3);
    Bangle.on('touch', function(b) {
      if (b == 1)
        t1();
      else
        t2();
    });
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
function t1() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"t1"}));
}
function t2() {
    Bluetooth.println(JSON.stringify({t:"info", msg:"t2"}));
}

function display() {
    g.clear();
    g.setFontAlign(0,0); // center font
    g.setFont("Vector",30);
    // draw the current counter value
    g.drawString(gbAudicC, g.getWidth()/2, g.getHeight()/2);
    // optional - this keeps the watch LCD lit up
    g.flip();
}

init();