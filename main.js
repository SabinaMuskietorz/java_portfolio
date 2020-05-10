/* MAIN.JS */

function changePic() {
  document.getElementById("profilePic").src = "portfolio21new.jpg";
}

function normalPic() {
  document.getElementById("profilePic").src = "pic2.jpg";
}


$(".go-to-contact").click(function() {
  $('html, body').animate({
      scrollTop: $(".contact").offset().top
  }, 1000);
});