/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const appearOptions = {threashold: 0,
                        rootMargin: "0px 0px -100px 0px"
}
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));