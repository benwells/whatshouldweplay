//App Object
function App () {
  this.songLoc = '/songlist.txt';
  this.styleLoc = '/stylelist.txt';
  this.meterLoc = '/meterlist.txt';
  this.styleSelect = new Select("styleselect");
  this.meterSelect = new Select("meterselect");
  this.songSelect = new Select("songselect");

  this.init = function () {
    var _this = this;
    $.when( $.ajax( this.songLoc ), $.ajax( this.styleLoc ),  $.ajax( this.meterLoc )).done(function( songs, styles, meters ) {
      _this.songSelect.initialize(songs[0].split('\n'))
      _this.styleSelect.initialize(styles[0].split('\n'))
      _this.meterSelect.initialize(meters[0].split('\n'))
    });
  }

}


//
// function selectRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }
//
// function submit_action() {
//   $('form').hide();
//   $('#footer').hide();
//   var element = $('#result');
//   element.find('#song').html(songSelect.selection());
//   element.find('#style').html(styleSelect.selection());
//   element.find('#meter').html(meterSelect.selection());
//   element.show();
// }
//
// function cancel_action() {
//   $('form').show();
//   $('#result').hide();
//   $('#footer').hide();
//   $('.meter').html('');
//   $('.song').html('');
//   $('.style').html('');
// }
//
// function confirm_action() {
//   $('#result').hide();
//   var element = $('#footer');
//   var selections = $('#result');
//   element.find('.song').html(selections.find('#song').html());
//   element.find('.style').html(selections.find('#style').html());
//   element.find('.meter').html(selections.find('#meter').html());
//   $('select').val('no-op');
//   $('form').show();
//   element.show();
// }
