document.addEventListener("DOMContentLoaded", function(event) {

  var block = document.querySelector('.messages');

  speed = 0;

  setInterval(function () {
    block.scrollTop += speed;

    if (Math.floor(speed) > 0)
      speed--;
    else if (Math.floor(speed) < 0)
      speed++;

  }, 16);

  block.onwheel = function (e) {
    if ((speed > 0 && e.deltaY < 0) || speed < 0 && e.deltaY > 0)
      speed = 0;

    speed += e.deltaY / 16;
  }

});
