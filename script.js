// CONTACT FORM JS
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks! I'll get back to your soon!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
});
  
// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// SHOW ON SCROLL JS
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// FUNCTION TO REMOVE CLASS IN ABOUT ME SECTION AT CERTAIN SCREEN WIDTH
$(function(){
  $(window).bind("resize",function(){
      if($(this).width() < 830){
        $('#icons1').removeClass('small-4').addClass('mobile-class');
        $('#icons2').removeClass('small-4').addClass('mobile-class');
        $('#icons3').removeClass('small-4').addClass('mobile-class');
        $('#about-bio-info').removeClass('small-6').addClass('mobile-class');
        $('#about-bio-info1').removeClass('small-6').addClass('mobile-class');
      }
      else{
        $('#icons1').removeClass('mobile-class').addClass('small-4');
        $('#icons2').removeClass('mobile-class').addClass('small-4');
        $('#icons3').removeClass('mobile-class').addClass('small-4');
        $('#about-bio-info').removeClass('mobile-class').addClass('small-6');
        $('#about-bio-info1').removeClass('mobile-class').addClass('small-6');
      }
  })
})
