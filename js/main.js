$(() => {

  // elements
  var $window = $(window);
  var $document = $(document);
  var $body = $("body");
  var $html = $("html");
  var $title = $("#title");
  var $dynamicTerminal = $("#dynamicTerminal");
  var $cursor = $("#cursor");
  var $majorProjects = $("#majorProjects");
  var $minorProjects = $("#minorProjects");

  // convenience functions
  var random = n => Math.floor(Math.random() * (typeof n === "object" ? n.length : n));

  // redirect from github site
  if(window.location.href.indexOf("jlam55555.github.io") >= 0) {
    window.location.href = "http://jonathanlam.tech";
  }

  // onload animation -- needs slight delay to work
  setTimeout(function() {
    if($window.scrollTop() === 0) {
      $title.css({margin: ($window.height() - $title.innerHeight())/2 + "px 0"});
      setTimeout(() => $title.addClass("normalMargins"), 1000);
    }
  }, 10);

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

  // create projects
  var projects = [
    {
      url: "http://eis.jonathanlam.tech",
      title: "Everything is Sheep",
      link: "eis.jonathanlam.tech",
      description: "A playground for free-form teenage writing",
      image: "img/everything-is-sheep.png"
    },
    {
      url: "http://thehomeworklife.co.nf",
      title: "The Homework Life",
      link: "thehomeworklife.co.nf",
      description: "They joys and pains of a high-school career",
      image: "img/the-homework-life.png"
    },
    {
      url: "https://saferideser9.org",
      title: "Safe Rides of ER9",
      link: "saferideser9.org",
      description: "A mobile web-app for the Safe Rides program in the ER9 region for high schoolers",
      image: "img/safe-rides-er9.png"
    },
    {
      url: "http://jonathanlam.tech/ringtune-website",
      title: "RingTune",
      link: "jonathanlam.tech/ringtune-website",
      description: "Make music based on statistics of pleasing chord progressions. “The type prediction for music.” Most Entrepreneurial hack of LIHacks 2015. Assets and design headed by @all88keys",
      image: "img/ringtune.png"
    },
    {
      url: "http://jonathanlam.tech/nutmegbowl",
      title: "Nutmeg Bowl (mockup website)",
      link: "jonathanlam.tech/nutmegbowl",
      description: "A mockup of the Nutmeg Bowl website as a proposed update to theirs. Currently pending (?)",
      image: "img/nutmeg-bowl.png"
    },
    {
      url: "http://fruitsensei.tech",
      title: "Fruit Sensei",
      link: "fruitsensei.tech",
      description: "A revamp of the popular Fruit Ninja mobile videogame. Use a phone as a controller and play in 3D! Best Videogame of StuyHacks 2017",
      image: "img/fruit-sensei.png"
    },
    {
      url: "http://jonathanlam.tech/paste-to-html",
      title: "Paste to HTML",
      link: "jonathanlam.tech/paste-to-html",
      description: "To convert pasted webpage data into its HTML, along with its full formatting"
    },
    {
      url: "http://jonathanlam.tech/unscrambler",
      title: "Word Unscrambler",
      link: "jonathanlam.tech/unscrambler",
      description: "A tool that unscrambles words or finds anagrams. Uses @dwyl/english-words as source of words"
    },
    {
      url: "http://jonathanlam.tech/word-visualizer",
      title: "Word Visualizer",
      link: "jonathanlam.tech/word-visualizer",
      description: "A tool for creating images of words. Highly customizable and colorful, with a stylish interface"
    },
    {
      url: "http://jonathanlam.tech/scrambler",
      title: "Rubik's Cube Scrambler",
      link: "jonathanlam.tech/scrambler",
      description: "A random Rubik’s cube scrambler. Don’t use for competition; not an official algorithm. Simple, modern interface (with WallE background)"
    },
    {
      url: "http://jonathanlam.tech/pop-the-lock",
      title: "Pop the Lock",
      link: "jonathanlam.tech/pop-the-lock",
      description: "A minimalistic Pop the Lock imitation. Uses CSS3 for animations and circles, and JS for scoring"
    },
    {
      url: "http://jonathanlam.tech/realcodingtime",
      title: "Real Coding Time",
      link: "jonathanlam.tech/realcodingtime",
      description: "A real-time coding editor that is open to anyone. Uses Google’s PrettyPrint library for syntax highlighting. JS and Node.JS (with Socket.io) involved"
    },
    {
      url: "http://jonathanlam.tech/periodic-letters",
      title: "Periodic Letters",
      link: "jonathanlam.tech/periodic-letters",
      description: "A tool to generate graphics with text from the periodic elements. Created for Honors Chemistry project. Two imaginary elements added to make up for holes"
    },
    {
      url: "http://jonathanlam.tech/balencistry",
      title: "Balencistry",
      link: "jonathanlam.tech/balencistry",
      description: "A visual chemical equation balancer for Honors Chemistry (and now AP Chemistry)"
    },
    {
      url: "http://jonathanlam.tech/memory-game",
      title: "Memory Game",
      link: "jonathanlam.tech/memory-game",
      description: "A memory game with customizable size and clean interface. With lots of love from CSS3 transitions and animations"
    },
    {
      url: "http://jonathanlam.tech/speller",
      title: "Speller",
      link: "jonathanlam.tech/speller",
      description: "A spelling-bee training aid. Currently comes packaged with 450 middle-school challenge terms by default"
    },
    {
      url: "http://jonathanlam.tech/flappy",
      title: "Flappy",
      link: "jonathanlam.tech/flappy",
      description: "My cheap Flappy Bird ripoff. Created with JS and HTML5 canvas"
    },
    {
      url: "http://jonathanlam.tech/planetary",
      title: "Planetary",
      link: "jonathanlam.tech/planetary",
      description: "A simple jQuery animation inspired by @huntrr"
    },
    {
      url: "http://barlowbowling.github.io",
      title: "Barlow Bowling",
      link: "barlowbowling.github.io",
      description: "The website for the Barlow Bowling Team"
    },
    {
      url: "http://barlowprogramming.github.io",
      title: "Barlow Programming",
      link: "barlowprogramming.github.io",
      description: "The website for the Barlow Programming Team"
    }
  ];
  for(var project of projects) {
   (project.image ? $majorProjects : $minorProjects).append(`<a href="${project.url}" target="_blank" class="project">
        <div class="projectInfo">
          <h3>${project.title}</h3>
          <p class="linkP">${project.link}</p>
          <p>${project.description}</p>
        </div>
        ${project.image ? '<img class="projectImage" src="' + project.image + '">' : ''}
      </a>`);
  }

});
