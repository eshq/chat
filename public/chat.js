(function($) {
  var output = $("#messages");
  var input  = $("#message input");

  eshq.open("chat", {
    message: function(e) {
      output.append("<p>" + e.data + "</p>");
      output[0].scrollTop = output[0].scrollHeight;
    }
  });

  $("#message").submit(function(e) {
    e.preventDefault();

    eshq.send("chat", input.val());
    input.val("");
  });
})(jQuery);
