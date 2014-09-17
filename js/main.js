$(function() { 

  var $arrow_links_down = $(".arrow_down")
  var $arrow_links_up = $(".arrow_up")


  //////----- scrollTo (up)

  $arrow_links_up.click( function(event) {
    event.preventDefault();
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        offset: { 'left':0, 'top':-150 },
        axis: 'y'
      }
    );
  });


  //////----- scrollTo (down)

  $arrow_links_down.click( function(event) {
    event.preventDefault();
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        offset: { 'left':0, 'top':-150 },
        axis: 'y'
      }
    );
  });

});