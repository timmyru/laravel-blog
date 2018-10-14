document.body.style.fontSize = '50px';
let timerSpan = document.createElement('SPAN');
document.body.appendChild(timerSpan);
timerSpan.style.cssText = "position: absolute;right:0";

function timer() {
    let date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    if (hours.length == 1) {
        hours = 0 + '' + hours;
    }

    if (minutes.length == 1) {
        minutes = 0 + '' + minutes;
    }

    if (seconds.length == 1) {
        seconds = 0 + '' + seconds;
    }

    
    timerSpan.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(timer, 1000);

function animate(draw, duration) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
        if (timePassed > duration) {
            timePassed = duration;
        }

        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }

    });
}

let duration = 4000,
    color = 0;

animate(function (timePassed) {
    let left = timerSpan.style.left.replace('px','');  
    timerSpan.style.left = timePassed / 10 + 'px';
    timerSpan.style.top = timePassed / 20 + 'px';
    document.body.style.fontSize = timePassed / 20 + 'px';
    document.body.style.color = `rgb(${color-40},${color-10},${color-30})`;
    color = color+0.5;
}, duration);