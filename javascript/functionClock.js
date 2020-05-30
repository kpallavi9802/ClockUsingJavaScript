let dateInfo;
let time;
let date;
setInterval(() => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateInfo = new Date();
    time = dateInfo.getHours() + ":" + dateInfo.getMinutes() + ":" + dateInfo.getSeconds();
    date = dateInfo.toLocaleDateString(undefined, options);
    display = time + "&nbsp;on&nbsp;" + date;
    document.getElementById('time').innerHTML = display;

}, 2000);

function clicked(){
    document.getElementById("btn").innerHTML="Visit Again";

}

function clicked1(){
    document.getElementById("displayTime").innerHTML="Visit Again";

}
