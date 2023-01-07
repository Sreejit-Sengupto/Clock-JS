setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    document.getElementById('hours').innerHTML = `<p>${hours} :</p>`
    document.getElementById('minutes').innerHTML = `<p>${minutes} :</p>`
    document.getElementById('seconds').innerHTML = `<p>${seconds}  </p>`
}, 1000);