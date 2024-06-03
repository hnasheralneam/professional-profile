// on page load, parse the location to find the page and go to that section
window.onload = function() {
   let page = window.location.hash.substring(1);
   console.log(page);
   if (page === "") {
      page = "meet";
   }
   goToSection(page);
}

function goToSection(page) {
   document.location = "#" + page;

   let indicator = document.getElementById(page + "Indicator");
   if (document.querySelector("span.active")) document.querySelector("span.active").classList.remove("active");
   indicator.classList.add("active")
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
   dynamHov.style.left = (event.clientX + 18) + "px";
   dynamHov.style.top = (event.clientY - 5) + "px";
});