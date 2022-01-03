App.controller('home', function (page) {
    // put stuff here
  });

  App.controller('contact', function (page) {
    // put stuff here
  });  


  App.controller('about us', function (page) {
    // put stuff here
  }); 


  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }