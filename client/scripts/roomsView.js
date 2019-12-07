var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	$('#rooms button').click(RoomsView.renderRoom)
  },

  renderRoom: function() {
  	var roomName = $('#message').val();
  		Rooms.add(roomName)
  }

};
