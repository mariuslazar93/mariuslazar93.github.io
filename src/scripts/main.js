import '../styles/sass/styles.scss';

// Handles smooth scrolling from top-nav elements
(function() {
  'use strict';

  init();

  function init() {
    var mainNavItem = document.querySelectorAll('.main-nav__item a');
    var slideItems = document.querySelectorAll('.decorated-title');
    var mainNavTrigger = document.getElementById('mobile-nav-trigger');

    mainNavItem.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.remove('open');
        var startPoint = this.href.indexOf('#');
        var href = this.href.slice(startPoint);
        var toElement = document.querySelector(href);
        scrollTo(toElement, 500);
      });
    });

    slideItems.forEach(function(item) {
      item.classList.add('active');
    });

    mainNavTrigger.addEventListener('click', function() {
      document.body.classList.toggle('open');
    });
  }

  function scrollTo(element, duration) {
    var elementY = element.offsetTop;
    var windowY = window.pageYOffset;
    var start = 0;
    var difference = elementY - element.scrollTop;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;

      var time = timestamp - start;
      var percent = Math.min(time / duration, 1);

      window.scrollTo(0, windowY + difference * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
})();
