$(() => {

  // elements
  var $window = $(window);
  var $document = $(document);
  var $body = $("body");
  var $html = $("html");
  var $title = $("#title");
  var $dynamicTerminal = $("#dynamicTerminal");
  var $cursor = $("#cursor");

  // convenience functions
  var random = n => Math.floor(Math.random() * (typeof n === "object" ? n.length : n));

  // onload animation
  $title.css({margin: ($window.height() - $title.innerHeight())/2 + "px 0"});
  setTimeout(() => $title.addClass("normalMargins"), 1000);

  // dynamic terminal
  var actions = ["brother", "math", "run", "blog", "code", "build", "cube", "bowl", "teach", "learn", "hack"];
  var actionsIndex = random(actions);
  var wordIndex = 0;
  var increasing = true;
  var t = setInterval(() => {
    $dynamicTerminal.text(actions[actionsIndex].slice(0, wordIndex));
    if(increasing) {
      wordIndex++;
      if(wordIndex == actions[actionsIndex].length) {
        $cursor.addClass("blinking");
      }
      if(wordIndex == actions[actionsIndex].length + 15) {
        increasing = false;
      }
    } else {
      wordIndex--;
      if(wordIndex == actions[actionsIndex].length) {
        $cursor.removeClass("blinking");
      }
      if(wordIndex == 0) {
        increasing = true;
        actionsIndex = random(actions);
      }
    }
  }, 150);

});
