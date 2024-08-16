document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("homeVideo");
  const playButton = document.getElementById("playButton");
  const videoPlaceholder = document.getElementById("videoPlaceholder");

  // Listen for the video's canplay event to know when it has loaded enough to play
  video.addEventListener("canplay", function () {
    // Hide the placeholder when the video is ready to play
    videoPlaceholder.style.display = "none";
    video.play();
  });

  video.addEventListener("playing", function () {
    videoPlaceholder.style.display = "none";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("homeVideo");
//   const videoPlaceholder = document.getElementById("videoPlaceholder");

//   // Function to start loading the video
//   function loadVideo() {
//     video.style.display = "none"; // Show the video
//     video.load(); // Load the video
//     video.addEventListener("canplay", function () {
//       videoPlaceholder.style.display = "none"; // Hide the placeholder when the video is ready
//       video.style.display = "block";
//     });
//   }

//   // Set a delay before loading the video (e.g., 5 seconds)
//   setTimeout(loadVideo, 5000); // 5000 milliseconds = 5 seconds

//   // Optional: Show the placeholder initially
//   videoPlaceholder.style.display = "flex";
//   video;
// });

$(document).ready(function () {
  var owl = $(".brands-carousel-content");
  owl.owlCarousel({
    items: 5,
    margin: 50,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    slideTransition: "linear",
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 2.5,
        margin: 50,
      },
      480: {
        items: 3,
        margin: 50,
      },
      575: {
        items: 3,
        margin: 50,
      },
      768: {
        items: 4.5,
        margin: 0,
      },
      992: {
        items: 4,
        margin: 20,
      },
      1199: {
        items: 5,
        margin: 50,
      },
      1400: {
        items: 7,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".gallery-carousel-content");
  owl.owlCarousel({
    items: 5,
    margin: 0,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    slideTransition: "linear",
    smartSpeed: 3000,
    nav: true,
    // navText: ["<", ">"],
    responsive: {
      0: {
        items: 2.5,
        margin: 50,
      },
      480: {
        items: 3,
        margin: 50,
      },
      575: {
        items: 3,
        margin: 50,
      },
      768: {
        items: 4.5,
        margin: 0,
      },
      992: {
        items: 4,
        margin: 20,
      },
      1199: {
        items: 4,
        margin: 50,
      },
      1400: {
        items: 4,
      },
    },
  });

  // Custom Navigation Events
  $(".owl-prev-arrow").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".owl-next-arrow").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 1000;
    console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".nav-transparent").css("background", "rgb(41 38 38 / 58%)");
    } else {
      $(".nav-transparent").css("background", "transparent");
    }
  });
});

$(document).ready(function () {
  var owl = $(".signage-brands-carousel-content");
  owl.owlCarousel({
    items: 5,
    margin: 50,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    slideTransition: "linear",
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 2.5,
        margin: 50,
      },
      480: {
        items: 3,
        margin: 50,
      },
      575: {
        items: 3,
        margin: 50,
      },
      768: {
        items: 4.5,
        margin: 0,
      },
      992: {
        items: 4,
        margin: 20,
      },
      1199: {
        items: 5,
        margin: 50,
      },
      1400: {
        items: 7,
      },
    },
  });

  // Handle tab click event
  $(".tab").on("click", function () {
    var tabId = $(this).data("tab");

    // Remove active class from all tabs and content panes
    $(".tab").removeClass("active");
    $(".tab-pane").removeClass("active");

    // Add active class to the clicked tab and corresponding content pane
    $(this).addClass("active");
    $("#" + tabId).addClass("active");
  });

  // Optionally activate the first tab and content by default
  $(".tab").first().addClass("active");
  $(".tab-pane").first().addClass("active");
});

$(document).ready(function () {
  var owl = $(".clients-carousel-content");
  owl.owlCarousel({
    items: 3,
    margin: 70,
    loop: false,
    dots: true,
    autoplay: false,
    slideTransition: "linear",
    responsive: {
      0: {
        items: 1,
        margin: 50,
      },
      480: {
        items: 1,
        margin: 50,
      },
      768: {
        items: 3,
        margin: 15,
      },

      1400: {
        items: 3,
        margin: 30,
      },
    },
  });
});
