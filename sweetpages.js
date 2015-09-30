(function($){
var currentPage = 0;
//keep track of current page(for screen rotation purposes)

// Creating the sweetPages jQuery plugin:
$.fn.sweetPages = function(opts){

	// If no options were passed, create an empty opts object
	if(!opts) opts = {};

	var resultsPerPage = opts.perPage || 1;

	// The plugin works best for unordered lists,
	// although OLs would do just as well:
	var ul = this;
	var li = ul.find('li');

	li.each(function(){
		// Calculating the height of each li element,
		// and storing it with the data method:

		var el = $(this);
		el.data('height',el.outerHeight(true));
	});

	// Calculating the total number of pages:
	var pagesNumber = Math.ceil(li.length/resultsPerPage);
	

	// If the pages are less than two, do nothing:
	if(pagesNumber<2) return this;

	// Creating the controls div:
	var swControls = $('<div class="swControls">');

	for(var i=0;i<pagesNumber;i++)
	{
		// Slice a portion of the li elements, and wrap it in a swPage div:
		li.slice(i*resultsPerPage,(i+1)*resultsPerPage).wrapAll('<div class="swPage" />');

		// Adding a link to the swControls div:
		swControls.append('<a href="" class="swShowPage">'+(i+1)+'</a>');
	}

	ul.append(swControls);
	var maxHeight = 0;
	var totalWidth = 0;

	var swPage = ul.find('.swPage');
	swPage.each(function(){

		// Looping through all the newly created pages:

		var elem = $(this);

		var tmpHeight = 0;
		elem.find('li').each(function(){tmpHeight+=$(this).data('height');});

		if(tmpHeight>maxHeight)
			maxHeight = tmpHeight;

		totalWidth+=elem.outerWidth();

		elem.css('float','left').width(ul.width());
	});

	swPage.wrapAll('<div class="swSlider" />');

	// Setting the height of the ul to the height of the tallest page:
	ul.height(maxHeight);

	var swSlider = ul.find('.swSlider');
	swSlider.append('<div class="clear" />').width(totalWidth);

	var hyperLinks = ul.find('a.swShowPage');

	hyperLinks.click(function(e){

		// If one of the control links is clicked, slide the swSlider div
		// (which contains all the pages) and mark it as active:

		$(this).addClass('active').siblings().removeClass('active');

		swSlider.stop().animate({'margin-left': -(parseInt($(this).text())-1)*ul.width()},'slow');
		
		//event handler
		e.preventDefault();
		
		//get current page number back
		currentPage = $(this).text();
	});

	if (currentPage) {
		// Mark the current page you are on as active
		hyperLinks.eq(currentPage-1).addClass('active');
	} else {
	
		// Mark the first link as active the first time the code runs:
		hyperLinks.eq(0).addClass('active');
	}
	// Center the control div:
	swControls.css({
		'left':'50%',
		'margin-left':-swControls.width()/2
	});
	//return an object
	return this;

}})(jQuery);
$(document).ready(function(){
	/* The following code is executed once the DOM is loaded */
	
	/* Main method to split the text
	   once (split) is mention split text and store it in array
	   otherwise script wont do anythign to text if no (split) is mentioned
	*/
	
	var fulltext = $("div.post_content").parent().text();
	var splittext = function(){
		// split text till word (split) appears and store all of text segments in array
		var splitedArr = fulltext.split("(split)");
		/*
			Create nested structre #Main<#holder<li,li,li..
		*/
			$("div.post_content").html("<div id='main'></div>");
			$("div#main").html("<ul id='holder'></ul>");
			$("ul#holder").html("<li><p>" + splitedArr[0] + "</p></li>");
			for(var i = 1 ; i < splitedArr.length ; i++)
			{
				$("ul#holder li").parent().append("<li><p>" + splitedArr[i] + "</p></li>");
			}	
	};
	//call splittext after DOM is loaded
	splittext();
	
	/*
		For mobile devices, so that they respond to a rotation
		No need get int value, just to react when screen is rotated
	*/
	$(window).bind('orientationchange', function(e) {
		splittext();
		sweetPagesLoad();
	});
	
	var sweetPagesLoad = function(){
		$('#holder').sweetPages({perPage:1});
		var controls = $('.swControls').detach();
		controls.appendTo('#main');
	};
	sweetPagesLoad();
});
