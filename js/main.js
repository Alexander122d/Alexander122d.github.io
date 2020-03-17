(function($) {
  $(document).on("click", "#testButton", function(e) {
    e.preventDefault();
    $(".hidden-content").toggle();
  });
})(jQuery)
