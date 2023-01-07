setInterval(() => {
    d = new Date();
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    rotateHour = 30*hour + min/2;
    rotateMin = 6*min;
    rotateSec = 6*sec;

    hours.style.transform = `rotate(${rotateHour}deg)`;
    minutes.style.transform = `rotate(${rotateMin}deg)`;
    seconds.style.transform = `rotate(${rotateSec}deg)`;

    // var audio = new Audio('Clock Tick Sound Effect.mp3');
    // audio.play();
}, 1000);