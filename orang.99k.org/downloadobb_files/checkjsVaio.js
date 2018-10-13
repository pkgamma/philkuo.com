	function checkBrower(){
		var isIE  = navigator.userAgent.search("MSIE") > -1;
	    var isIE55= navigator.userAgent.search("MSIE 5.5") > -1;
	    var isIE6 = navigator.userAgent.search("MSIE 6") > -1; 
	    var isIE7 = navigator.userAgent.search("MSIE 7") > -1; 
	    var isIE8 = navigator.userAgent.search("MSIE 8") > -1; 
	    var isFirefox = navigator.userAgent.search("Firefox") > -1; 
	    var isOpera   = navigator.userAgent.search("Opera") > -1; 
	    var isSafari  = navigator.userAgent.search("Safari") > -1;//Google瀏覽器是用這核心 
	    if (isIE8) { 
	        return 'ie8';
	    }
	    if (isIE7) { 
	    	 return 'ie7';
	    }
	    if (isIE) { 
	        return 'ie';
	    } 
	    if (isFirefox) { 
	        return 'ff';
	    } 
	    if (isOpera) { 
	        return 'op';
	    } 
	    if (isSafari) { 
	        return 'sa';
	    }
	    return 'un';
	}
    