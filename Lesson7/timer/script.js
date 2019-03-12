function Time_now() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    output = hours + ":" + minutes + ":" + seconds;

    //output
    let para = document.createElement("h1");
    para.textContent = '123' ;
    document.body.appendChild(para);
}

Time_now();