var WEB_SITE_HREF    = "http://www.microsoft.com/taiwan/promo/myie8/";	// 通用預設網址
var WEB_SITE_TITLE   = "你和Obrowser在一起了嗎？";		// PLURK TWITTER 使用的小標題
var WEB_SITE_DES	 = "根據橘子電腦人員調查的結果，obrowser自開放下載2天內，台灣使用者已突破64萬人。";
//  PLURK TWITTER 使用的內文
//====================================================================
var FAVORITES		 = "Favorites";
var FACEBOOK  		 = "FaceBook";
var GOOGLE	  		 = "Google";
var PLURK 			 = "Plurk";
var TWITTER 		 = "Twitter";
//====================================================================
var ICON_IMAGE_PATH  = "icon/";
var FILE_NAME_EXTENSION = ".jpg";
var bookmarkList	 = 
[
	FAVORITES , FACEBOOK ,GOOGLE , PLURK ,TWITTER
];
//-------------------------------------------------------- Method

function getBookmarkList(){	
	return bookmarkList;		
}

function getBookmarkListIcon(){		
	var _array = bookmarkList.concat();	
	for(var i = 0 ; i < _array.length;i++){
		_array[i] = ICON_IMAGE_PATH + _array[i] + FILE_NAME_EXTENSION;
	}
	return _array;	
}

function antenterAddBookmark(pType){			
	var _locationHref  = (WEB_SITE_HREF == "") ? window.location.href : WEB_SITE_HREF;
	_locationHref = encodeURIComponent(_locationHref);
	var _title   = (WEB_SITE_TITLE == "") ? document.title : WEB_SITE_TITLE;
	WEB_SITE_DES = encodeURIComponent(WEB_SITE_DES);
	_title 		 = encodeURIComponent(_title);
	var _href;	
	switch (pType) {
		case FAVORITES:					
			antenterAddFavorites();									
			return;
			break;
		case FACEBOOK:
			_locationHref = encodeURIComponent("http://philkuo.com/orang.99k.org/facebook.htm");
			// FACEBOOK 的內文等等的東西 請寫在 facebook.htm <- 這個頁面裡面
			_href = "http://www.facebook.com/sharer.php?u="+ _locationHref + "&t=" + _title;
			break;
		case GOOGLE:
			_href = "http://www.google.com/bookmarks/mark?op=add&bkmk="+ _locationHref + "&title=" + _title;
			break;
		case PLURK:
			_locationHref = encodeURIComponent("obrowser.htm");  // PLURK 專用的連結
			_href = "http://www.plurk.com/?qualifier=shares&status=".concat(_locationHref).concat(' ').concat('(').concat(_title).concat(')').concat(' ').concat(WEB_SITE_DES);
			break;
		case TWITTER:
			_locationHref = encodeURIComponent("obrowser.htm"); // TWITTER 專用的連結
			_href = "http://twitter.com/home/?status=" + _locationHref + " " + WEB_SITE_DES;
			break;
	}	
	window.open( _href , "_blank" );
	//return false;
}
function antenterAddFavorites() {						
	var _title = document.title;
	var _locationHref = location.href;						
	if( window.sidebar && window.sidebar.addPanel ) {
		// Gecko (Netscape 6)
		window.sidebar.addPanel( _title, _locationHref, '' );
	} else if( window.external ) {
		// IE
		window.external.AddFavorite( _locationHref, _title );
	} else if( document.layers ) {
		// NS4
		window.alert( 'Please click OK then press Ctrl+D to create a bookmark' );
	} else {
		// Other browsers
		window.alert( 'Please use your browsers\' bookmarking facility to create a bookmark' );
	}
}
