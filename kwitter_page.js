//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAZ0jF_VgGRNo18iq16mD5aRqpT22QAgec",
      authDomain: "kwitter-14c7b.firebaseapp.com",
      databaseURL: "https://kwitter-14c7b-default-rtdb.firebaseio.com",
      projectId: "kwitter-14c7b",
      storageBucket: "kwitter-14c7b.appspot.com",
      messagingSenderId: "562150437481",
      appId: "1:562150437481:web:af9a03a26b33027dfd68f8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
         document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
