'use strict'

module.exports = function () {
  document.onkeydown = function (e) {
    e = e || window.event

    if (e.keyCode === 39) {
      forward()
    } else if (e.keyCode === 37) {
      back()
    }
  }
}

var forward = () => {
  var $old = $('#slide-nav a.active')
  var $new = $old.parent().next().find('a')
  if ($new.get(0)) {
    $old.removeClass('active')
    $new.get(0).click()
  }
}

var back = () => {
  var $old = $('#slide-nav a.active')
  var $new = $old.parent().prev().find('a')
  if ($new.get(0)) {
    $old.removeClass('active')
    $new.get(0).click()
  }
}
