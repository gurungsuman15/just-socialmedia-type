(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SocialMediaChecker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var patterns = {
    'facebook': '^(https?\:\/\/)?(www\.)?(facebook|fb)\.[a-z]{2,3}(\/.+)+\/?$',
    'instagram': '^(https?\:\/\/)?(www\.)?(instagram)\.[a-z]{2,3}(\/.+)+\/?$',
    'linkedin': '^(https?\:\/\/)?(www\.)?(linkedin)\.[a-z]{2,3}(\/.+)+\/?$',
    'google+': '^(https?\:\/\/)?(www\.)?(plus.google)\.[a-z]{2,3}(\/.+)+\/?$'
};

var SocialMediaChecker = function () {
    function SocialMediaChecker() {
        _classCallCheck(this, SocialMediaChecker);
    }

    _createClass(SocialMediaChecker, null, [{
        key: 'check',
        value: function check(url) {
            if (typeof url !== 'string') {
                throw new Error('SocialMediaChecker.check() expects a string value.');
            }

            for (var key in patterns) {
                var regex = new RegExp(patterns[key], 'i');

                if (url.match(regex)) {
                    return key;
                }
            }

            return false;
        }
    }]);

    return SocialMediaChecker;
}();

exports.default = SocialMediaChecker;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU29jaWFsTWVkaWFDaGVja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0NDLElBQU0sV0FBVztBQUNkLGdCQUFZLDhEQUFaO0FBQ0EsaUJBQWEsNERBQWI7QUFDQSxnQkFBWSwyREFBWjtBQUNBLGVBQVcsOERBQVg7Q0FKRzs7SUFPRDs7Ozs7Ozs4QkFDUSxLQUFLO0FBQ1gsZ0JBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixFQUF5QjtBQUN6QixzQkFBTSxJQUFJLEtBQUosQ0FBVSxvREFBVixDQUFOLENBRHlCO2FBQTdCOztBQUlBLGlCQUFLLElBQUksR0FBSixJQUFXLFFBQWhCLEVBQTBCO0FBQ3RCLG9CQUFJLFFBQVEsSUFBSSxNQUFKLENBQVcsU0FBUyxHQUFULENBQVgsRUFBMEIsR0FBMUIsQ0FBUixDQURrQjs7QUFHdEIsb0JBQUksSUFBSSxLQUFKLENBQVUsS0FBVixDQUFKLEVBQXNCO0FBQ2xCLDJCQUFPLEdBQVAsQ0FEa0I7aUJBQXRCO2FBSEo7O0FBUUEsbUJBQU8sS0FBUCxDQWJXOzs7O1dBRGI7OztrQkFrQlMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4gY29uc3QgcGF0dGVybnMgPSB7XG4gICAgJ2ZhY2Vib29rJzogJ14oaHR0cHM/XFw6XFwvXFwvKT8od3d3XFwuKT8oZmFjZWJvb2t8ZmIpXFwuW2Etel17MiwzfShcXC8uKykrXFwvPyQnLFxuICAgICdpbnN0YWdyYW0nOiAnXihodHRwcz9cXDpcXC9cXC8pPyh3d3dcXC4pPyhpbnN0YWdyYW0pXFwuW2Etel17MiwzfShcXC8uKykrXFwvPyQnLFxuICAgICdsaW5rZWRpbic6ICdeKGh0dHBzP1xcOlxcL1xcLyk/KHd3d1xcLik/KGxpbmtlZGluKVxcLlthLXpdezIsM30oXFwvLispK1xcLz8kJyxcbiAgICAnZ29vZ2xlKyc6ICdeKGh0dHBzP1xcOlxcL1xcLyk/KHd3d1xcLik/KHBsdXMuZ29vZ2xlKVxcLlthLXpdezIsM30oXFwvLispK1xcLz8kJ1xufTtcblxuY2xhc3MgU29jaWFsTWVkaWFDaGVja2VyIHtcblx0c3RhdGljIGNoZWNrKHVybCkge1xuICAgICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29jaWFsTWVkaWFDaGVja2VyLmNoZWNrKCkgZXhwZWN0cyBhIHN0cmluZyB2YWx1ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXR0ZXJucykge1xuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuc1trZXldLCAnaScpO1xuXG4gICAgICAgICAgICBpZiAodXJsLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxNZWRpYUNoZWNrZXI7XG4iXX0=
