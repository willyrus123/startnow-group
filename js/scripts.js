// Add this to scripts.js
document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.dropbtn');
  dropdown.onclick = function(event) {
    document.getElementById("myDropdown").classList.toggle("show");
  };
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});
