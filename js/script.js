'use strict';

//ADD/REMOVE CLASS ONLOAD
var onLoadMobile = function() {
  document.querySelector('.offset').classList.remove('col-offset-4');
};

var onLoadDesktop = function() {
  document.querySelector('.offset').classList.add('col-offset-4');
};

if (window.screen.width < 767) {
  onLoadMobile();
}

else {
  onLoadDesktop();
}
//ADD/REMOVE CLASS RESIZE WINDOW
window.addEventListener('resize', function() {
  if (window.screen.width < 767) {
    document.querySelector('.offset').classList.remove('col-offset-4');
  }
  else { 
    document.querySelector('.offset').classList.add('col-offset-4');
  }
});




/*window.addEventListener('resize', function () {
    
    if (window.screen.width < 767) {
        var offsetOff = document.querySelectorAll('.offset');
        for (var f = 0; f < offsetOff.length; f++) {
        offsetOff[f].classList.remove('col-offset-4');
        }
    }
    else {
        var offsetOn = document.querySelectorAll('.offset');
        for (var i = 0; i < offsetOn.length; i++) {
        offsetOn[i].classList.add('col-offset-4');
        }
    }
});
*/
/*window.addEventListener('resize', function() {
    if (window.screen.width < 767) {
      document.getElementById('test').classList.remove('col-offset-4');
    }
    else { 
      document.getElementById('test').classList.add('col-offset-4');
    }
  });*/

 /* var onStart = document.querySelectorAll('offset');
  for (var e = 0; e < onStart.length; e++) {
  onStart[e].classList.add('col-offset-4');
  }
  
  if (window.screen.width > 767) {
    onLoad();
  }*/