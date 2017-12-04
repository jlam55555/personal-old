$(() => {

  // convenience functions
  var random = n => Math.floor(Math.random() * (typeof n === "object" ? n.length : n));

  // dynamic terminal
  var actions = ["brother", "math", "run", "blog", "code", "build", "cube", "bowl", "teach", "learn", "hack"];
  var $dynamicTerminal = $("#dynamicTerminal");
  var $cursor = $("#cursor");
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
