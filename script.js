const showBtn = document.querySelector(".navBtn");
const topNav = document.querySelector(".top-nav");

showBtn.addEventListener("click", function () {
  if (topNav.classList.contains("showNav")) {
    topNav.classList.remove("showNav");
    showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
  } else {
    topNav.classList.add("showNav");
    showBtn.innerHTML = '<i class = "fas fa-times"></i>';
  }
});

/* Lightbox */
var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

document.getElementById("enter").addEventListener("click", function (event) {
  event.preventDefault();
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
