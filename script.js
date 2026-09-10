// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// SIMPLE SCROLL REVEAL

const revealItems = document.querySelectorAll(
  ".course-card, .teacher-card, .about-content, .about-visual"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealItems.forEach(item => {

  item.style.opacity = "0";
  item.style.transform = "translateY(25px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";

  revealObserver.observe(item);

});


// CURRENT YEAR

const year = new Date().getFullYear();

document.querySelector(".copyright p").innerHTML =
  `© ${year} Miftahul Ilm Islamic Academy. All rights reserved.`;
