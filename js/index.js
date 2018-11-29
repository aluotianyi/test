var bg = document.getElementById('background');
// linear-gradient(160deg, #ff0064 20%,#ca00ff 80%);
var deg = 160;
setInterval(() => {
  console.log(bg)
  if (deg <= 360) {
    deg++
  } else {
    deg = 160
  }
  bg.style.background="linear-gradient(+" + deg + "deg+,#ff006420% ,#ca00ff 80%)";
}, 1)