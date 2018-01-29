function categoryDropdown() {
    document.getElementById("categoryDropdown").classList.toggle("show");
    document.getElementById("shareDropdown").classList.remove("show");
}

function shareDropdown() {
    document.getElementById("shareDropdown").classList.toggle("show");
    document.getElementById("categoryDropdown").classList.remove("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("nav-sticky-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
