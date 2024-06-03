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
