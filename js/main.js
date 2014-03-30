$('document').ready(function () {
  $('#result').hide(); //to do:  move this to css
  $('#footer').hide(); //to do:  move this to css
  var app = new App();
  app.init();
  $.shake({
    callback: function () {
      submit_action();
    }
  });
});
