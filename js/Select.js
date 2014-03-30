//the Select Object
function Select(id) {
  this.id = id;
  this.data = [];
  this.element = $('#' + this.id);
  this.initialize = function (data) {
    var elem = this.element,
        options = "";

    this.data = data;

    $.each(data, function (i, val) {
      options += "<option value='" + val + "'>" + val + "</option>";
    });
    elem.append(options);
  };
  this.selection = function () {
    var elem = this.element;
    if (elem.val() == "no-op") {
      return selectRandomElement(this.data);
    } else {
      return elem.val();
    }
  };
}
