// Javascript
$(function() {
  var currentDate = new Date();
//  $('.countdown').countdown("yyyy/MM/dd/hh:mm:ss", function(event)
//	Delete line 6
  $('.time').countdown(01 * 23 * 59 * 59 * 1079 + currentDate.valueOf(), function(event)
//	until here
	{
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});
