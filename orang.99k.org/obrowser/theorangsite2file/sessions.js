Sessions = Class.create({
	initialize: function(url, swap){
		this.swap = swap;
		new Ajax.Request(url, {
			method: 'get',
			onSuccess: function(rsp) {
				this.data = rsp.responseJSON;
				if(this.data.SessionsData) this.data = this.data.SessionsData;
				this.addSessions();
			}.bind(this)
		});
	},

	addSessions: function(){
		if(this.data){
			this.data = this.sort(this.data, 'title');
			this.sort(this.data, 'type', true);
			this.data.each(function(s){
				switch(s.track){
					case "Core OS":
						var container = $('pagenav-core');
						break;
					case "Developer Tools":
						var container = $('pagenav-tools');
						break;
					case "Graphics & Media":
						var container = $('pagenav-graphics');
						break;
					case "Internet & Web":
						var container = $('pagenav-web');
						break;
					default:
						var container = $('pagenav-framework');
				};
				if(container){ this.injectSession(container, s); }
			}.bind(this));
			
			this.defineLasts();
		}

		// Checks URL for hash and tries to swap in correct content
		this.swap.deepLinking();
	},

	defineLasts: function(){
		[$('core'), $('tools'), $('graphics'), $('web'), $('framework')].each(function(c){
			var sessions = c.getElementsBySelector('.session');
			if(sessions.length > 0){
				sessions[sessions.length -1].addClassName('last');
			}
		});
	},

	sort: function(data, sort, reverse){
		function sortBy(a,b){
		    var x = reverse? b : a;
		    var y = reverse? a : b;

		    x = x[sort].toLowerCase();
		    y = y[sort].toLowerCase();

		    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		};	

		data.sort(sortBy);
		
		return data;
	},

	injectSession: function(container, object){
		//<div class="session"></div>
		var session = new Element('div', { 'class': 'session' });
		//<h3>object.title</h3>
		var title = new Element('h3').update(object.title);
		//<p>object.description</p>
		var desc = new Element('p').update(object.description);

		/*
		<div class="session">
			<h3>object.title</h3>
			<p>object.description</p>
		</div>
		*/

		session.insert(title);
		session.insert(desc);
		container.insert({before: session});
	}
});
