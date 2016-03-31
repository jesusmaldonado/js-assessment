/* globals $ */
exports = typeof window === 'undefined' ? global : window;
exports.asyncAnswers = {
  async: function (value) {
    var deferred = $.Deferred();
    var returnValue = value ? value : false;
    setTimeout(function () {
      deferred.resolve(returnValue);
    }, 10);
    return deferred.promise();
  },
  manipulateRemoteData: function (url) {
    var deferred = $.Deferred();
    $.ajax(url).then(function (result) {
      var people = result.people;
      var names = people.map(function (person) {
        return person.name;
      });
      names.sort();
      deferred.resolve(names);
    });
    return deferred.promise();
  }
};