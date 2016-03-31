exports = typeof window === 'undefined' ? global : window;
exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce(function (prevNumber, currNumber) {
      return prevNumber + currNumber;
    });
  },

  remove: function (arr, item) {
    return arr.filter(function (itemToTest) {
      if (itemToTest !== item) {
        return itemToTest;
      }
    });
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      var test = arr[i];
      if (test === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var occurences = 0;
    for (var i = 0; i < arr.length; i++) {
      var arrItem = arr[i];
      if (arrItem === item) {
        occurences++;
      }
    }

    return occurences;
  },

  duplicates: function (arr) {
    var dupes = [];
    arr.forEach(function (item, currentIdx) {
      var duplicateWithinArray = arr.indexOf(item) !== currentIdx;
      var alreadyDiscovered = dupes.indexOf(item) > -1;
      if (duplicateWithinArray && !alreadyDiscovered) {
        dupes.push(item);
      }
    });

    return dupes;
  },

  square: function (arr) {
    return arr.map(function (item) {
      return item * item;
    });
  },

  findAllOccurrences: function (arr, target) {
    var indicesOfMatches = [];
    arr.forEach(function (item, currentIdx) {
      if (item === target) {
        indicesOfMatches.push(currentIdx);
      }
    });

    return indicesOfMatches;
  },
};
