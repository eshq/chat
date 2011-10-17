(function($) {
  alert("Preparing");
  $("#login").submit(function(e) {
    e.preventDefault();

    var nick   = $("#login input").val();

    var output = $("#messages");
    var input  = $("#message input");

    alert("opening");
    var eshq = new ESHQ("chat", {presence_id: nick});

    eshq.onopen = function(e) {
      alert("open");
      $("#overlay, .login-box").hide();
    };

    eshq.onmessage = function(e) {
      alert("message");
      var data = JSON.parse(e.data);
      output.append("<p><strong class='from'>" + data.nick + ":</strong> " + data.msg + "</p>");
      output[0].scrollTop = output[0].scrollHeight;
    };

    $("#message").submit(function(e) {
      alert("send");
      e.preventDefault();

      eshq.send(JSON.stringify({nick: nick, msg: input.val()}));
      input.val("");
    });
  });
})(jQuery);
