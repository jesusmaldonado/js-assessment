exports = typeof window === 'undefined' ? global : window;
exports.regexAnswers = {
  containsNumber: function (str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter: function (str) {
    return /([a-z])\1/i.test(str);
  },

  endsWithVowel: function (str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function (str) {
    var match = /([0-9]{3})/.exec(str);
    if (match) {
      return match[0];
    }

    return false;
  },

  matchesPattern: function (str) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(str);
  },

  isUSD: function (str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
  },
};
