document.querySelector("#sidebarCollapse").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("active");
});

window.addEventListener(
  "hashchange",
  ({ newURL }) => {
    let citas = document.querySelector("#customer-cita");
    let author = document.querySelector("#customer-name");
    let section = newURL.slice(newURL.indexOf("#") + 1);

    switch (section) {
      case "Jhon-Smith":
        citas.textContent = "";
        citas.textContent =
          "The creams are fantastic and wonderful, they have made me feel younger, and have given my skin incredible softness, 100% recommended their products";

        author.textContent = "";
        author.textContent = section.replace("-", " ");

        break;
      case "Carla-Mendoza":
        citas.textContent = "";
        citas.textContent =
          "Phasellus a ante laoreet, molestie tortor eu, pretium mi. Suspendisse cursus ut arcu sit amet tempus. Suspendisse eu tristique neque. Curabitur pellentesque convallis orci, eget condimentum enim commodo eget. Cras eget turpis ac leo malesuada volutpat eu vitae libero. Morbi iaculis varius ullamcorper. Vestibulum ut augue mi. Aenean in velit at arcu suscipit egestas. Praesent eu velit sit amet erat fermentum placerat ac ac quam";

        author.textContent = "";
        author.textContent = section.replace("-", " ");
        break;
      case "Juan-Diaz":
        citas.textContent = "";
        citas.textContent =
          "Aenean semper ligula eget neque egestas luctus. Etiam ut pulvinar sapien, sed vulputate tortor. Proin semper elit elementum turpis interdum dictum. Praesent eros magna, lobortis in augue a, condimentum lacinia leo. Vestibulum finibus diam sed neque pharetra elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In orci turpis, elementum ut felis et, maximus varius nisl. Nunc mollis pharetra elit, eget fringilla tellus interdum sit amet.";

        author.textContent = "";
        author.textContent = section.replace("-", " ");
        break;
    }
  },
  false
);

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});

$("#owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  margin: 80,
  items: 3,
  navText: ["<", ">"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    711: {
      items: 2,
      nav: true,
      dots: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});

$("#owl-carousel2").owlCarousel({
  items: 1,
  navText: ["<", ">"],
  center: true,
  nav: true,
  dots: false,
  margin: 10,
  URLhashListener: true,
  startPosition: "URLHash",
});


