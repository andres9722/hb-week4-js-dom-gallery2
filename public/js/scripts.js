(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _galleryPoo = require('./modules/gallery-poo');

var gal = new _galleryPoo.Lightbox(document.querySelector('.gallery-container'));

},{"./modules/gallery-poo":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lightbox = exports.Lightbox = function () {
  function Lightbox(container) {
    _classCallCheck(this, Lightbox);

    this.container = container, this.lightbox(container);
  }

  _createClass(Lightbox, [{
    key: 'lightbox',
    value: function lightbox(container) {
      var images = this.getImages(container),
          larges = this.getLargeImages(images),
          descriptions = this.getDescriptions(images),
          i = 0;

      this.openLightBox(images, i, larges, descriptions);
    }
  }, {
    key: 'getImages',
    value: function getImages(container) {
      return [].concat(_toConsumableArray(container.querySelectorAll('img')));
    }
  }, {
    key: 'getLargeImages',
    value: function getLargeImages(gallery) {
      return gallery.map(function (el) {
        return el.src;
      });
    }
  }, {
    key: 'getDescriptions',
    value: function getDescriptions(gallery) {
      return gallery.map(function (el) {
        return el.alt;
      });
    }
  }, {
    key: 'openLightBox',
    value: function openLightBox(gallery, i, larges, descriptions) {
      var lightboxEl = document.createElement('div');

      var lightBoxContent = '\n      <div class="lightbox-overlay">\n        <figure class="lightbox-container">\n\n          <img src="' + larges[i] + '" class="lightbox-image">\n          <figcaption>\n            <p class="lightbox-description">' + descriptions[i] + '</p>\n          </figcaption>\n          <nav class="class="lightbox-navigation"">\n            <a href="" class="lightbox-navigation__button prev"></a>\n            <a href="" class="lightbox-navigation__button next"></a>\n          </nav>\n        </figure>\n      </div>\n    ';

      lightboxEl.innerHTML = lightBoxContent;

      lightboxEl.id = 'lightbox';

      document.body.appendChild(lightboxEl);

      this.navigateLightBox(lightboxEl, i, larges, descriptions);
    }
  }, {
    key: 'navigateLightBox',
    value: function navigateLightBox(lightboxEl, i, larges, descriptions) {
      var prev = lightboxEl.querySelector('.prev'),
          next = lightboxEl.querySelector('.next'),
          image = lightboxEl.querySelector('img'),
          description = lightboxEl.querySelector('p'),
          counter = lightboxEl.querySelector('span'),
          close = lightboxEl.querySelector('.close-modal');

      window.addEventListener('keyup', function (e) {
        if (e.key === 'ArrowRight') next.click();
        if (e.key === 'ArrowLeft') prev.click();
        if (e.key === 'Escape') close.click();
      });

      lightboxEl.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        if (target === prev) {
          if (i > 0) {
            image.src = larges[i - 1];
            i--;
            image.classList.add('animated');
            setTimeout(function () {
              image.classList.remove('animated');
            }, 500);
          }
        } else if (target === next) {
          if (i < larges.length - 1) {
            image.src = larges[i + 1];
            i++;
            image.classList.add('animated');
            setTimeout(function () {
              image.classList.remove('animated');
            }, 1000);
          }
        }

        description.textContent = descriptions[i];
      });
    }
  }]);

  return Lightbox;
}();

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
