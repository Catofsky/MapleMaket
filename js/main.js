document.addEventListener("DOMContentLoaded", function(e) {

  window.sc = document.querySelector('.scrollbar');
  var wrapper = document.querySelector('.wrapper');
  var chat = document.querySelector('#chat');
  window.mes = document.querySelector('.messages');

  // var offset = mes.scrollTop;
  // var total = mes.scrollHeight;
  // var height = mes.clientHeight;

  var resize = function () {
    sc.style.left = (wrapper.offsetLeft + 704) + 'px';
    sc.style.height = (mes.clientHeight * mes.clientHeight / mes.scrollHeight) + 'px';
    sc.style.top = (89 + (mes.scrollTop * mes.clientHeight / mes.scrollHeight)) + 'px';
  }

  resize();
  window.onresize = resize;
  frame.onresize = function () {
    console.log('resize');
    resize();
  };

  mes.onscroll = function () {
    sc.style.top = (89 + (mes.scrollTop * mes.clientHeight / mes.scrollHeight)) + 'px';
  }

  sc.ondrag = function (e) {
    sc.style.top = sc.style.offsetTop + e.movementY + 'px';
  }

  sc.onmousedown = function f(e) {
    f.layerY = e.layerY;

    move(e);

    document.onmousemove = function(e) {
      if (e.buttons != 0)
        move(e);
      else
        end();
    }

    function move(e) {

      var but = mes.offsetHeight + mes.offsetTop;
      var top = 89;

      var y = e.pageY - f.layerY;

      if (y >= top && sc.offsetHeight + y <= but)
        sc.style.top = y + 'px';
      else
        if ((but - top) / 2 > e.pageY)
          sc.style.top = top + 'px';
        else
          sc.style.top = but - sc.offsetHeight + 'px';

       mes.scrollTop = (sc.offsetTop - top) * mes.scrollHeight / mes.clientHeight;
    }

    function end() {
      document.onmousemove = null;
      sc.onmouseup = null;
    }

    sc.onmouseup = function() {
      end();
    }
  }

});
