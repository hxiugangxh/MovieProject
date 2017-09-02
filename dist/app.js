'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/posts/post', 'pages/posts/post-detail/post-detail', 'pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        borderStyle: 'white',
        selectedColor: 'blue'
      },
      tabBar: {
        borderStyle: 'white',
        selectedColor: 'blue',
        list: [{
          'pagePath': 'pages/posts/post',
          'text': '阅读',
          'iconPath': '/images/tab/yuedu.png',
          'selectedIconPath': '/images/tab/yuedu_hl.png'
        }, {
          'pagePath': 'pages/movies/movies',
          'text': '电影',
          'iconPath': '/images/tab/dianying.png',
          'selectedIconPath': '/images/tab/dianying_hl.png'
        }]
      }
    };
    _this.globalData = {
      isPlayingMusic: false,
      backgroundMusicId: null,
      doubanBase: 'https://api.douban.com',
      moreMoviesTitle: ''
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJib3JkZXJTdHlsZSIsInNlbGVjdGVkQ29sb3IiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsImlzUGxheWluZ011c2ljIiwiYmFja2dyb3VuZE11c2ljSWQiLCJkb3ViYW5CYXNlIiwibW9yZU1vdmllc1RpdGxlIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJ1c2VySW5mbyIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBNENFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF6Q2RBLE1BeUNjLEdBekNMO0FBQ1BDLGFBQU8sQ0FDTCxrQkFESyxFQUVMLHFDQUZLLEVBR0wsYUFISyxDQURBO0FBTVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMscUJBQWEsT0FMUDtBQU1OQyx1QkFBZTtBQU5ULE9BTkQ7QUFjUEMsY0FBUTtBQUNORixxQkFBYSxPQURQO0FBRU5DLHVCQUFlLE1BRlQ7QUFHTkUsY0FBTSxDQUNKO0FBQ0Usc0JBQVksa0JBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksdUJBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FESSxFQU9KO0FBQ0Usc0JBQVkscUJBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksMEJBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FQSTtBQUhBO0FBZEQsS0F5Q0s7QUFBQSxVQVBkQyxVQU9jLEdBUEQ7QUFDWEMsc0JBQWdCLEtBREw7QUFFWEMseUJBQW1CLElBRlI7QUFHWEMsa0JBQVksd0JBSEQ7QUFJWEMsdUJBQWlCO0FBSk4sS0FPQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZZO0FBR2I7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtqQixVQUFMLENBQWdCa0IsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLbEIsVUFBTCxDQUFnQmtCLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEosZUFBS2pCLFVBQUwsQ0FBZ0JrQixRQUFoQixHQUEyQkcsSUFBSUgsUUFBL0I7QUFDQUYsZ0JBQU1BLEdBQUdLLElBQUlILFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQTNFMEIsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgICdwYWdlcy9wb3N0cy9wb3N0JyxcbiAgICAgICAgJ3BhZ2VzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsJyxcbiAgICAgICAgJ3BhZ2VzL2luZGV4J1xuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ2JsdWUnXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgICBzZWxlY3RlZENvbG9yOiAnYmx1ZScsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvcG9zdHMvcG9zdCcsXG4gICAgICAgICAgICAndGV4dCc6ICfpmIXor7snLFxuICAgICAgICAgICAgJ2ljb25QYXRoJzogJy9pbWFnZXMvdGFiL3l1ZWR1LnBuZycsXG4gICAgICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcvaW1hZ2VzL3RhYi95dWVkdV9obC5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbW92aWVzL21vdmllcycsXG4gICAgICAgICAgICAndGV4dCc6ICfnlLXlvbEnLFxuICAgICAgICAgICAgJ2ljb25QYXRoJzogJy9pbWFnZXMvdGFiL2RpYW55aW5nLnBuZycsXG4gICAgICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcvaW1hZ2VzL3RhYi9kaWFueWluZ19obC5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIGlzUGxheWluZ011c2ljOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRNdXNpY0lkOiBudWxsLFxuICAgICAgZG91YmFuQmFzZTogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20nLFxuICAgICAgbW9yZU1vdmllc1RpdGxlOiAnJ1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIH1cblxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgdGhpcy50ZXN0QXN5bmMoKVxuICAgIH1cblxuICAgIHNsZWVwKHMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICB9LCBzICogMTAwMClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgIH1cbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==