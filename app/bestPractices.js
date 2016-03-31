exports = typeof window === 'undefined' ? global : window;
/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
exports.bestPracticesAnswers = {
  globals: function () {
    var myObject = { name: 'Jory' };
    return myObject;
  },

  functions: function (flag) {
    var getValue;
    if (flag) {
      getValue = function () {
        return 'a';
      };
    } else {
      getValue = function () {
        return 'b';
      };
    }

    return getValue();
  },

  parseInt: function (numStr) {
    var re = /([0-9]{1,})/ig;
    var match = re.exec(numStr)[0];
    return parseInt(match);
  },

  identity: function (val1, val2) {
    return val1 === val2;
  }
};