let minutesHand = document.getElementById('minutes-hand');
let hourHand = document.getElementById('hour-hand');
let secondsHand = document.getElementById('seconds-hand');

let rotateHands = ()=>{
      let date  = new Date();
      rotateSecondsHand(date);
      rotateMinutesHand(date);
      rotateHourHand(date);
}

let rotateSecondsHand = (date)=>{
    let seconds = date.getSeconds()*6;
    secondsHand.style.rotate  = seconds+"deg";
}

let rotateMinutesHand = (date)=>{
    let minutes = date.getMinutes()*6;
    minutesHand.style.rotate  = minutes+"deg";
}

let rotateHourHand = (date)=>{
    let hour = ((date.getHours()+1)/24)*360;
    hourHand.style.rotate  = hour+"deg";
    console.log(hour)
}

setInterval(rotateHands,1000);
