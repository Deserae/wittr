self.addEventListener('fetch', function(event) {
//they said, event.request gives you information about the request
//i woudl console.log(event) and or console.log(event.request)
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  console.log("event.request " + event.request);
							
  console.dir(event);


  // var url = event.request.url;
  // console.log("url " + url);
  // var isJpeg = url.endsWith('.jpg');

  // if (isJpeg){

	 //  event.respondWith(
	 //    fetch('/imgs/dr-evil.gif')

  // 	);
  // }

});

//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//https://developer.mozilla.org/en-US/docs/Web/API/FetchEventhttps://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request
//https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
//https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request 
//https://developer.mozilla.org/en-US/docs/Web/API/Request