function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let amPm = amPmeridian(hours);
  hours = hourFormat(hours);
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  let clock = document.querySelector('.digital_clock');

  clock.innerHTML = `${hours} : ${minutes} : ${seconds} : ${amPm}`;
}

 function amPmeridian(time){
   let amPMformat = 'Am'
   if(time < 12){
     amPMformat = 'AM'
   } else {
    amPMformat = 'PM'
  }
  return amPMformat;
}

function hourFormat(time){
  if(time > 12){
  return  time = time - 12;
  } if (time == 0){
  return  time = 12
  }
}

function addZero(time){
  if(time < 12){
    return time = '0'+ time;
  } else{
    return time;
  }
}

showTime();
setInterval(showTime, 1000)
