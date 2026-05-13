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

  const sceneImageWrap = document.querySelector(".scene-image-wrap");

  const wrenStoryOverlay = document.createElement("img");
  wrenStoryOverlay.id = "wren-story-overlay";
  wrenStoryOverlay.className = "scene-overlay";
  wrenStoryOverlay.src = "images/wren-overlay.png";

  const axStoryOverlay = document.createElement("img");
  axStoryOverlay.id = "ax-story-overlay";
  axStoryOverlay.className = "scene-overlay";
  axStoryOverlay.src = "images/ax-overlay.png";

  sceneImageWrap.appendChild(wrenStoryOverlay);
  sceneImageWrap.appendChild(axStoryOverlay);

  const scenes = {
    bedroom: {
      title: "Wren’s Birthday Morning",
      image: "images/bedroom.png",
      text:
        "Ever since Wren’s very first birthday, one star had always shined brighter than every other star in the sky on May 12th. Her mother called it Wren’s Birthday Star. Every year before bed, Wren would look through her telescope, find the glowing star, and make one special birthday wish. And somehow... the wishes always seemed to come true.\n\nThis year, Wren already knew exactly what she wanted to wish for.\n\nBut when she looked through her telescope that morning... the Birthday Star was gone.\n\n“Wait... WHAT?!” Wren gasped.\n\nBeside her floated Ax, Wren’s pet axolotl. Wren had won Ax from a claw machine at the Space Science Museum three years earlier, and Ax had worn a tiny astronaut helmet ever since.\n\n“Bloop?” Ax asked nervously.\n\nThen Wren noticed something strange drifting outside her window: Little tufts of fluffy white fur floating where the Birthday Star used to shine.\n\n“Uh oh,” said Wren. “I think somebody stole my star!”",
      choices: [
        { text: "Look through the telescope", next: "telescope" },
        { text: "Ask Ax what he thinks", next: "axButtons" }
      ]
    },

    telescope: {
      title: "The Telescope Clue",
      image: "images/telescope.png",
      text:
        "Wren looked through her telescope and gasped.\n\nFar away on a cold, icy world, something fluffy moved across the ice while holding a glowing star.\n\n“Polar bear!” Wren said.\n\nAx bonked the telescope with his tail.\n\n“I have to get my star back before tonight,” Wren said. “Otherwise I won’t be able to make my birthday wish.”",
      choices: [
        { text: "Run to the rocket ship", next: "rocket" },
        { text: "Eat birthday pancakes first", next: "pancakes" }
      ]
    },

    axButtons: {
      title: "The Sparkly Red Button",
      image: "images/sparkle-mode.png",
      text:
        "Ax wiggled onto Wren’s control panel.\n\n“Bloop bloop!”\n\nWren knew that meant: “Definitely DO NOT press the sparkly red button.”\n\nWren looked at the button.\n\nAx looked at the button.\n\nThe button sparkled.\n\nThat was not fair.",
      choices: [
        { text: "Press the sparkly red button", next: "spaceDisco" },
        { text: "Back away slowly", next: "tooResponsible" }
      ]
    },

    tooResponsible: {
      title: "Too Much Self-Control",
      image: "images/responsible.png",
      text:
        "Wren backed away from the sparkly red button.\n\nVery responsible.\n\nVery mature.\n\nVery impressive.\n\nThen Ax pressed it.",
      choices: [
        { text: "Oh no, Ax!", next: "spaceDisco" }
      ]
    },

    spaceDisco: {
      title: "Space Disco",
      image: "images/space-disco.png",
      special: "discoDance",
      text:
        "The room filled with confetti and disco music.\n\nWren and Ax danced ALL DAY LONG.\n\nThey danced through lunch. They danced through dinner. They even danced through bedtime.\n\nAs everyone knows, once Wren and Ax start a space disco party... it is almost impossible to stop.\n\nWren may have missed her birthday wish...\n\nbut the party was AMAZING.\n\nTHE END.",
      choices: [
        { text: "Play Again", next: "title" }
      ]
    },

    pancakes: {
      title: "Pancake Pile",
      image: "images/pancakes.png",
      text:
        "The pancakes were delicious.\n\nExtra syrupy. Extra fluffy.\n\nWren accidentally ate so many pancakes that she fell asleep in a pancake pile.\n\nAx used pancake syrup to draw a tiny rocket ship on her forehead.\n\nWren may have missed her birthday wish... but the pancakes were AMAZING.\n\nTHE END.",
      choices: [
        { text: "Play Again", next: "title" }
      ]
    },

    rocket: {
      title: "The Star Hopper Rocket",
      image: "images/rocket.png",
      text:
        "Wren and Ax blasted into space inside the Star Hopper rocket.\n\nStars streaked past the windows as the cold planet slowly grew larger in the distance. Ax pressed his face against the glass and made an excited squeaking sound.\n\n“I hope we get there in time,” Wren said. “I’ve been waiting all year for my birthday wish.”\n\nAx pressed his face against the window and pointed excitedly toward the distant stars.",
      choices: [
        { text: "Follow the stardust trail", next: "moon" },
        { text: "Take the asteroid shortcut", next: "asteroids" }
      ]
    },

    moon: {
      title: "Moon Bunny Station",
      image: "images/moon.png",
      text:
        "Wren followed the sparkling stardust trail deeper into space.\n\nBut halfway to Pluto, the rocket suddenly made a loud BEEEEEEP!\n\n“Uh oh,” said Wren.\n\nThe fuel gauge was almost empty. Luckily, a tiny glowing station floated nearby on the moon.\n\nInside was a cozy little café run entirely by moon bunnies.\n\nOne bunny whispered, “A fluffy visitor carrying a glowing star stopped here earlier.”\n\nAnother bunny gave Ax a carrot-shaped space cookie. Ax happily munched while Wren stared out the café window, trying not to think about losing her birthday wish.",
      choices: [
        { text: "Ask for directions to Pluto", next: "pluto" },
        { text: "Play zero-gravity hopscotch", next: "hopscotch" }
      ]
    },

    hopscotch: {
      title: "Ten Out of Ten Boings",
      image: "images/hopscotch.png",
      text:
        "Wren jumped too hard during moon hopscotch.\n\nShe bounced ALL THE WAY around the moon.\n\nThree times.\n\nAx gave her a scorecard: 10/10 BOINGS.\n\nWren may have missed her birthday wish... but she probably set a new moon record.\n\nTHE END.",
      choices: [
        { text: "Play Again", next: "title" }
      ]
    },

    asteroids: {
      title: "The Glitter Asteroid Belt",
      image: "images/asteroid-belt.png",
      text:
        "The asteroid belt was full of glowing glitter rocks and floating space cupcakes.\n\nAx tried to eat a meteor.\n\n“AX, NO!”\n\nToo late. The meteor tasted like blueberry socks.\n\nWren checked the star map. “We can’t get too distracted. My birthday wish is waiting.”",
      choices: [
        { text: "Follow the trail of white fur", next: "pluto" },
        { text: "Collect glitter cupcakes", next: "cupcakes" }
      ]
    },

    cupcakes: {
      title: "Cupcake Overload",
      image: "images/cupcakes.png",
      text:
        "Wren collected SO MANY glitter cupcakes that the rocket became too heavy.\n\nThe rocket computer announced: WARNING: THIS SHIP IS NOW 87% CUPCAKE.\n\nWren may have missed her birthday wish... but she discovered the most delicious traffic jam in space.\n\nTHE END.",
      choices: [
        { text: "Play Again", next: "title" }
      ]
    },

    pluto: {
      title: "The Pluto Ice Cave",
      image: "images/pluto-cave.png",
      text:
        "Wren finally reached Pluto.\n\nInside a glowing ice cave, a giant fluffy polar bear cuddled the Birthday Star like a teddy bear. The cave glowed with cozy light.\n\nThe polar bear looked surprised.\n\n“Oh,” he said softly. “Is this YOUR star?”\n\nWren stared at the Birthday Star. She had finally found it. Her special wish was so close.",
      choices: [
        { text: "Say, “You stole it!”", next: "grumpy" },
        { text: "Ask, “Why did you take it?”", next: "kind" }
      ]
    },

    grumpy: {
      title: "A Grumpy Moment",
      image: "images/grumpy.png",
      text:
        "Wren crossed her arms.\n\n“I am going to stay grumpy,” she said.\n\nShe tried very hard.\n\nBut Ax was floating beside her making his tiny worried face.\n\nAnd it was still her birthday.\n\nAnd the polar bear looked very sorry.\n\nBeing grumpy was starting to feel like a lot of work.\n\nWren took a big breath.\n\n“Okay,” she said. “Why did you take my star?”",
      choices: [
        { text: "Ask why he took it", next: "kind" }
      ]
    },

    kind: {
      title: "Sharing the Birthday Star",
      image: "images/ending.png",
      text:
        "The polar bear carefully hugged the glowing star.\n\n“I’m sorry,” he said softly. “Pluto gets cold and lonely at night. The star made my cave feel warm and happy.”\n\nWren looked at the shining Birthday Star. She had waited ALL YEAR to make her special birthday wish. There were so many things she wanted to wish for.\n\nAx gently held her hand.\n\nWren looked around the cold little cave. Then she smiled.\n\n“I think everybody deserves a special wish,” she said.\n\nWren closed her eyes and made her birthday wish anyway.\n\n“I wish the Birthday Star could shine for BOTH of us.”\n\nThe star suddenly glowed brighter than ever before. Warm golden light filled the cave. The polar bear’s eyes sparkled.\n\nFrom that day on, every May 12th, the Birthday Star shined brightly for Wren... and every night, it sent cozy starlight all the way to Pluto.\n\nAx squeaked happily.\n\nTHE END.",
      choices: [
        { text: "Birthday Sparkle Mode", next: "celebrate" }
      ]
    },

    celebrate: {
      title: "Birthday Sparkle Mode",
      image: "images/celebrate.png",
      special: "axCelebration",
      text:
        "Ax floated happily beneath the glowing Birthday Star.\n\n“BLOOP BLOOP!”\n\nNobody knew exactly what Ax was saying...\n\nbut it was probably:\n\n“Happy Birthday, Wren!”",
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

  function clearSpecialScene() {
    wrenStoryOverlay.className = "scene-overlay";
    axStoryOverlay.className = "scene-overlay";

    document.querySelectorAll(".disco-light").forEach(function (light) {
      light.remove();
    });
  }

  function activateSpecialScene(special) {
    clearSpecialScene();

    if (special === "discoDance") {
      wrenStoryOverlay.classList.add("dance");
      axStoryOverlay.classList.add("dance");

      ["one", "two", "three"].forEach(function (name) {
        const light = document.createElement("div");
        light.className = "disco-light " + name;
        sceneImageWrap.appendChild(light);
      });
    }

    if (special === "axCelebration") {
      axStoryOverlay.classList.add("celebrate");
    }
  }

  function showTitle() {
    clearSpecialScene();
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

    activateSpecialScene(scene.special);

    storyScreen.scrollTop = 0;

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
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");

      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";

      starsContainer.appendChild(star);
    }
  }

  function createConstellations() {
    const points = [
      [14, 18], [18, 19], [22, 20],
      [72, 14], [76, 13], [80, 15],
      [10, 34], [14, 31], [18, 34]
    ];

    points.forEach(function (point) {
      const star = document.createElement("div");
      star.className = "constellation-star";
      star.style.left = point[0] + "%";
      star.style.top = point[1] + "%";
      constellationsContainer.appendChild(star);
    });
  }

  function createParticles() {
    for (let i = 0; i < 22; i++) {
      const particle = document.createElement("div");

      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      particlesContainer.appendChild(particle);
    }
  }

  function triggerShootingStar() {
    const direction = Math.random() > 0.5 ? "leftToRight" : "rightToLeft";
    const startTop = 8 + Math.random() * 26;
    const slightAngle = -4 + Math.random() * 8;
    const travelDistance = window.innerWidth + 360;

    shootingStar.style.top = startTop + "%";

    if (direction === "leftToRight") {
      shootingStar.style.left = "-220px";
      shootingStar.style.background =
        "linear-gradient(90deg, transparent, rgba(255, 241, 166, 0.25), rgba(255, 241, 166, 1))";
    } else {
      shootingStar.style.left = "110vw";
      shootingStar.style.background =
        "linear-gradient(90deg, rgba(255, 241, 166, 1), rgba(255, 241, 166, 0.25), transparent)";
    }

    const endX = direction === "leftToRight"
      ? travelDistance
      : -travelDistance;

    shootingStar.getAnimations().forEach(function (animation) {
      animation.cancel();
    });

    shootingStar.animate(
      [
        { transform: "translateX(0px) rotate(" + slightAngle + "deg)", opacity: 0 },
        { transform: "translateX(" + endX * 0.08 + "px) rotate(" + slightAngle + "deg)", opacity: 1 },
        { transform: "translateX(" + endX * 0.92 + "px) rotate(" + slightAngle + "deg)", opacity: 1 },
        { transform: "translateX(" + endX + "px) rotate(" + slightAngle + "deg)", opacity: 0 }
      ],
      {
        duration: 9500,
        easing: "linear",
        fill: "forwards"
      }
    );

    setTimeout(triggerShootingStar, 4500 + Math.random() * 6500);
  }

  createStars();
  createConstellations();
  createParticles();

  setTimeout(triggerShootingStar, 1800);
});