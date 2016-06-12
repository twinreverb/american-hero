(function () {
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var k = 0; k < element.childNodes.length; k++) {
      var node = element.childNodes[k];
      
      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replaceAll('Kessel', '"American Hero" Kessel');

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
})();
