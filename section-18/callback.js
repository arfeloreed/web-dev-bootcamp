//  understanding callback functions for example the addEventListener
function anotherAddEventListener(typeOfEvent, callback) {
  // detect the event

  var event = {
    type: "keydown",
    key: "w",
    duration: 2,
  };

  if (event.type === typeOfEvent) {
    callback(event);
  }
}

anotherAddEventListener("keydown", function (event) {
  console.log(event);
});
