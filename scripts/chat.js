  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDLV8gA7jx9v8lXSdNnyUR4R7qr4cZTWp4",
      authDomain: "photsen-message-store.firebaseapp.com",
      databaseURL: "https://photsen-message-store-default-rtdb.firebaseio.com",
      projectId: "photsen-message-store",
      storageBucket: "photsen-message-store.appspot.com",
      messagingSenderId: "544037227238",
      appId: "1:544037227238:web:4caf36af9cd9a558164927"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_store = localStorage.getItem("room_name");

  document.getElementById("display_room_name").innerHTML = room_store;

  function send() {
      msg = document.getElementById("msg").value;

      if (msg == "") {
          document.getElementById("msg").placeholder = "Don't type empty massage";
      } else {
          firebase.database().ref(room_store).push({
              name: user_name,
              message: msg
          });
          document.getElementById("msg").value = "";
          document.getElementById("msg").placeholder = "Aa";
      }
  }

  function getData() {
      firebase.database().ref("/" + room_store).on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if (childKey != "purpose") {
                  firebase_message_id = childKey;
                  message_data = childData;
                  //Start code
                  console.log(firebase_message_id);
                  console.log(message_data);
                  name = message_data['name'];
                  message = message_data['message'];

                  name_tag = "<h4 class='username_h4'><img class='user_tick' src='../images/profile.png'/> " + name + "</h4>";
                  message_tag = "<h4 class='message_h4'>" + message + "</h4><hr>";
                  row = name_tag + message_tag;
                  document.getElementById("output").innerHTML += row;
                  //End code
              }
          });
      });
  }
  getData();

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "message.html";
  }