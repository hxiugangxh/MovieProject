'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _post_item_template = require('./../../components/post_item_template.js');

var _post_item_template2 = _interopRequireDefault(_post_item_template);

var _postsData = require('./../../data/posts-data.js');

var _postsData2 = _interopRequireDefault(_postsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_wepy$page) {
  _inherits(Post, _wepy$page);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '文与字'
    }, _this.$props = { "postItemTemplate": { "xmlns:v-bind": { "for": "postList", "item": "post", "index": "index", "key": "key", "value": "index" }, "v-bind:post.once": { "for": "postList", "item": "post", "index": "index", "key": "key", "value": "index" }, "v-bind:index.once": { "for": "postList", "item": "post", "index": "index", "key": "key", "value": "index" } } }, _this.$events = {}, _this.components = {
      postItemTemplate: _post_item_template2.default
    }, _this.data = {
      postList: []
    }, _this.methods = {
      onPostTap: function onPostTap(postId) {
        _wepy2.default.navigateTo({
          url: 'post-detail/post-detail?id=' + postId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Post, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.postList = _postsData2.default.postList;

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Post;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Post , 'pages/posts/post'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsImNvbmZpZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicG9zdEl0ZW1UZW1wbGF0ZSIsImRhdGEiLCJwb3N0TGlzdCIsIm1ldGhvZHMiLCJvblBvc3RUYXAiLCJwb3N0SWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUCxnQ0FBMEI7QUFEbkIsSyxRQUdWQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFDLE9BQU0sVUFBUCxFQUFrQixRQUFPLE1BQXpCLEVBQWdDLFNBQVEsT0FBeEMsRUFBZ0QsT0FBTSxLQUF0RCxFQUE0RCxTQUFRLE9BQXBFLEVBQWhCLEVBQTZGLG9CQUFtQixFQUFDLE9BQU0sVUFBUCxFQUFrQixRQUFPLE1BQXpCLEVBQWdDLFNBQVEsT0FBeEMsRUFBZ0QsT0FBTSxLQUF0RCxFQUE0RCxTQUFRLE9BQXBFLEVBQWhILEVBQTZMLHFCQUFvQixFQUFDLE9BQU0sVUFBUCxFQUFrQixRQUFPLE1BQXpCLEVBQWdDLFNBQVEsT0FBeEMsRUFBZ0QsT0FBTSxLQUF0RCxFQUE0RCxTQUFRLE9BQXBFLEVBQWpOLEVBQXBCLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBR1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxNQURGLEVBQ1U7QUFDaEIsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxnQ0FBZ0NGO0FBRHZCLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs7Ozs7OztBQVNSLHFCQUFLSCxRQUFMLEdBQWdCLG9CQUFTQSxRQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJCOEIsZUFBS00sSTs7a0JBQWxCYixJIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFBvc3RJdGVtVGVtcGxhdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0X2l0ZW1fdGVtcGxhdGUnXG4gIGltcG9ydCBwb3N0RGF0YSBmcm9tICcuLi8uLi9kYXRhL3Bvc3RzLWRhdGEnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5paH5LiO5a2XJ1xuICAgIH1cbiAgICRwcm9wcyA9IHtcInBvc3RJdGVtVGVtcGxhdGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJmb3JcIjpcInBvc3RMaXN0XCIsXCJpdGVtXCI6XCJwb3N0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6cG9zdC5vbmNlXCI6e1wiZm9yXCI6XCJwb3N0TGlzdFwiLFwiaXRlbVwiOlwicG9zdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4Lm9uY2VcIjp7XCJmb3JcIjpcInBvc3RMaXN0XCIsXCJpdGVtXCI6XCJwb3N0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBvc3RJdGVtVGVtcGxhdGU6IFBvc3RJdGVtVGVtcGxhdGVcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHBvc3RMaXN0OiBbXVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25Qb3N0VGFwKHBvc3RJZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsP2lkPScgKyBwb3N0SWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICB0aGlzLnBvc3RMaXN0ID0gcG9zdERhdGEucG9zdExpc3RcbiAgICB9XG4gIH1cbiJdfQ==