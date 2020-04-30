/* MAIN.JS */

function changePic() {
  document.getElementById("profilePic").src = "images/portfolio21.jpg";
}

function normalPic() {
  document.getElementById("profilePic").src = "images/pic2.jpg";
}


$(".go-to-contact").click(function() {
  $('html, body').animate({
      scrollTop: $(".contact").offset().top
  }, 1000);
});