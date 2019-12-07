var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
  	var msg; 
  	Parse.create(message)
  	msg = MessageView.render(message)
  	// console.log(message.username)

  	$('#chats').prepend(JSON.stringify(msg))
  }

};