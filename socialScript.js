var firebaseConfig = {
  apiKey: "AIzaSyDNulCMShvMlQcyd2_uY7TxuP-t11MGy-Q",
  authDomain: "ninja-socials-cd171.firebaseapp.com",
  databaseURL: "https://ninja-socials-cd171-default-rtdb.firebaseio.com",
  projectId: "ninja-socials-cd171",
  storageBucket: "ninja-socials-cd171.appspot.com",
  messagingSenderId: "1019229725224",
  appId: "1:1019229725224:web:5300ef98a97821ced6cb1d"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var link;

document.getElementById("submit").addEventListener("click",submitForm);

function submitForm(e)
{
  e.preventDefault();
  var social = document.getElementById("around").value;
  var ref = database.ref("Socials");
  ref.on("value", function(snapshot){
    snapshot.forEach(function(element){
      if (social==element.key){
        window.open(element.val(),"-blank")
      }
    })
  });
}
