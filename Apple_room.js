//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyB9xUTlct3Eu-QooDfxtpKXIxiYQVaDq24",
  authDomain: "apple-lol.firebaseapp.com",
  databaseURL: "https://apple-lol-default-rtdb.firebaseio.com",
  projectId: "apple-lol",
  storageBucket: "apple-lol.appspot.com",
  messagingSenderId: "1059092140213",
  appId: "1:1059092140213:web:6a931c7cb08a60c779aefc",
  measurementId: "G-F440FWVXKE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "Apple_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Apple_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}