function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("fields must be filled out");
    return false;
  } else
  {}
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
