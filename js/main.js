var $btn = $('.btn');
var $btnFill = $('.btn path:last-child');
var $lines = $('.lines path');
var $letters = $('.engage path');

$btn.on('click', function () {
  $btnFill.toggleClass('btn-active');

  $lines.toggleClass('draw-lines');

  $letters.toggleClass('letters-in');
});
