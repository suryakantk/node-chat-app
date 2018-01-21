var socket = io();

socket.on('connect',function(){
 console.log('Connected to server.');

 // socket.emit('createEmail',{
 //   to:'shrimankumbar@gmail.com',
 //   text:'Hey,this is Shriman.'
 // });


});

socket.emit('newMessage',{
 from:'Shriman',
 text:'Shriman.Broadcast '
},function(data){
 console.log('Got it this  is from server.');
});


socket.on('disconnect',function(){
 console.log('Disconnected from server.');
})

// socket.on('newEmail',function(email){
//   console.log('New email',email);
// });

socket.on('newMessage',function(message){
 var formattedTime = moment(message.createdAt).format('h:mm a');
 var li =jQuery('<li></li>');
 li.text(`${message.from} ${formattedTime}: ${message.text}`);
 jQuery("#messages").append(li);
});

socket.on('newLocationMessage',function(message){
 var formattedTime = moment(message.createdAt).format('h:mm a');
 var li =jQuery('<li></li>');
 var link = jQuery('<a target="_blank"> My current location</a>');

 li.text(`${message.from} ${formattedTime} :`);
 link.attr('href', message.url);
 li.append(link);
 jQuery("#messages").append(li);
});

jQuery("#message-form").on('submit',function(e){
 e.preventDefault();
 if(jQuery("[name=message]").val().trim()==='') {
   return false;
 }
 socket.emit('createMessage',{
   from:'User',
   text:jQuery("[name=message]").val()
 },function(){

 });

});

var locationButton = jQuery("#send-location");
locationButton.on('click', function () {
    if(!navigator.geolocation) {
      return alert("Geolocation not supported by browser.");
    }
    locationButton.attr("disabled","disabled").text("Sending location.....");
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Geoposition ", position);
        locationButton.removeAttr('disabled').text("Send location");
        socket.emit('createLocationMessage', {
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        });
    },function () {
      locationButton.removeAttr('disabled').text("Send location");
      alert("unable to fetch location");
    });
});
