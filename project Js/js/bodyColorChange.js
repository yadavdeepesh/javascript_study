console.log("buttons");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// console.log(buttons);
// console.log(body);
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        // checkColorIfElse(e.target.id);
        checkColorSwitch(e.target.id);
        //body.style.backgroundColor = e.target.id;
    });

});

function checkColorIfElse(color) {
    // way first if-else
    if (color == "grey") {
        body.style.backgroundColor = color;
    }
    else if (color == "red") {
        body.style.backgroundColor = color;
    }
    else if (color == "yellow") {
        body.style.backgroundColor = color;
    }
    else {
        body.style.backgroundColor = color;
    }
}
// way two switch case
function checkColorSwitch(color) {
    switch (color) {
        case 'grey':
            body.style.backgroundColor = color;
            break;
        case 'red':
            body.style.backgroundColor = color;
            break;
        case 'yellow':
            body.style.backgroundColor = color;
            break;
        case 'blue':
            body.style.backgroundColor = color;
            break;
        default:
            body.style.backgroundColor = color;
    }
}