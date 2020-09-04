let toggleBtn = document.getElementsByClassName("toggle-button")[0];
let navbar = document.getElementsByClassName("nav-list")[0];

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

$(document).ready(function () {
  $(".nav-flex a, .navbar a , .explore").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600
      );
    }
  });

  $(".logo-footer a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900
      );
    }
  });

  $(window).scroll(function () {
    let distanceFromTop = $(document).scrollTop();

    if (distanceFromTop > 80.5 && distanceFromTop < 505) {
      $(".heading-secondary").addClass("animate__animated animate__swing");
    }
  });
});

AOS.init({
  offset: 120,
  duration: 1000,
});
