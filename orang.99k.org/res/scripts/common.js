/* utils */
function getNowSecs() {
	var d = new Date();
	return (new Date()).getTime() * 0.001;
}

/* page stuff */
var subnav;
var covers;
function init() {
	covers = new CoverPanels();
	subnav = new SubnavAni();
	
	
}

function dropPanel() {
		show('panel');
		var cover = $('panelcover');
		cover.fx = new Fx.Tween(cover,{duration:3000});
		cover.fx.start('top','5000px');
		createCookie('panel','off',30);
}

function SubnavAni() {
	var categories = $$('#subnav .category');
	categories.each(function(item,index) {
		item.addEvent('click', function() {
			var selected_items = $$('#subnav .category.selected li.selected');
			selected_items.each(function(item,index){ item.removeClass('selected'); });
			
			var selected_cat = $$('#subnav .category.selected');
			selected_cat.each(function(item,index){ item.removeClass('selected'); item.addClass('hasitems'); });
			
			item.removeClass("hasitems");
			item.addClass("selected");

			var selected_items = $$('#subnav .category.selected li');
			selected_items[0].addClass('selected');
			
			var lootid = selected_items[0].id.substr(6);
			subnav.showDetails(lootid);
			
			return false;
		});
	});
	
	var nav_items = $$('#subnav .category li');
	nav_items.each(function(item,index) {
		item.addEvent('click', function() {
			var selected_items = $$('#subnav .category.selected li.selected');
			selected_items.each(function(item,index){ item.removeClass('selected'); });
			
			item.addClass('selected');

			var lootid = item.id.substr(6);
			subnav.showDetails(lootid);

			return false;
		});
	});
	
	this.showDetails = function(lootid) {
		var currentDetail = $$('.details.current');
		currentDetail[0].style.display = 'none';
		currentDetail[0].className = 'details';
		
		$('details'+lootid).style.display = 'block';
		$('details'+lootid).className = 'details current';
	}
}

function CoverPanels() {
	var panels = new Object();
	var cp = this;
	panels['signup'] = false;
	panels['login'] = false;
	
	var signups = $$('a.signup');
	signups.each(function(item, index) {
		item.addEvent('click', function() {
			cp.showSignupPanel();
			return false;
		});
	});
	
	var logins = $$('a.login');
	logins.each(function(item, index) {
		item.addEvent('click', function() {
			cp.showLoginPanel();
			return false;
		});
	});
	
	var closes = $$('.popup a.close');
	closes.each(function(item, index) {
		item.addEvent('click', function() {
			cp.hidePanel();
			return false;
		});
	});
	
	
	this.showSignupPanel = function() {
		panels['signup'] = true;
		if (panels['login']) {
			panels['login'] = false;
			fancyHide('login',function() {fancyShow('signup')});
		} else {
			hide('login');
			show('signup');
			fancyShow('cover');
		}
	};
	
	this.showLoginPanel = function() {
		panels['login'] = true;
		if (panels['signup']) {
			panels['signup'] = false;
			fancyHide('signup',function() {fancyShow('login')});
		} else {
			hide('signup');
			show('login');
			fancyShow('cover');
		}
	};
	
	this.hidePanel = function() {
		panels['signup'] = false;
		panels['login'] = false;
		fancyHide('cover', function() {
			hide('signup'); 
			hide('login');
		});
	};
	
}
function fancyHide(what,finished) {
	var what = $(what);
	what.fx = new Fx.Tween(what);
	what.fx.set('opacity',1);
	
	if (finished)
		what.fx.addEvent('complete',function() { what.fx.set('display','none'); finished(); });
	else
		what.fx.addEvent('complete',function() { what.fx.set('display','none'); });

	what.fx.start('opacity',0);
}

function fancyShow(what,finished,speed) {
	var what = $(what);
	
	if (speed==undefined)
		speed = 500;
	
	what.fx = new Fx.Tween(what,{duration:speed});
	if (finished) 
		what.fx.addEvent('complete',finished);
	what.fx.set('opacity',0);
	what.fx.set('display','block');
	what.fx.start('opacity',1);
}

function hide(what) {
	if (!document.getElementById(what))
		return;
	document.getElementById(what).style.display='none';	
	document.getElementById(what).style.opacity=0;
	document.getElementById(what).style.visibility='hidden';
}

function show(what) {
	if (!document.getElementById(what))
		return;
	document.getElementById(what).style.display='block';	
	document.getElementById(what).style.opacity=1;
	document.getElementById(what).style.visibility='visible';
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


/* PANEL */

function panelFail() {
	fancyShow('panelfail', 
		function() {
			setTimeout( 
				function() {
					resetDraw();
					fancyHide('panelfail');
				}
			,1000)
		}
	);
}

var canvas;
var isDown = false;
var line = "";
var latest = "";
var lastX = -5;
var lastY = -5;

function showPoint(x,y,xCloseness, yCloseness) {
	if (xCloseness<-8 || xCloseness>8 || yCloseness<-8 || yCloseness>8 )
		return;
	
	newSection = x+','+y+';';
	if (newSection != latest) {

		if (x == lastX+1 && y == lastY-1) {
			document.getElementById('bltr_'+lastX+'_'+lastY).className="lit";
		} else if (x == lastX-1 && y == lastY+1) {
			document.getElementById('bltr_'+x+'_'+y).className="lit";
		} else if (x == lastX+1 && y == lastY+1) {
			document.getElementById('tlbr_'+lastX+'_'+lastY).className="lit";
		} else if (x == lastX-1 && y == lastY-1) {
			document.getElementById('tlbr_'+x+'_'+y).className="lit";
		} else if (x == lastX+1 && y == lastY) {
			document.getElementById('lr_'+lastX+'_'+y).className="lit";
		} else if (x == lastX-1 && y == lastY) {
			document.getElementById('lr_'+x+'_'+y).className="lit";
		} else if (y == lastY+1 && x == lastX) {
			document.getElementById('tb_'+x+'_'+lastY).className="lit";
		} else if (y == lastY-1 && x == lastX) {
			document.getElementById('tb_'+x+'_'+y).className="lit";
		} else {
			resetDraw();
		}

		line += newSection;
		latest = newSection;
		if (document.getElementById('point_'+x+'_'+y))
			document.getElementById('point_'+x+'_'+y).className="lit";
		
		lastX = x;
		lastY = y;
	}
}

function setupDraw() {
	canvas = document.getElementById("panel");
	canvas.addEventListener('mousemove',movecanvas,true);
	canvas.addEventListener('mousedown',clickcanvas,true);
	canvas.addEventListener('mouseup',clickupcanvas,true);
	
	var points = document.getElementById("panelpoints");
	for(var y = 0; y<5; y++) {
		for(var x = 0; x<5; x++) {
			var new_div = document.createElement('div');
			new_div.id = 'point_'+x+'_'+y;
			points.appendChild(new_div);
			new_div.className = 'lit';
			new_div.className = '';
		}
	}
	
	var lines = document.getElementById("panellinesbltr");
	for(var y = 1; y<5; y++) {
		for(var x = 0; x<4; x++) {
			var new_div = document.createElement('div');
			new_div.id = 'bltr_'+x+'_'+y;
			lines.appendChild(new_div);
		}
	}
	
	var lines = document.getElementById("panellinestlbr");
	for(var y = 0; y<4; y++) {
		for(var x = 0; x<4; x++) {
			var new_div = document.createElement('div');
			new_div.id = 'tlbr_'+x+'_'+y;
			lines.appendChild(new_div);
		}
	}
	
	var lines = document.getElementById("panellineslr");
	for(var y = 0; y<5; y++) {
		for(var x = 0; x<4; x++) {
			var new_div = document.createElement('div');
			new_div.id = 'lr_'+x+'_'+y;
			lines.appendChild(new_div);
		}
	}
	var lines = document.getElementById("panellinestb");
	for(var y = 0; y<4; y++) {
		for(var x = 0; x<5; x++) {
			var new_div = document.createElement('div');
			new_div.id = 'tb_'+x+'_'+y;
			lines.appendChild(new_div);
		}
	}
	

}

function resetDraw(x,y) {
	lastX = x; lastY = y;
	line = "";

	for(var y = 0; y<5; y++) {
		for(var x = 0; x<5; x++) {
			document.getElementById('point_'+x+'_'+y).className="";
		}
	}
	
	for(var y = 1; y<5; y++) {
		for(var x = 0; x<4; x++) {
			document.getElementById('bltr_'+x+'_'+y).className="";
		}
	}
	
	for(var y = 0; y<4; y++) {
		for(var x = 0; x<4; x++) {
			document.getElementById('tlbr_'+x+'_'+y).className="";
		}
	}
	
	for(var y = 0; y<5; y++) {
		for(var x = 0; x<4; x++) {
			document.getElementById('lr_'+x+'_'+y).className="";
		}
	}
	for(var y = 0; y<4; y++) {
		for(var x = 0; x<5; x++) {
			document.getElementById('tb_'+x+'_'+y).className="";
		}
	}
}

function movecanvas(e) {
	if (!isDown)
		return true;
	
if (e.offsetX) {
	tempX = e.offsetX;
	tempY = e.offsetY;
} else {
	tempX = e.layerX;
	tempY = e.layerY;
}	
	if (tempX < 0){tempX = 0}
	if (tempY < 0){tempY = 0}  
		
	xSection = Math.floor((tempX-45)/30);
	ySection = Math.floor((tempY-10)/30);
	xCloseness = tempX-(55+xSection*30);
	yCloseness = tempY-(20+ySection*30);
	
	showPoint(xSection, ySection, xCloseness, yCloseness);
	return true;
}

function clickcanvas(e) {
	
	tempX = e.offsetX;
	tempY = e.offsetY;	

	isDown = true;
	
	xSection = Math.floor((tempX-45)/30);
	ySection = Math.floor((tempY-10)/30);
	xCloseness = tempX-(55+xSection*30);
	yCloseness = tempY-(20+ySection*30);
	resetDraw(xSection, ySection);
	showPoint(xSection, ySection, xCloseness, yCloseness);
}

function clickupcanvas(e) {
	if (!isDown)
		return true;
	
	isDown = false;
	
if (e.offsetX) {
	tempX = e.offsetX;
	tempY = e.offsetY;
} else {
	tempX = e.layerX;
	tempY = e.layerY;
}	
	xSection = Math.floor((tempX-45)/30);
	ySection = Math.floor((tempY-10)/30);
	xCloseness = tempX-(55+xSection*30);
	yCloseness = tempY-(20+ySection*30);
	showPoint(xSection, ySection, xCloseness, yCloseness);
	
	verify_panel(line);
}

function verify_panel(line) {
	var query = line;
	var req = new XMLHttpRequest();
	
	if (req) {
		req.open("GET", "/check/panel/"+query,false);
		req.send("");
		eval(req.responseText);
	}	
}

var vids = new Array();
function toggleVideo(id) {
	var video = document.getElementById("vid_o_" + id);
	if(!video.Play) {
		video = document.getElementById("vid_e_" + id);
	}
	var controller = document.getElementById("vidcon_" + id);
	
	if(vids[id] == 'playing') {
		video.Stop();
		controller.className = 'playing';
		vids[id] = 'paused';
	} else {	
		video.Play();
		vids[id] = 'playing';
		controller.className = 'pause';
		controller.addEvent('mouseout', function() {
			controller.tween('opacity', '0.000001');
		});
		controller.addEvent('mouseover', function() {
			controller.tween('opacity', '1');
		});
	}
}