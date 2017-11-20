$(document).ready(() => {
  const allTrue = [true, true, true, true, true, true, true];
  let [cPlay, dPlay, ePlay, fPlay, gPlay, aPlay, bPlay] = allTrue;
  const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  const play = function play(note) {
    $(`#${note}Audio`).trigger('load');
    $(`#${note}Audio`).trigger('play');
  };

  $('.instrument').on('click', 'button', function () {
    const note = $(this)[0].innerHTML;
    play(note);
  });

  $('body').on('keydown', (event) => {
    const note = event.key;
    if (notes.includes(note) && eval(`${note}Play`)) {
      $(`.${note}`).addClass('active');
      play(note);
      eval(`${note}Play = false`);
    }
  });

  $('body').on('keyup', (event) => {
    const note = event.key;
    $(`.${note}`).removeClass('active');
    if (notes.includes(note)) {
      eval(`${note}Play = true`);
    }
  });
});
