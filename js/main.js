$(function() { 

  var $arrow_links_down = $(".arrow_down")
  var $arrow_links_up = $(".arrow_up")


  //////----- scrollTo (down)

  $arrow_links_down.click( function(event) {
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        offset: { 'left':0, 'top':-200 }
      }
    );
  });

  //////----- scrollTo (up)

  $arrow_links_up.click( function(event) {
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        offset: { 'left':0, 'top':-200 }
      }
    );
  });

});