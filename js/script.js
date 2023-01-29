$(function() {
  $('.toggleNav').on('click',function() {
    $('.flex-nav ul').toggleClass('open');
  });
});


	/*  
	LOGIC OF THE LIGHTBOX
		– User clicks link with class lightbox_trigger
			– Prevent the browser from following the link by default
			- See if the lightbox div is already inside the document
				- If it exists:
					- Find and the existing img tag inside the content div.
					- Replace the image’s src value with the href value of whatever link was clicked.
				- If it doesn’t exist:
					- Insert the lightbox markup into the page with the image’s src value set to the href value of whatever link was clicked
		- Allow any click on the lightbox (when displayed) to make it disappear
	 */
	 

	$(document).ready(function() {
	
	$('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
		   	
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox" style="display:none">' +
				'<p style="font-size: 2rem;">&#10006;</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />'  +
          	
				'</div>' + 
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		//make sure images that are too tall still ft the window
		var maxheightvalue = $("#lightbox").height -60;
		$("#lightbox img").css("max-height", maxheightvalue + "px");
		//show lightbox window
		$('#lightbox').fadeIn(400);
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$(document).on('click', '#lightbox', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').fadeOut(300);
	});

});


  $(document).ready(function() {
          $("a.scrollLink").click(function(event) {
              event.preventDefault();
              $("html, body").animate({
                  scrollTop: $($(this).attr("href")).offset().top
                }, 500);
            });
        });