self.addEventListener('fetch', function(event) {
//they said, event.request gives you information about the request
//i woudl console.log(event) and or console.log(event.request)
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  console.log("event.request" + event.request);
  var url = event.request.something;
  var isJpeg = url.endsWith('.jpg');

  if (isJpeg){

	  event.respondWith(
	    fetch('/imgs/dr-evil.gif')

  	);
  }

  // event.respondWith(
	 //    new Response('test');
	 //    );

});