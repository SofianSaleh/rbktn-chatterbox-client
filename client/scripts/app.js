var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    var people = []
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for(var i = data.results.length - 1; i >= 0; i --){
        if(data.results[i].username && data.results[i].text){
          data.results[i]['friendStatus'] = false;
          MessagesView.renderMessage(data.results[i]) 

          /////// Adding existing rooms ///////
          var rooms = JSON.stringify(data.results[i].roomname)
          Rooms.add(rooms)
          //////////////////////////////
          if(!people.includes(data.results[i].username)) {
            people.push(data.results[i].username)
          }
        }
      }
      callback();
    });
    console.log(people)
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
