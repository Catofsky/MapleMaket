document.addEventListener("DOMContentLoaded", function(e) {
  window.chat_dialog = document.querySelector('#input > .input_text');
  window.content = document.querySelector('.messages .wrapper');

  chat_dialog.focus();

  chat_dialog.onkeypress = function (e) {
    if (e.keyCode === 13) {
      var text = chat_dialog.innerHTML.replace(/(\s|&nbsp;)+/g, ' ');
      chat_dialog.innerHTML = '';

      if (text === '' || text === ' ')
        return false;

      write(text, 'me');
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
      write('Пошел нахуй', 'you');
      scroll_to_end();
      answered++;
    }, 5000);

    answered++;
  }

  if (answered == 2) {
    setTimeout(function () {
      write('Я не шучу', 'you');
      scroll_to_end();
      answered++;
    }, 5000);

    setTimeout(function () {
      write('(шучу)', 'you');
      scroll_to_end();
      answered++;
    }, 7000);

    answered++;
  }
}

function write(text, from) {
  var b = document.createElement('div');
  b.className = 'message new_animation';

  setTimeout(function () {
    b.classList.remove('new_animation');
  }, 5);

  var c = document.createElement('div');
  c.className = from;
  c.innerHTML = text;

  if (last_message !== from) {
    c.className += ' first';

    var a = document.createElement('div');
    a.className = from === 'me' ? 'ava my' : 'ava other';

    var im = document.createElement('img');
    im.src = from === 'me' ? 'img/ava1.png' : 'img/ava2.png';

    a.appendChild(im);

    b.appendChild(a);

    last_message = from;
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
