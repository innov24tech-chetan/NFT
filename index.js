
  var light = document.getElementById ('light');
  light.onclick = function () {
      document.body.classList.toggle("light-theme");
      
  }
  var swiper = new Swiper('.top-seller', {
    slidesPerView: 'auto', // Adjust the number of visible slides as needed
    spaceBetween: 10, // Adjust space between slides as needed
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable clickable pagination bullets
    },
});
 // function myFunction() {
  //  var checkBox = document.getElementById("myCheck");
    
   // if (checkBox.checked == true){
 // } else {
     // text.style.display = "block";
       //text.style.display = "none";
    //}
 // }
 
// Get references to the div and the button
//const myDiv = document.getElementsByClassName('explore-ul');
//const addClassBtn = document.getElementsByClassName('hamburger');

// Add an event listener to the button for the click event
//addClassBtn.addEventListener('click', function() {
  // Add a new class to the div element when the button is clicked
  //myDiv.classList.add('active');
//});
  
//var explore_ul = document.querySelector(".explore-ul");
//var hamburger = document.querySelector(".hamburger")

//function showMenu(){
  //explore_ul.style.display = "block"
//}
//function hideMenu(){
  //explore_ul.style.right = "none"
//}
//var explore_ul = document.querySelector(".explore-ul");

//function showMenu() {
 // if (explore_ul) {
   // explore_ul.style.display = "0px"; // Make sure to include proper units (e.g., pixels)
 // } else {
 //   console.error("Element with class 'explore-ul' not found.");
 // }
//}

//function hideMenu() {
 // if (explore_ul) {
 //   explore_ul.style.right = "-200px"; // Include proper unit (e.g., pixels)
//  } else {
 //   console.error("Element with class 'explore-ul' not found.");
 // }
//}
function toggleExploreUl() {
  var exploreUl = document.querySelector('.explore-ul');
  if (exploreUl.style.display === 'none' || exploreUl.style.display === '') {
    exploreUl.style.display = 'block';
  } else {
    exploreUl.style.display = 'none';
  }
}
$(document).ready(function () {
  $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
  });
});