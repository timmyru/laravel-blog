let first = document.getElementById('first'),
    second = document.getElementById('second'),
    third = document.getElementById('third');

let btnFirst = document.getElementsByTagName('span')[0],
    btnSecond = document.getElementsByTagName('span')[1],
    btnThird = document.getElementsByTagName('span')[2];



let topThird = third.getBoundingClientRect().top;

btnFirst.addEventListener('click', function () {
    let topFirst = first.getBoundingClientRect().top;
    let scroll = document.documentElement.scrollTop;
    let diff = scroll - topFirst;
    let k=1;

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

    let duration = 1000;

    animate(function (timePassed) {
        diff = diff-diff/200*k;
        console.log(diff);
        k++;
        document.documentElement.scrollTo(0, diff);
    }, duration);
});

btnSecond.addEventListener('click', function () {
    let topSecond = second.getBoundingClientRect().top;
    let scroll = document.documentElement.scrollTop;
    let diff = scroll - topSecond;
    
    console.log(diff, topSecond);
    let k = 20;

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

    let duration = 1000;

    animate(function (timePassed) {
        smooth = diff - diff/20*k;
        console.log(smooth);
        
        if (k!=0) {
            k--;
        }
        document.documentElement.scrollTo(0, smooth);
    }, duration);
});