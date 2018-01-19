self.addEventListener('fetch', function(event) {
	event.respondWith(
		new Response(
			'<h1 class="a-winner-is-me"> Hello World </h1>', {
				headers: {'Content-Type': 'text/html' }			
		})
	);
	
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
  console.log("this is a test");
});