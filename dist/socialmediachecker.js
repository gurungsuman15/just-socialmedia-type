(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    _createClass(SocialMediaChecker, [{
        key: 'check',
        value: function check(url) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU29jaWFsTWVkaWFDaGVja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0NDLElBQUksV0FBVztBQUNaLGdCQUFZLDhEQUFaO0FBQ0EsaUJBQWEsNERBQWI7QUFDQSxnQkFBWSwyREFBWjtBQUNBLGVBQVcsOERBQVg7Q0FKQzs7SUFRQzs7Ozs7Ozs4QkFDQyxLQUFLO0FBQ0osaUJBQUssSUFBSSxHQUFKLElBQVcsUUFBaEIsRUFBMEI7QUFDdEIsb0JBQUksUUFBUSxJQUFJLE1BQUosQ0FBVyxTQUFTLEdBQVQsQ0FBWCxFQUEwQixHQUExQixDQUFSLENBRGtCOztBQUd0QixvQkFBSSxJQUFJLEtBQUosQ0FBVSxLQUFWLENBQUosRUFBc0I7QUFDbEIsMkJBQU8sR0FBUCxDQURrQjtpQkFBdEI7YUFISjs7QUFRQSxtQkFBTyxLQUFQLENBVEk7Ozs7V0FETjs7O2tCQWNTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuIHZhciBwYXR0ZXJucyA9IHtcbiAgICAnZmFjZWJvb2snOiAnXihodHRwcz9cXDpcXC9cXC8pPyh3d3dcXC4pPyhmYWNlYm9va3xmYilcXC5bYS16XXsyLDN9KFxcLy4rKStcXC8/JCcsXG4gICAgJ2luc3RhZ3JhbSc6ICdeKGh0dHBzP1xcOlxcL1xcLyk/KHd3d1xcLik/KGluc3RhZ3JhbSlcXC5bYS16XXsyLDN9KFxcLy4rKStcXC8/JCcsXG4gICAgJ2xpbmtlZGluJzogJ14oaHR0cHM/XFw6XFwvXFwvKT8od3d3XFwuKT8obGlua2VkaW4pXFwuW2Etel17MiwzfShcXC8uKykrXFwvPyQnLFxuICAgICdnb29nbGUrJzogJ14oaHR0cHM/XFw6XFwvXFwvKT8od3d3XFwuKT8ocGx1cy5nb29nbGUpXFwuW2Etel17MiwzfShcXC8uKykrXFwvPyQnXG59O1xuXG5cbmNsYXNzIFNvY2lhbE1lZGlhQ2hlY2tlciB7XG5cdGNoZWNrKHVybCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGF0dGVybnMpIHtcbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybnNba2V5XSwgJ2knKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHVybC5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxNZWRpYUNoZWNrZXI7Il19
