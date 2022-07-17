const clock = document.querySelector("h2#clock");//finding document queryselector 

function getClock(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0"); 
  const second =  String(date.getSeconds()).padStart(2,"0");
  clock.innerText =`${hour}:${minutes}:${second}`; 
  

}

getClock(); // this is to reset the clock immediately
setInterval(getClock, 1000); //every 5 ssec it will show 5 second
