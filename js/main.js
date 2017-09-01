document.addEventListener("DOMContentLoaded", function(e) {
  
  window.sc = document.querySelector('.scrollbar');
  var chat = document.querySelector('#chat');
  window.mes = document.querySelector('.messages');

  // var offset = mes.scrollTop;
  // var total = mes.scrollHeight;
  // var height = mes.clientHeight;

  var resize = function () {
    sc.style.left = (chat.offsetLeft + 703) + 'px';
    sc.style.height = (mes.clientHeight * mes.clientHeight / mes.scrollHeight) + 'px';
    sc.style.top = (89 + (mes.scrollTop * mes.clientHeight / mes.scrollHeight)) + 'px';
  }

  resize();
  window.onresize = resize;

  mes.onscroll = function () {
    sc.style.top = (89 + (mes.scrollTop * mes.clientHeight / mes.scrollHeight)) + 'px';
  }

  sc.ondrag = function (e) {
    console.log(e);
    sc.style.top = sc.style.offsetTop + e.movementY + 'px';
  }

  sc.onmousedown = function f(e) {
    console.log(e);

    f.layerY = e.layerY;

    move(e);

    document.onmousemove = function(e) {
      if (e.buttons != 0)
        move(e);
      else
        end();
    }

    function move(e) {
      var y = e.pageY - f.layerY;
      if (y >= 89)
        sc.style.top = y + 'px';
      else
        sc.style.top = '89px';
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

