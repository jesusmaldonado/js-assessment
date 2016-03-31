exports = typeof window === 'undefined' ? global : window;
exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (secondString) {
      return str + ', '  + secondString;
    };
  },

  makeClosures: function (arr, fn) {
    return arr.map(function (randomNumber) {
      return fn.bind(null, randomNumber);
    });
  },

  partial: function (fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments: function () {
    var args = Array.prototype.slice.call(arguments);
    var result;
    for (var i = 0; i < args.length; i++) {
      var numberToBeAdded = args[i];
      if (result) {
        result += numberToBeAdded;
      } else {
        result = numberToBeAdded;
      }
    }

    return result;
  },

  callIt: function (fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var secondArgs = Array.prototype.slice.call(arguments);
      var allArgs = args.concat(secondArgs);
      return fn.apply(null, allArgs);
    };
  },

  curryIt: function (fn) {
    var maxArgs = fn.length;
    var args = [];
    function _curriedFn(arg) {
      args.push(arg);
      if (args.length === maxArgs) {
        return fn.apply(null, args);
      } else {
        return _curriedFn;
      }
    }

    return _curriedFn;
  },
};
