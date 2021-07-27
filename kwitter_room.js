var firebaseConfig = {
    apiKey: "AIzaSyBLElcOP19XMYg4zdfkAvexebs1Oetg_tE",
    authDomain: "kwittertest-fb622.firebaseapp.com",
    databaseURL: "https://kwittertest-fb622-default-rtdb.firebaseio.com",
    projectId: "kwittertest-fb622",
    storageBucket: "kwittertest-fb622.appspot.com",
    messagingSenderId: "1071480354003",
    appId: "1:1071480354003:web:3b60be3ce1d4ab4cfc1026"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Add Room"
      });
 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}