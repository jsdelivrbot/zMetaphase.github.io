// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDfSPwihLSl0ri_ufPxOa5z-FY2V7gQgAg",
    authDomain: "chat-app-a40bb.firebaseapp.com",
    databaseURL: "https://chat-app-a40bb.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  
  var chatData = firebase.database().ref();
  
  function pushMessage(event) {
      if(event.keyCode == 13){
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          chatData.push({name: name, text: text});
          $('#messageInput').val('');
      }
  }
  
  chatData.on("child_added", showMessage);
  
  function showMessage(msg) {
      // get the message object added to Firebase
      var message = msg.val();
      var messageSender = message.name;
      var messageContent = message.text;
      
      var messageE1 = $("<div/>").addClass("message");
      var senderE1 = $("<span/>").text(messageSender + ": ");
      var contentE1 = $("<span/>").text(messageContent);
      
      // .append adds an elemnt to the end
      messageE1.append(senderE1);
      messageE1.append(contentE1);
      $('#messages').append(messageE1);
  }
  
  $('#messageInput').keypress(pushMessage);
  