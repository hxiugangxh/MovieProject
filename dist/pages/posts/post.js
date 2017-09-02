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
    value: function onLoad() {
      this.postList = _postsData2.default.postList;
    }
  }]);

  return Post;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Post , 'pages/posts/post'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsImNvbmZpZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicG9zdEl0ZW1UZW1wbGF0ZSIsImRhdGEiLCJwb3N0TGlzdCIsIm1ldGhvZHMiLCJvblBvc3RUYXAiLCJwb3N0SWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCO0FBRG5CLEssUUFHVkMsTSxHQUFTLEVBQUMsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxNQUF6QixFQUFnQyxTQUFRLE9BQXhDLEVBQWdELE9BQU0sS0FBdEQsRUFBNEQsU0FBUSxPQUFwRSxFQUFoQixFQUE2RixvQkFBbUIsRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxNQUF6QixFQUFnQyxTQUFRLE9BQXhDLEVBQWdELE9BQU0sS0FBdEQsRUFBNEQsU0FBUSxPQUFwRSxFQUFoSCxFQUE2TCxxQkFBb0IsRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxNQUF6QixFQUFnQyxTQUFRLE9BQXhDLEVBQWdELE9BQU0sS0FBdEQsRUFBNEQsU0FBUSxPQUFwRSxFQUFqTixFQUFwQixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUdQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsTUFERixFQUNVO0FBQ2hCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssZ0NBQWdDRjtBQUR2QixTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7NkJBUUQ7QUFDUCxXQUFLSCxRQUFMLEdBQWdCLG9CQUFTQSxRQUF6QjtBQUNEOzs7O0VBdEIrQixlQUFLTSxJOztrQkFBbEJiLEkiLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFBvc3RJdGVtVGVtcGxhdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0X2l0ZW1fdGVtcGxhdGUnXHJcbiAgaW1wb3J0IHBvc3REYXRhIGZyb20gJy4uLy4uL2RhdGEvcG9zdHMtZGF0YSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+aWh+S4juWtlydcclxuICAgIH1cclxuICAgJHByb3BzID0ge1wicG9zdEl0ZW1UZW1wbGF0ZVwiOntcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwicG9zdExpc3RcIixcIml0ZW1cIjpcInBvc3RcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifSxcInYtYmluZDpwb3N0Lm9uY2VcIjp7XCJmb3JcIjpcInBvc3RMaXN0XCIsXCJpdGVtXCI6XCJwb3N0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcImZvclwiOlwicG9zdExpc3RcIixcIml0ZW1cIjpcInBvc3RcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBwb3N0SXRlbVRlbXBsYXRlOiBQb3N0SXRlbVRlbXBsYXRlXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwb3N0TGlzdDogW11cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG9uUG9zdFRhcChwb3N0SWQpIHtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAncG9zdC1kZXRhaWwvcG9zdC1kZXRhaWw/aWQ9JyArIHBvc3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMucG9zdExpc3QgPSBwb3N0RGF0YS5wb3N0TGlzdFxyXG4gICAgfVxyXG4gIH1cclxuIl19