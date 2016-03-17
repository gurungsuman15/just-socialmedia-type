(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SocialMediaChecker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Note: ES6 export default would export the H class in 'default' key so we have to use that
module.exports = require('./lib/SocialMediaChecker.js').default;

},{"./lib/SocialMediaChecker.js":2}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9Tb2NpYWxNZWRpYUNoZWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIE5vdGU6IEVTNiBleHBvcnQgZGVmYXVsdCB3b3VsZCBleHBvcnQgdGhlIEggY2xhc3MgaW4gJ2RlZmF1bHQnIGtleSBzbyB3ZSBoYXZlIHRvIHVzZSB0aGF0XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL1NvY2lhbE1lZGlhQ2hlY2tlci5qcycpLmRlZmF1bHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHBhdHRlcm5zID0ge1xuICAgICdmYWNlYm9vayc6ICdeKGh0dHBzP1xcOlxcL1xcLyk/KHd3d1xcLik/KGZhY2Vib29rfGZiKVxcLlthLXpdezIsM30oXFwvLispK1xcLz8kJyxcbiAgICAnaW5zdGFncmFtJzogJ14oaHR0cHM/XFw6XFwvXFwvKT8od3d3XFwuKT8oaW5zdGFncmFtKVxcLlthLXpdezIsM30oXFwvLispK1xcLz8kJyxcbiAgICAnbGlua2VkaW4nOiAnXihodHRwcz9cXDpcXC9cXC8pPyh3d3dcXC4pPyhsaW5rZWRpbilcXC5bYS16XXsyLDN9KFxcLy4rKStcXC8/JCcsXG4gICAgJ2dvb2dsZSsnOiAnXihodHRwcz9cXDpcXC9cXC8pPyh3d3dcXC4pPyhwbHVzLmdvb2dsZSlcXC5bYS16XXsyLDN9KFxcLy4rKStcXC8/JCdcbn07XG5cbnZhciBTb2NpYWxNZWRpYUNoZWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU29jaWFsTWVkaWFDaGVja2VyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29jaWFsTWVkaWFDaGVja2VyKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU29jaWFsTWVkaWFDaGVja2VyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdjaGVjaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVjayh1cmwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29jaWFsTWVkaWFDaGVja2VyLmNoZWNrKCkgZXhwZWN0cyBhIHN0cmluZyB2YWx1ZS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBhdHRlcm5zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuc1trZXldLCAnaScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVybC5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTb2NpYWxNZWRpYUNoZWNrZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNvY2lhbE1lZGlhQ2hlY2tlcjsiXX0=
