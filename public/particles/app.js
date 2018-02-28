/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  {
  "particles": {
    "number": {
      "value": 502,
      "density": {
        "enable": true,
        "value_area": 1104.8066982851817
      }
      },
      "color": {
        "value": "cc0000"
      },
      "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#0f0303"
      },
      "polygon": {
        "nb_sides": 3
      },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
   "opacity": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 289.9115647915802,
        "size_min": 52.785018799587434,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 96.20472365193136,
      "color": "#ffffff",
      "opacity": 0.43292125643369117,
      "width": 1.2827296486924182
    },
    "move": {
      "enable": true,
      "speed": 8.017060304327615,
      "direction": "right",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1362.9002517356944,
        "rotateY": 3126.65351868777
      }
    }
    },
   "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });

