// Clock
function setTime() {

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();

  var period = "";
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  
  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  hour = update(hour);
  minute = update(minute);

  // Adding time elements to the div
  document.getElementById("time-text").innerText = hour + ":" + minute + " " + period;
  setTimeout(setTime, 1000);
}

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

setTime();

// about:blank
document.getElementById("launch").addEventListener("click", function() {
  const url = document.getElementById("urlInput").value;

  if (url.startsWith("https://")) {
    blank(url)
  } else {
    alert("Unable to confirm URL. Please make sure it starts with https://")
  }

});

function blank(url) {
  const tab = window.open('about:blank', '_blank');
  const iframe = tab.document.createElement('iframe');
  const stl = iframe.style;
  stl.border = stl.outline = 'none';
  stl.width = '100vw';
  stl.height = '100vh';
  stl.position = 'fixed';
  stl.left = stl.right = stl.top = stl.bottom = '0';
  iframe.src = url;
  tab.document.body.appendChild(iframe);
}

// tab name and favicon
function updateTabNames() {
  const tabNameInput = document.getElementById("tabname")
  document.title = tabNameInput.value;
  tabNameInput.value = ''
  localStorage.setItem('tabname', tabNameInput.value)
}

function updateFavicon() {
  const faviconInput = document.getElementById("faviconInput")
  const favicon = document.getElementById("favicon");
  favicon.setAttribute("href", faviconInput.value);
  faviconInput.value = ''
  localStorage.setItem('tabicon', faviconInput.value)
         
}

function updateProxy() {
  var input = _.get("#proxyInput")
  var frame = _.get("#frame")
  frame.src = input.value
  localStorage.setItem("proxy", input.value)
  frame.setAttribute("src", input.value)
  input.value = ""
}
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 20
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
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
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
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
  "retina_detect": true
});

_.get("#frame").src = localStorage.getItem("proxy") || "https://soap2day.com"