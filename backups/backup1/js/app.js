window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-content").style.top = "0em";
    document.getElementById("navbar-content").style.backgroundColor = "#1B2631";
  }
  else if(document.body.scrollTop < 20 || document.documentElement.scrollTop < 20){
    document.getElementById("navbar-content").style.top = "1.3em";
    document.getElementById("navbar-content").style.backgroundColor = "unset";
  }
  else {
    document.getElementById("navbar-content").style.top = "-50px";
  }
}

// menu-toggle
function toggle_menu() {
  document.getElementById("menu-toggled").style.display = "unset";
}function toggle_menu_close() {
  document.getElementById("menu-toggled").style.display = "none";
}

//slide show
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}