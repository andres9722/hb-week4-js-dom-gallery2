(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _galleryPoo = require('./modules/gallery-poo');

var _galleryImages = require('./modules/gallery-images');

var _galleryImages2 = _interopRequireDefault(_galleryImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _galleryPoo.Gallery(document.querySelector('.gallery-container'), _galleryImages2.default);

},{"./modules/gallery-images":2,"./modules/gallery-poo":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['https://images.pexels.com/photos/97524/pexels-photo-97524.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/97587/pexels-photo-97587.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/42094/pexels-photo-42094.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/48012/pexels-photo-48012.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/52907/pexels-photo-52907.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = exports.Gallery = function () {
  function Gallery(container, data) {
    _classCallCheck(this, Gallery);

    this.i = 0;
    this.openGallery(container, this.i, data);
  }

  _createClass(Gallery, [{
    key: 'openGallery',
    value: function openGallery(container, i, data) {
      var galleryEl = document.createElement('div');

      console.log(container);

      var galleryContent = '\n      <figure class="gallery-figure">\n        <img src="' + data[i] + '" class="gallery-image">\n        <figcaption>\n          <p class="gallery-description">' + (i + 1) + '</p>\n        </figcaption>\n        <nav class="class="gallery-navigation"">\n          <a href="" class="gallery-navigation__button prev"></a>\n          <a href="" class="gallery-navigation__button next"></a>\n        </nav>\n      </figure>\n    ';

      galleryEl.innerHTML = galleryContent;
      galleryEl.id = 'gallery';
      document.body.appendChild(galleryEl);
      this.navigateGallery(galleryEl, i, data);
    }
  }, {
    key: 'navigateGallery',
    value: function navigateGallery(galleryEl, i, data) {
      var prev = galleryEl.querySelector('.prev');
      var next = galleryEl.querySelector('.next');
      var image = galleryEl.querySelector('img');
      var description = galleryEl.querySelector('p');

      window.addEventListener('keyup', function (e) {
        if (e.key === 'ArrowRight') next.click();
        if (e.key === 'ArrowLeft') prev.click();
      });

      galleryEl.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        if (target === prev) {
          if (i > 0) {
            image.src = data[i - 1];
            i--;
            image.classList.add('animated');
            setTimeout(function () {
              image.classList.remove('animated');
            }, 500);
          }
        } else if (target === next) {
          if (i < data.length - 1) {
            image.src = data[i + 1];
            i++;
            image.classList.add('animated');
            setTimeout(function () {
              image.classList.remove('animated');
            }, 500);
          }
        }

        description.textContent = i + 1;
      });
    }
  }]);

  return Gallery;
}();

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
