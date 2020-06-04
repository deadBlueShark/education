$(() => {
  const BASE_URL = 'http://localhost:3000';

  // Initialize Socket.io, this wil try to make a connection to the Socket.io server
  // at the same URL that the current page is being hosted on
  const SOCKET = io();

  $("#send-button").click(function() {
    let name = $("#sender").val();
    let content = $("#content").val();

    if(!(name || content)) return;
    let message = { name: name, content: content }

    // $.post(`${BASE_URL}/messages`, message, (data, status) => {
    //   if (status != 'success') return;
    //   displayMessage(message)
    // })
    $.post(`${BASE_URL}/messages`, message);
  });

  // Event Listener listens to 'message' event from server
  SOCKET.on('message', displayMessage);

  $.get(`${BASE_URL}/messages`, (data, status) => {
    if (status != 'success') throw status;
    $.each(data, (index, value) => {
      displayMessage(value);
    })
  })
})

function displayMessage(message) {
  $("#message-display").append(`<div><strong>${message.name}: </strong>${message.content}<div>`)
}
