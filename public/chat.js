(function($) {
  $("#login").submit(function(e) {
    e.preventDefault();

    var nick   = $("#login input").val();

    var output = $("#messages");
    var input  = $("#message input");

    var eshq = new ESHQ("chat");

    eshq.onopen = function(e) {
      $("#overlay, .login-box").hide();
    };

    eshq.onmessage = function(e) {
      var data = JSON.parse(e.data);
      output.append("<p><strong class='from'>" + data.nick + ":</strong> " + data.msg + "</p>");
      output[0].scrollTop = output[0].scrollHeight;
    };

    $("#message").submit(function(e) {
      e.preventDefault();
      
      $.post("/message", {nick: nick, msg: input.val()});
      input.val("");
    });
  });
})(jQuery);
