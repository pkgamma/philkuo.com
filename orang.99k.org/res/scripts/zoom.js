var imgPreload = new Image();
var prelo = false;
var myWidth = 800;
var myHeight = 800;
var imgDetails = new Array();
var minBorder = 100;
var i = 0;
var playing = false;

// handle preload -- called onhover
function zoomPreload(el) {
	var img = el.getAttribute("href");
	if (imgPreload.src.indexOf(el.getAttribute("href").substr(el.getAttribute("href").lastIndexOf("/"))) == -1) {
		prelo = true;
		imgPreload = new Image();
		imgPreload.addEvent('load', function() { prelo = false; });
		imgPreload.src = img;
	}
}

// handle clicks -- called onclick, checks if we are good an actually opens the zoom
function zoomClick(el, eve) {
	// if we are preloading we need to call the openZoom function once we are done
	fancyShow('zoomLoading');
	
 	if(prelo) {
		var loading = setInterval(function() {
			i++;
			var j = i / 7;
			$('zoomLoadingGem').setStyles({ '-webkit-transform': 'rotate(' + (90 * j) + 'deg)' });
			if(prelo == false) {
				openZoom(el, eve);
				clearInterval(loading);
			}
		}, 50);
	} else {
		openZoom(el, eve);
	}
}

// open the zoom
function openZoom(el, eve) {
	setSize();
	$('zoomLoading').setStyles({'opacity': 0, 'display': 'none'});
	
	$('zoomImg').src = el.getAttribute("href");
	var zoomBox = new Fx.Morph('zoomBox', {duration: 300});
	var zoomImg = new Fx.Morph('zoomImg', {duration: 300});
	
	sWidth = el.getStyle('width').toInt();
	sHeight = el.getStyle('height').toInt();
	if (el.childNodes[0].width) { styles = getPos(el.childNodes[0]); } else { styles = getPos(el); }
	imgDetails = new Array(sWidth, sHeight, styles[1], styles[0]);
	
	eWidth = imgPreload.width;
	eHeight = imgPreload.height;
	var offset = window.pageYOffset;
	
	// if they have a movie, increase the height to fit it in the box
	var movie = el.getAttribute("movie");
	if(movie) {
		eHeight = eHeight + 16;
	}
	
	// if the image is too big than scale it down
	sizeRatio = eWidth / eHeight;
	if (eHeight > myHeight - minBorder) {
		eHeight = myHeight - minBorder;
		eWidth = eHeight * sizeRatio;
	}
	if (eWidth > myWidth - minBorder) {
		eWidth = myWidth - minBorder;
		eHeight = eWidth / sizeRatio;
	}
	
	// first we need to set the start values that it will fade from
	zoomBox.set({ 'width': eWidth, 'height': eHeight, 'left': (myWidth / 2), 'top': (offset + (myHeight / 2)), 'margin-top': -(eHeight / 2), 'margin-left': -(eWidth / 2)})
	zoomImg.set({ 'height': sHeight, 'width': sWidth, 'margin-top': -(sHeight / 2), 'margin-left': -(sWidth / 2), 'top': (styles[1] + (sHeight / 2)), 'left': (styles[0] + (sWidth / 2)) });
	
	$('cover').addEvent('click', function() { closeZoom() });
		
	// and now our end values
	zoomImg.start({ 'width': eWidth, 'height': eHeight, 'opacity': 1.0, 'left': (myWidth / 2), 'top': (offset + (myHeight / 2)), 'margin-top': -(eHeight / 2), 'margin-left': -(eWidth / 2) }).chain(function() {
		fancyShow('cover');
		zoomBox.start({ 'opacity': 1 });
	});
	
	// ad now actually add the movie in
	if(movie) {
		// if they somehow have an exsiting movie than remove it
		if($('zoomMovie')) {
			$('zoomBox').removeChild($('zoomMovie'));
		}
		var movieembed = QT_GenerateOBJECTText(movie, eWidth, eHeight, '', 'obj#ID', 'movie', 'autoplay', 'true', 'showlogo', 'false');
		var zoomMovie = document.createElement('div');
		zoomMovie.id = 'zoomMovie';
		zoomMovie.innerHTML = movieembed;
		$('zoomBox').appendChild(zoomMovie);
		$('zoomMovie').addEvent('click', function(event) { event.stop(); });
		playing = true;
	}
}

// close the zoom
function closeZoom(eve) {
	// remove the movie if they have one
	if(playing == true) {
		$('zoomBox').removeChild($('zoomMovie'));
		playing = false;
	}
	
	// fade out the cover
	$('cover').removeEvent('click');
	var zoomImg = new Fx.Morph('zoomImg', {duration: 300});
	var zoomBox = new Fx.Morph('zoomBox', {duration: 300});

	fancyHide('cover');
	zoomBox.start({ 'opacity': 0 }).chain(function() {
		zoomImg.start({
			'height': imgDetails[1], 'width': imgDetails[0], 
			'margin-top': -(imgDetails[1] / 2), 'margin-left': -(imgDetails[0] / 2), 
			'top': (imgDetails[2] + (imgDetails[1] / 2)), 'left': (imgDetails[3] + (imgDetails[0] / 2)), 
			'opacity': 0 });
	});
}

// private - get the width and height of the window so we can position elements
function setSize() {
	if (self.innerHeight) { // Everyone but IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // IE6 Strict
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if (document.body) { // Other IE, such as IE7
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
}

// private - get the position of an individual element so we can zoom from it
function getPos(el) {
	var elemX = 0;
	var elemY = 0;
	do {
		elemX += el.offsetLeft;
		elemY += el.offsetTop;
	} while ( el = el.offsetParent )

	return Array(elemX, elemY);
}

// run through the document and make links popups, and insert a bunch of elemnts
window.addEvent('domready', function() {
	// go thru the site and make the image pop ups work
	var links = document.getElementsByTagName("a");
	for (i = 0; i < links.length; i++) {
		if (links[i].getAttribute("href")) {
			if (links[i].getAttribute("href").search(/(.*)\.(jpg|jpeg|gif|png|bmp|tif|tiff)/gi) != -1) {
				if (links[i].getAttribute("rel") != "nozoom") {
					links[i].onclick = function(event) { event.preventDefault(); zoomClick(this); };
					links[i].onmouseover = function () { zoomPreload(this); };
				}
			}
		}
	}
	
	if(!$('cover')) {
		var cover = document.createElement('div');
		cover.id = 'cover';
		cover.setStyles({'position': 'fixed', 'display': 'none', 'top': '0px', 'left': '0px', 'right': '0px', 'bottom': '0px', 'background-color': 'rgba(0,0,0,0.5)', 'z-index': '5000', 'color': 'white'});
		document.body.appendChild(cover);
	}
	
	var zoomLoading = document.createElement('div');
	zoomLoading.id = 'zoomLoading';
	zoomLoading.innerHTML = '<img src="http://i48.tinypic.com/21l8ydz.png" style="width: 27px; vertical-align: middle; -webkit-transition-duration: .4s; margin-top: -3px;" id="zoomLoadingGem"> &nbsp;Loading...';
	zoomLoading.setStyles({'position': 'fixed', 'width': '150px', 'padding': '14px 25px', 'font-size': '22px', 'font-weight': 'bold', 'display': 'none', 'top': '50%', 'left': '50%', 'margin': '-50px 0 0 -100px', 'background-color': 'rgba(0,0,0,0.8)', '-webkit-box-shadow': '0px 5px 16px rgba(0,0,0,.3)', 'z-index': '5000', 'color': '#d3d3d3', '-webkit-border-radius': '5px', '-moz-border-radius': '5px'});
	document.body.appendChild(zoomLoading);
	
	// create zoomBox, zoomClose and zoomImg element
	var zoomBox = document.createElement('div');
	zoomBox.id = 'zoomBox';
	zoomBox.addEvent('click', function() { closeZoom(); });
	zoomBox.setStyles({'width': 0, 'height': 0, 'opacity': 0, 'top': '0px', 'left': '0px', 'position': 'absolute', 'z-index': 7000, 'cursor': 'pointer', '-webkit-box-shadow': '0px 5px 25px rgba(0,0,0,1)' });
	document.body.appendChild(zoomBox);
	
	var zoomClose = document.createElement('a');
	zoomClose.className = 'close';
	zoomClose.setStyles({ 'display': 'block', 'position': 'absolute', 'top': '-14px', 'left': '-15px', 'width': '30px', 'height': '30px', 'background-image': 'url(http://i47.tinypic.com/1zch7a8.png)' });
	zoomBox.appendChild(zoomClose);
	
	var zoomImg = document.createElement('img');
	zoomImg.id = 'zoomImg';
	zoomImg.addEvent('click', function() { closeZoom(); });
	zoomImg.setStyles({'width': 0, 'height': 0, 'opacity': 0, 'top': '0px', 'left': '0px', 'position': 'absolute', 'z-index': 6000 });
	document.body.appendChild(zoomImg);
});