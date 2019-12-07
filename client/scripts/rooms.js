var Rooms = {
	rooms: [],
	initialize: () => {
		$('#options: selected').click(refresh)
	},
	add: (room) =>{
		if(!Rooms.rooms.includes(room)) {
			Rooms.rooms.push(room);
			$('#rooms select').append(`<option id = "options">${room}</option>`)
	}
},

	refresh: () => {
		$('body').html('')


	}

};