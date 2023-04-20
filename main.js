


var el = document.getElementById('time-0')


var time = () => {
    let date = new Date();
    el.innerHTML = date.toLocaleTimeString();
};
time()
setInterval(time,1000);


