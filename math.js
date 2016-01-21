module.exports = {
  difference: function (x, y) {
    return parseInt(x) - parseInt(y);
  },
  square: function (x) {
    return parseInt(x) * parseInt(x);
  },
  add: function (array) {
    return array.reduce(function(previousValue, currentValue) {
      return parseInt(previousValue) + parseInt(currentValue)
    });
  }
}
