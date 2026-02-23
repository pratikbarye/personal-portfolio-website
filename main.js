/* ------------------  Form Validation and Send Email -------------------- */

(function () {
  emailjs.init("YwIXv_3pwCmGVlbB3");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ Simple validation
  const name = form.from_name.value.trim();
  const email = form.from_email.value.trim();
  const mobile = form.mobile.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !mobile || !subject || !message) {
    alert("Please fill all fields");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Enter valid email");
    return;
  }

  if (mobile.length < 10) {
    alert("Enter valid mobile number");
    return;
  }

  if (mobile.length > 10) {
    alert("Enter valid mobile number");
    return;
  }

  // ✅ Send email
  emailjs
    .sendForm("service_2lumpsu", "template_9t4et4g", this)
    .then(() => {
      alert("Message sent successfully ✅");
      form.reset();
    })
    .catch((error) => {
      alert("Failed to send message ❌");
      console.log(error);
    });
});

/* ------------------  Toggle Icon Navbar -------------------- */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/* ------------------  scroll section active link -------------------- */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");

        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ------------------ sticky navbar -------------------- */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ------------------ remove toggle icon and navbar -------------------- */
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/* ===================== scroll reveal ===================== */

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skill-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
/* ===================== typed js ===================== */

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "C++ Programmer"],
  typeSpeed: 35,
  backSpeed: 35,
  backDelay: 1000,
  loop: true,
});

/* ===================== THEME TOGGLE ===================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.classList.replace("fa-moon", "fa-sun");
}

themeToggle.onclick = () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeToggle.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
};
