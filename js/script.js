// Login Modal //
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// sign Up Modal //
var signmodal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signmodal) {
    signmodal.style.display = "none";
  }
};
// birthday modal //
// Get the modal
var bmodal = document.getElementById("bModal");

// Get the button that opens the modal
var btn = document.getElementById("birthdayBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  bmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  bmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == bmodal) {
    bmodal.style.display = "none";
  }
};
// Wedding modal //
// Get the modal
var wmodal = document.getElementById("wModal");

// Get the button that opens the modal
var btn = document.getElementById("weddingBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("wclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  wmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  wmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == wmodal) {
    wmodal.style.display = "none";
  }
};
// Aniversary modal //
// Get the modal
var amodal = document.getElementById("aModal");

// Get the button that opens the modal
var btn = document.getElementById("aniversaryBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("aclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  amodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  amodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == amodal) {
    amodal.style.display = "none";
  }
};
// flower gallery 
function openModal(modalId) {
  var modals = document.getElementById(modalId);
  modals.style.display = "block";
}

function closeModal(modalId) {
  var modals = document.getElementById(modalId);
  modals.style.display = "none";
}

document.getElementById("myBtn1").onclick = function() {
  openModal('modal1');
}

document.getElementById("myBtn2").onclick = function() {
  openModal('modal2');
}

document.getElementById("myBtn3").onclick = function() {
  openModal('modal3');
}

var closeButtons = document.getElementsByClassName("close1");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
      var modalId = this.getAttribute('data-modal');
      closeModal(modalId);
  }
}

window.onclick = function(event) {
  if (event.target.className === 'modals') {
      event.target.style.display = "none";
  }
}

// JavaScript for form submission and local storage
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Data validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Save data to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Message sent successfully!");
  });






  











































