// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzLoAFN93eAWn8j5TCcB2O7XVLGKafT_w",
  authDomain: "connect-form-2aa78.firebaseapp.com",
  projectId: "connect-form-2aa78",
  storageBucket: "connect-form-2aa78.appspot.com",
  messagingSenderId: "498746928126",
  appId: "1:498746928126:web:c3801b4098a20c5738aeaf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let number = document.querySelector(".number").value;
  let city = document.querySelector(".city").value;
  let state = document.querySelector(".state").value;

  console.log(name, email);

  saveContactInfo(name, email, number, city, state);

  document.querySelector(".contact-form").reset();
}



// Save infos to Firebase
function saveContactInfo(name, email, number, city, state) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    number: number,
    city: city,
    state: state,

  });
}