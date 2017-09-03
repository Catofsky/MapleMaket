document.addEventListener("DOMContentLoaded", function(e) {
  window.chat_dialog = document.querySelector('#input > .input_text');
  window.content = document.querySelector('.messages .wrapper');

  chat_dialog.onkeypress = function (e) {
    if (e.keyCode === 13) {
      var text = chat_dialog.innerHTML.replace(/(\s|&nbsp;)+/g, ' ');
      chat_dialog.innerHTML = '';

      if (text === '' || text === ' ')
        return false;

      write(text);
      remove_unread();
      scroll_to_end();

      time_answer();

      return false;
    }
  }

});

window.messages_log = [];
window.last_message = 'you';

window.answered = 0;

function time_answer() {
  if (answered == 0) {
    setTimeout(function () {
      send_answer('Пошел нахуй');
      scroll_to_end();
      answered++;
    }, 5000);

    answered++;
  }

  if (answered == 2) {
    setTimeout(function () {
      send_answer('Я не шучу');
      scroll_to_end();
      answered++;
    }, 5000);

    setTimeout(function () {
      send_answer('(шучу)');
      scroll_to_end();
      answered++;
    }, 7000);

    answered++;
  }
}

function send_answer(text) {
  var b = document.createElement('div');
  b.className = 'message new_animation';

  setTimeout(function () {
    b.classList.remove('new_animation');
  }, 5);

  var c = document.createElement('div');
  c.className = 'you';
  c.innerHTML = text;

  if (last_message !== 'you') {
    c.className += ' first';

    var a = document.createElement('div');
    a.className = 'ava other';

    var im = document.createElement('img');
    im.src = 'img/ava2.png';

    a.appendChild(im);

    b.appendChild(a);

    last_message = 'you';
  }

  b.appendChild(c);
  content.append(b);
}

function write(text) {
  var b = document.createElement('div');
  b.className = 'message new_animation';

  setTimeout(function () {
    b.classList.remove('new_animation');
  }, 5);

  var c = document.createElement('div');
  c.className = 'me';
  c.innerHTML = text;

  if (last_message !== 'me') {
    c.className += ' first';

    var a = document.createElement('div');
    a.className = 'ava my';

    var im = document.createElement('img');
    im.src = 'img/ava1.png';

    a.appendChild(im);

    b.appendChild(a);

    last_message = 'me';
  }

  b.appendChild(c);
  content.append(b);
}

function remove_unread() {
  var unreads = document.querySelectorAll('.unread');

  if (unreads.length > 0) {
    for(var i = 0; i < unreads.length; i++)
      unreads[i].parentNode.removeChild(unreads[i]);
  }
}
