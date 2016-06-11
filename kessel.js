(function () {
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  document.body.innerHTML = document.body.innerHTML.replaceAll('Kessel', '"American Hero" Kessel');
})();
