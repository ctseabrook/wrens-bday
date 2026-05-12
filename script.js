window.addEventListener("DOMContentLoaded", function () {
  const titleScreen = document.getElementById("title-screen");
  const storyScreen = document.getElementById("story-screen");

  const startBtn = document.getElementById("start-btn");
  const wiggleBtn = document.getElementById("wiggle-btn");

  const axOverlay = document.getElementById("ax-overlay");
  const wiggleMessage = document.getElementById("wiggle-message");

  const sceneTitle = document.getElementById("scene-title");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const choicesBox = document.getElementById("choices");

  const starsContainer = document.getElementById("stars");
  const particlesContainer = document.getElementById("particles");
  const constellationsContainer = document.getElementById("constellations");
  const shootingStar = document.getElementById("shooting-star");

  const scenes = {
    bedroom: {
      title: "Wren’s Birthday Morning",
      image: "images/bedroom.png",
      text:
        "It is May 12th — Wren’s birthday!\n\nEvery year, her special Birthday Star shines brighter than every other star in the sky.\n\nBut this year... it is gone.\n\nAx the axolotl wiggles nervously in his tiny bubble helmet.",
      choices: [
        { text: "Look through the telescope", next: "telescope" },
        { text: "Ask Ax what he thinks", next: "axButtons" }
      ]
    },

    telescope: {
      title: "The Telescope Clue",
      image: "images/telescope.png",
      text:
        "Wren looks through her telescope and gasps.\n\nFar away near Pluto, something fluffy moves across the ice while holding a glowing star.\n\n“Polar bear!” Wren says.\n\nAx bonks the telescope with his tail.",
      choices: [
        { text: "Run to the rocket ship", next: "rocket" },
        { text: "Eat birthday pancakes first", next: "pancakes" }
      ]
    },

    axButtons: {
      title: "The Sparkly Red Button",
      image: "images/bedroom.png",
      text:
        "Ax wiggles onto Wren’s control panel.\n\n“Bloop bloop!”\n\nWren knew that meant:\n\n“Definitely DO NOT press the sparkly red button.”\n\nShe pressed it anyway.\n\nThe room filled with confetti and disco music.",
      choices: [
        { text: "Dance for a minute", next: "spaceDisco" },
        { text: "Turn off disco mode and focus", next: "rocket" }
      ]
    },

    pancakes: {
      title: "Silly Ending: Pancake Pile",
      image: "images/bedroom.png",
      text:
        "The pancakes are delicious.\n\nExtra syrupy. Extra fluffy.\n\nWren accidentally eats so many pancakes that she falls asleep in a pancake pile.\n\nAx uses pancake syrup to draw a tiny rocket ship on her forehead.",
      choices: [
        { text: "Continue Adventure", next: "rocket" },
        { text: "Back to Title", next: "title" }
      ]
    },

    spaceDisco: {
      title: "Silly Ending: Space Disco",
      image: "images/rocket.png",
      text:
        "The rocket accidentally launches in DANCE MODE.\n\nA disco ball drops from the ceiling.\n\nAx spins through zero gravity wearing sunglasses.\n\nNobody knows where the sunglasses came from.",
      choices: [
        { text: "Continue Adventure", next: "rocket" },
        { text: "Back to Title", next: "title" }
      ]
    },

    rocket: {
      title: "The Star Hopper Rocket",
      image: "images/rocket.png",
      text:
        "Wren and Ax blast into space inside the Star Hopper rocket.\n\nPink and teal flames sparkle behind them.\n\nHalfway to Pluto, the navigation computer starts blinking.",
      choices: [
        { text: "Follow the glitter trail", next: "moon" },
        { text: "Take the asteroid shortcut", next: "asteroids" }
      ]
    },

    moon: {
      title: "Moon Bunny Station",
      image: "images/moon.png",
      text:
        "Wren lands beside a tiny moon café run by moon bunnies.\n\nOne bunny whispers, “A fluffy visitor took a glowing star toward Pluto.”\n\nAnother bunny gives Ax a carrot-shaped space cookie.",
      choices: [
        { text: "Ask for directions to Pluto", next: "pluto" },
        { text: "Play zero-gravity hopscotch", next: "hopscotch" }
      ]
    },

    hopscotch: {
      title: "Silly Ending: Ten Out of Ten Boings",
      image: "images/moon.png",
      text:
        "Wren jumps too hard during moon hopscotch.\n\nShe bounces ALL THE WAY around the moon.\n\nThree times.\n\nAx gives her a scorecard:\n\n10/10 BOINGS",
      choices: [
        { text: "Continue to Pluto", next: "pluto" },
        { text: "Back to Title", next: "title" }
      ]
    },

    asteroids: {
      title: "The Glitter Asteroid Belt",
      image: "images/asteroid-belt.png",
      text:
        "The asteroid belt is full of glowing glitter rocks and floating space cupcakes.\n\nAx tries to eat a meteor.\n\n“AX, NO!”\n\nToo late.\n\nThe meteor tastes like blueberry socks.",
      choices: [
        { text: "Follow the pawprints", next: "pluto" },
        { text: "Collect glitter cupcakes", next: "cupcakes" }
      ]
    },

    cupcakes: {
      title: "Silly Ending: Cupcake Overload",
      image: "images/asteroid-belt.png",
      text:
        "Wren collects SO MANY glitter cupcakes that the rocket becomes too heavy.\n\nThe rocket computer announces:\n\nWARNING: THIS SHIP IS NOW 87% CUPCAKE.",
      choices: [
        { text: "Eat some cupcakes and continue", next: "pluto" },
        { text: "Back to Title", next: "title" }
      ]
    },

    pluto: {
      title: "The Pluto Ice Cave",
      image: "images/pluto-cave.png",
      text:
        "Wren finally reaches Pluto.\n\nInside a glowing ice cave, a giant fluffy polar bear cuddles the Birthday Star like a teddy bear.\n\nThe cave glows warm pink and teal.\n\nThe polar bear looks surprised.\n\n“Oh,” he says softly. “Is this YOUR star?”",
      choices: [
        { text: "Say, “You stole it!”", next: "grumpy" },
        { text: "Ask, “Why did you take it?”", next: "kind" }
      ]
    },

    grumpy: {
      title: "A Grumpy Moment",
      image: "images/pluto-cave.png",
      text:
        "The polar bear looks sad.\n\n“I’m sorry,” he says. “Pluto gets lonely and dark sometimes.”\n\nAx gently bonks Wren with his tail.\n\nWren realizes maybe yelling was not the best first choice.",
      choices: [
        { text: "Apologize and listen", next: "kind" },
        { text: "Stay grumpy", next: "tooGrumpy" }
      ]
    },

    tooGrumpy: {
      title: "Silly Ending: Dramatic Pouting",
      image: "images/pluto-cave.png",
      text:
        "Wren crosses her arms dramatically.\n\nThe polar bear crosses HIS arms dramatically.\n\nAx sighs dramatically.\n\nEveryone sits in awkward silence for twenty whole minutes.\n\nNobody solves anything, but everyone gets REALLY good at dramatic pouting.",
      choices: [
        { text: "Be kind instead", next: "kind" },
        { text: "Back to Title", next: "title" }
      ]
    },

    kind: {
      title: "Sharing the Birthday Star",
      image: "images/ending.png",
      text:
        "The polar bear explains that Pluto is cold and lonely.\n\n“The star made my cave feel warm and happy,” he says.\n\nWren thinks carefully. Then she smiles.\n\n“We can share it.”\n\nNow every May 12th, the Birthday Star shines brightly for Wren.\n\nAnd every night, it sends cozy sparkles all the way to Pluto.\n\nAx squeaks happily.\n\nTHE END.",
      choices: [
        { text: "Play Again", next: "title" },
        { text: "Wiggle Ax in Celebration", next: "celebrate" }
      ]
    },

    celebrate: {
      title: "Birthday Sparkle Mode",
      image: "images/ending.png",
      text:
        "Wren, Ax, and the Pluto polar bear float together under the shared Birthday Star.\n\nAx does the biggest birthday wiggle in the whole galaxy.\n\nHappy Birthday, Wren!",
      choices: [
        { text: "Play Again", next: "title" }
      ]
    }
  };

  startBtn.onclick = function () {
    showScene("bedroom");
  };

  wiggleBtn.onclick = function () {
    wiggleAx();
  };

  function wiggleAx() {
    axOverlay.classList.remove("wiggle");
    void axOverlay.offsetWidth;
    axOverlay.classList.add("wiggle");

    wiggleMessage.textContent = "Ax does a happy birthday wiggle!";

    setTimeout(function () {
      wiggleMessage.textContent = "";
    }, 2200);
  }

  function showTitle() {
    storyScreen.classList.remove("active");
    titleScreen.classList.add("active");
  }

  function showScene(sceneId) {
    if (sceneId === "title") {
      showTitle();
      return;
    }

    const scene = scenes[sceneId];

    titleScreen.classList.remove("active");
    storyScreen.classList.add("active");

    sceneTitle.textContent = scene.title;
    sceneText.textContent = scene.text;
    sceneImage.src = scene.image;
    sceneImage.alt = scene.title;

    choicesBox.innerHTML = "";

    scene.choices.forEach(function (choice) {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = function () {
        showScene(choice.next);
      };
      choicesBox.appendChild(button);
    });
  }

  function createStars() {
    const safeSkyZones = [
      { leftMin: 4, leftMax: 36, topMin: 5, topMax: 46 },
      { leftMin: 60, leftMax: 96, topMin: 5, topMax: 42 },
      { leftMin: 5, leftMax: 95, topMin: 5, topMax: 18 }
    ];

    for (let i = 0; i < 60; i++) {
      const zone = safeSkyZones[Math.floor(Math.random() * safeSkyZones.length)];
      const star = document.createElement("div");

      star.className = "star";
      star.style.left = randomBetween(zone.leftMin, zone.leftMax) + "%";
      star.style.top = randomBetween(zone.topMin, zone.topMax) + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = 1.8 + Math.random() * 2.8 + "s";

      starsContainer.appendChild(star);
    }
  }

  function createConstellations() {
    const constellations = [
      [
        { left: 14, top: 18 },
        { left: 18, top: 19 },
        { left: 22, top: 20 }
      ],
      [
        { left: 72, top: 14 },
        { left: 76, top: 13 },
        { left: 80, top: 15 },
        { left: 84, top: 12 }
      ],
      [
        { left: 10, top: 34 },
        { left: 14, top: 31 },
        { left: 18, top: 34 },
        { left: 14, top: 38 }
      ]
    ];

    constellations.forEach(function (group) {
      group.forEach(function (point, index) {
        const star = document.createElement("div");
        star.className = "constellation-star";
        star.style.left = point.left + "%";
        star.style.top = point.top + "%";
        star.style.animationDelay = index * 0.35 + "s";
        constellationsContainer.appendChild(star);
      });
    });
  }

  function createParticles() {
    for (let i = 0; i < 22; i++) {
      const particle = document.createElement("div");

      particle.className = "particle";
      particle.style.left = randomBetween(5, 95) + "%";
      particle.style.top = randomBetween(8, 88) + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = 4 + Math.random() * 4 + "s";

      if (Math.random() > 0.5) {
        particle.style.background = "rgba(23, 214, 209, 0.7)";
        particle.style.boxShadow = "0 0 14px rgba(23, 214, 209, 0.75)";
      }

      particlesContainer.appendChild(particle);
    }
  }

  function triggerShootingStar() {
    const fromLeft = Math.random() > 0.25;
    const startTop = randomBetween(8, 38);
    const slightAngle = randomBetween(-8, 10);

    shootingStar.style.top = startTop + "%";
    shootingStar.style.left = fromLeft ? "-170px" : "110vw";
    shootingStar.style.transform = fromLeft
      ? "rotate(" + slightAngle + "deg)"
      : "rotate(" + (180 + slightAngle) + "deg)";

    shootingStar.classList.remove("active");
    void shootingStar.offsetWidth;
    shootingStar.classList.add("active");

    setTimeout(triggerShootingStar, 4000 + Math.random() * 7000);
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  createStars();
  createConstellations();
  createParticles();
  setTimeout(triggerShootingStar, 1800);
});