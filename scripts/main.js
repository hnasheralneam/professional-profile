let page;
let sections = ["meet", "leadership", "skills", "clubs", "achievements", "work", "volunteering", "contact"];

// on page load, parse the location to find the page and go to that section
window.onload = function() {
   page = window.location.hash.substring(1);
   console.log(page);
   if (page === "") {
      page = "meet";
   }
   goToSection(page);
   updateArrowVisibility(sections.indexOf(page));
}

function goToSection(newPage) {
   page = newPage;
   document.location = "#" + page;

   let indicator = document.getElementById(page + "Indicator");
   if (document.querySelector("span.active")) document.querySelector("span.active").classList.remove("active");
   indicator.classList.add("active")
   updateArrowVisibility(sections.indexOf(page));
}


// Hover
let dynamHov;
let theme = "light";
setupDynamHov();

function setupDynamHov() {
   dynamHov = document.createElement("SPAN");
   document.body.appendChild(dynamHov);
   if (theme === "dark") { dynamHov.classList.add("dynamicHover"); }
   else { dynamHov.classList.add("dynamicHoverDark"); }
}

function info(THIS) {
   dynamHov.innerHTML = THIS.dataset.info;
   dynamHov.style.opacity = "1";
   THIS.onmouseleave = () => { dynamHov.style.opacity = "0"; }
}

document.addEventListener("mousemove", (event) => {
   dynamHov.style.left = (event.clientX + 20) + "px";
   dynamHov.style.top = (event.clientY - 12) + "px";
});


// Arrows
function nextSection() {
   let currentIndex = sections.indexOf(page);
   if (currentIndex < sections.length - 1) {
      page = sections[currentIndex + 1];
      goToSection(page);
   }
}

function lastSection() {
   let currentIndex = sections.indexOf(page);
   if (currentIndex > 0) {
      page = sections[currentIndex - 1];
      goToSection(page);
   }
}

function updateArrowVisibility(currentIndex) {
   document.querySelector(".arrow-left").classList.remove("hidden");
   document.querySelector(".arrow-right").classList.remove("hidden");

   if (currentIndex == 0)
      document.querySelector(".arrow-left").classList.add("hidden");
   if (currentIndex == sections.length - 1)
      document.querySelector(".arrow-right").classList.add("hidden");
}