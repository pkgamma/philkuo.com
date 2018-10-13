// Extension of AC.ContentSwap to allow for links other than the primary ones to swap out content

SwapContent = Class.create();
Object.extend(SwapContent.prototype, AC.ContentSwap.prototype);
Object.extend(SwapContent.prototype, {
	// Gets passed the id of the element your are trying to get to
	// Can be id or hash tag referring to track (e.g. '#track-content' or 'content')
	swapContentById: function(id){
		id = id.startsWith('#track-') ? id.sub('#track-','') : id;

		var el = $(id);
		if(el != undefined){
			var index = $$('.swap-content').indexOf(el);
			if(index != -1) { this.swapContent(index); }
		}
	},

	deepLinking: function(){
		var hash = window.location.hash;
		if(hash !== ""){
			this.swapContentById(hash);
		}
	}
});