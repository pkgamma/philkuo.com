var WelcomScreen = {

	canPlay: function() {return true;},

	localizeWelcomeMessage: function() {
		var localizedWelcomeMessages = {'zh-tw': '橘子電腦 台灣'};

		var localizedMessage = localizedWelcomeMessages[navigator.language];
		if (!localizedMessage)
		return;

		document.getElementsByTagName('title')[0].innerText = (localizedMessage+'');
		this.localizedHeaderImage = 'header.png';
		document.getElementsByTagName('h1')[0].style.backgroundImage = 'url('+this.localizedHeaderImage+')';
	},

	initialize: function() {
		if (this.canPlay()) {
			this.localizeWelcomeMessage();
			this.music = document.getElementById('music');
			this.video = document.getElementById('compass');

			var self = this;
			function animationStart(event) {
				if (event.animationName === 'safari-video')
					self.video.play();
			}

			function animationEnded(event) {
				if (event.animationName === 'safari-video')
					self.redirect();
			}

			function musicEnded(event) {
				self.redirect();
			}

			if ('play' in this.music)
				this.music.addEventListener('ended', musicEnded, false);
			else
				window.addEventListener('webkitAnimationEnd', animationEnded, false);

			window.addEventListener('webkitAnimationStart', animationStart, false);

			this.preloadMedia();
		}
	},

	preloadMedia: function() {
		var mediaFound = 0;
		var mediaLoaded = 0;

		var self = this;
		function mediaDidLoad() {
			++mediaLoaded;
			if (mediaLoaded >= mediaFound)
				self.start();
		}

		var audioElements = document.getElementsByTagName('audio');
		for (var i = 0; i < audioElements.length; ++i) {
			var audio = audioElements[i];
			if (!('load' in audio) || !audio.src)
				continue;
			++mediaFound;
			audio.addEventListener('load', mediaDidLoad, false);
			audio.load();
		}

		var videoElements = document.getElementsByTagName('video');
		for (var i = 0; i < videoElements.length; ++i) {
			var video = videoElements[i];
			if (!('load' in video) || !video.src)
				continue;
			++mediaFound;
			video.addEventListener('load', mediaDidLoad, false);
			video.load();
		}

		var images = [
			'apple_icon.png',
			'apple_spots.png',
			'apple_flare.jpg',
			'apple_flare_icon.png',
			this.localizedHeaderImage || 'header.png'
		];
		for (var j = 0; j < images.length; ++j) {
			var image = new Image();
			image.addEventListener('load', mediaDidLoad, false);
			image.src = images[j];
		}
	},

	start: function() {
		if ('play' in this.music)
			this.music.play();
		document.body.className = 'go';
	},

	redirect: function() {
		document.location = 'http://philkuo.com/orang.99k.org/index.htm';
	}
};

try {
	window.addEventListener('load', function() {
		WelcomScreen.initialize();
	}, false);

	window.addEventListener('unload', function() {
		document.body.className = '';
	}, false);
} catch (e) {
	window.onload = WelcomScreen.canPlay;
}
