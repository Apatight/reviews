'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reviews = function (_React$Component) {
  _inherits(Reviews, _React$Component);

  function Reviews() {
    _classCallCheck(this, Reviews);

    var _this = _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).call(this));

    _this.state = {
      satisfied: 'I love this product!!',
      unhappy: 'Arrived late and damaged :('
    };
    return _this;
  }

  _createClass(Reviews, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          ' Hello World !!!'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'JenSpring50214'
            ),
            ' "',
            this.state.satisfied,
            '"'
          ),
          _react2.default.createElement(
            'p',
            null,
            'My new camera is awesome! I just went on a trip to the Bahamas and I got so many amazing photos due to the zero vibration calibration system! WOW so easy to use, just point and click! I feel like I could be the next Ansel Adams with how nice the photos come out.'
          ),
          _react2.default.createElement(
            'span',
            null,
            'Verified Buyer 2010'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'SpaceCadetHero421'
            ),
            ' "',
            this.state.unhappy,
            '"'
          ),
          _react2.default.createElement(
            'p',
            null,
            'I bought this item from yourphotogrpahywarehouse hoping to replace my old starter DSLR. I was extremely dissapointed when it arrived with the lens cracked in half due to poor packaging. I would not purchase from yourphotographywarehouse ever again.'
          ),
          _react2.default.createElement(
            'span',
            null,
            'Verified Buyer 2011'
          )
        )
      );
    }
  }]);

  return Reviews;
}(_react2.default.Component);

exports.default = Reviews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL3Jldmlld3MuanN4Il0sIm5hbWVzIjpbIlJldmlld3MiLCJzdGF0ZSIsInNhdGlzZmllZCIsInVuaGFwcHkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBQ25CLHFCQUFjO0FBQUE7O0FBQUE7O0FBR1osVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLHVCQURBO0FBRVhDLGVBQVM7QUFGRSxLQUFiO0FBSFk7QUFPYjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKO0FBQUE7QUFBc0MsaUJBQUtGLEtBQUwsQ0FBV0MsU0FBakQ7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsU0FGRjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSjtBQUFBO0FBQXlDLGlCQUFLRCxLQUFMLENBQVdFLE9BQXBEO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBVEYsT0FERjtBQWlCRDs7OztFQTVCa0MsZ0JBQU1DLFM7O2tCQUF0QkosTyIsImZpbGUiOiJyZXZpZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV2aWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2F0aXNmaWVkOiAnSSBsb3ZlIHRoaXMgcHJvZHVjdCEhJyxcbiAgICAgIHVuaGFwcHk6ICdBcnJpdmVkIGxhdGUgYW5kIGRhbWFnZWQgOignXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxoMT4gSGVsbG8gV29ybGQgISEhPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+PHN0cm9uZz5KZW5TcHJpbmc1MDIxNDwvc3Ryb25nPiBcInt0aGlzLnN0YXRlLnNhdGlzZmllZH1cIjwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBNeSBuZXcgY2FtZXJhIGlzIGF3ZXNvbWUhIEkganVzdCB3ZW50IG9uIGEgdHJpcCB0byB0aGUgQmFoYW1hcyBhbmQgSSBnb3Qgc28gbWFueSBhbWF6aW5nIHBob3RvcyBkdWUgdG8gdGhlIHplcm8gdmlicmF0aW9uIGNhbGlicmF0aW9uIHN5c3RlbSEgV09XIHNvIGVhc3kgdG8gdXNlLCBqdXN0IHBvaW50IGFuZCBjbGljayEgSSBmZWVsIGxpa2UgSSBjb3VsZCBiZSB0aGUgbmV4dCBBbnNlbCBBZGFtcyB3aXRoIGhvdyBuaWNlIHRoZSBwaG90b3MgY29tZSBvdXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzcGFuPlZlcmlmaWVkIEJ1eWVyIDIwMTA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz48c3Ryb25nPlNwYWNlQ2FkZXRIZXJvNDIxPC9zdHJvbmc+IFwie3RoaXMuc3RhdGUudW5oYXBweX1cIjwvaDM+XG4gICAgICAgICAgPHA+SSBib3VnaHQgdGhpcyBpdGVtIGZyb20geW91cnBob3RvZ3JwYWh5d2FyZWhvdXNlIGhvcGluZyB0byByZXBsYWNlIG15IG9sZCBzdGFydGVyIERTTFIuIEkgd2FzIGV4dHJlbWVseSBkaXNzYXBvaW50ZWQgd2hlbiBpdCBhcnJpdmVkIHdpdGggdGhlIGxlbnMgY3JhY2tlZCBpbiBoYWxmIGR1ZSB0byBwb29yIHBhY2thZ2luZy4gSSB3b3VsZCBub3QgcHVyY2hhc2UgZnJvbSB5b3VycGhvdG9ncmFwaHl3YXJlaG91c2UgZXZlciBhZ2Fpbi48L3A+XG4gICAgICAgICAgPHNwYW4+VmVyaWZpZWQgQnV5ZXIgMjAxMTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=