var btn_left = document.getElementById("philosophy-left-button");
var btn_right = document.getElementById("philosophy-right-button");
var counter = 0;
var max_text = 3;

btn_left.style.opacity = 0;

function nextText(btn) {
    if (btn === "left" && counter != 0) { 
        counter--; 
        console.log(counter);
    } else if (btn === "right" && counter != max_text) {
        counter++;
        console.log(counter);
    }

    if (counter == 0) { 
        btn_left.style.opacity = 0;
        btn_left.onClick = false;
    } else if (counter === max_text) {
        btn_right.style.opacity = 0;
        btn_right.onClick = false;
    } else {
        btn_left.style.opacity = .65;
        btn_right.style.opacity = .65;
        btn_left.onClick = true;
        btn_right.onClick = true;
    }
}