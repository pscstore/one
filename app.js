// Custom configuration
function policyChampConfetti() {
  confetti({
    particleCount: 100, // Total number of particles
    startVelocity: 30, // Speed at which particles are launched
    spread: 70, // Spread angle of particles
    gravity: 1, // Default gravity
    origin: { y: 0.6 }, // Y-axis origin point to start confetti
    scalar: 1.2 // Size of the particles
  });
}

if (window.location.hash === "#thanks-you") {
  // confetti();
  policyChampConfetti()
}

let progressItem = document.querySelectorAll(".progress-item");
let homeBox = document.querySelectorAll(".home");
let approveBox = document.querySelector(".approve");
let paymentBox = document.querySelector(".payment");
let vehicleBox = document.querySelector(".vehicle-years");
let brandBox = document.querySelectorAll(".car-brand-box");
let loadBox = document.querySelector(".progress-container");
let yersBox = document.querySelectorAll(".yers");
let verifyPayment = document.querySelector(".verify-payment");
let carModel = document.querySelector(".car-model");
let timer = false;

yersBox.forEach(el => {
  el.addEventListener('click', function() {
    window.location.hash = "#start";
  })
})

function progrssPage(pageNumber) {
  for (let i = 0; i < progressItem.length; i++) {
    if (i <= pageNumber - 1) {
      progressItem[i].classList.add("filled");
    } else {
      progressItem[i].classList.remove("filled");
    }
  }
}

brandBox.forEach((el, i) => {
  el.addEventListener("click", function() {
    window.location.hash = "";
    window.location.hash = "#loader";
  })
})

function home(action) {
  if (action === true) {
    homeBox.forEach(el => {
      el.classList.remove("non-active")
      el.classList.add("slide-show")
    })
  } else {
    homeBox.forEach(el => {
      el.classList.add("non-active")
      el.classList.remove("slide-show")
    })
  }
}

function approve(action) {
  if (action === true) {
    approveBox.classList.remove("non-active")
    approveBox.classList.add("slide-show")
  } else {
    approveBox.classList.add("non-active");
    approveBox.classList.remove("slide-show")
  }
}

function vehicle(action) {
  if (action === true) {
    vehicleBox.classList.remove("non-active")
    vehicleBox.classList.add("slide-show")
  } else {
    vehicleBox.classList.add("non-active")
    vehicleBox.classList.remove("slide-show")
  }
}

function lodder(action) {
  if (action === true) {
    loadBox.classList.remove("non-active");
  } else {
    loadBox.classList.add("non-active")
  }
}

function verifiLoading(action) {
  if (action === true) {
    verifyPayment.classList.remove("non-active");
    verifyPayment.classList.add("slide-show")
  } else {
    verifyPayment.classList.add("non-active");
    verifyPayment.classList.remove("slide-show")
  }
}

function carModeList(action) {
  if (action === true) {
    carModel.classList.remove("non-active");
    carModel.classList.add("slide-show");
  } else {
    carModel.classList.add("non-active");
    carModel.classList.remove("slide-show");
  }
}



// Animation
var animation = lottie.loadAnimation({
  container: document.getElementById('checkmark-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: './animation/loading2.json'
});

function checkPages() {
  if (this.location.hash === "" || this.location.hash === "#") {
    this.location.hash = "#payment";
    progrssPage(1)
  }
  if (this.location.hash === "#loader") {
    // Loading page
    console.log("Loading pages")
    lodder(false)
    home(false)
    approve(false)
    vehicle(false)
    verifiLoading(true);
    carModeList(false)
    progrssPage(4)

    animation.goToAndStop(0, true);
    animation.play()
    timer = setTimeout(function() {
      this.location.hash = "#thanks-you";
      approve(true);
      // confetti();
      policyChampConfetti()

      verifiLoading(false);
    }, 2000)
  } else {
    clearTimeout(timer)
  }

  if (this.location.hash === "#thanks-you") {
    lodder(false);
    home(false)
    approve(true);
    vehicle(false);
    // confetti();
    policyChampConfetti()
    verifiLoading(false);
    carModeList(false)
    progrssPage(5)
  }

  if (this.location.hash === "#payment") {
    lodder(true)
    approve(false)
    home(false)
    vehicle(true);
    verifiLoading(false);
    carModeList(false)
    progrssPage(1)
  }

  if (this.location.hash === "#start") {
    lodder(true)
    home(true)
    approve(false)
    vehicle(false)
    verifiLoading(false);
    carModeList(false)
    progrssPage(2)
  }

  if (this.location.hash === "#model") {
    lodder(true)
    home(false)
    approve(false)
    vehicle(false)
    verifiLoading(false);
    carModeList(true)
    progrssPage(3)
  }
}

window.addEventListener("load", function() {
  checkPages()
})

// On hash change on address bar
window.addEventListener('popstate', function() {
  checkPages()
})