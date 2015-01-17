/** @description Nugget.js
 *	A simple JS class to parse and abstract Github Milestones/Issues/Users into Nugget Events/Sessions and People
 */
/** @author https://api.github.com/users/nstansbury */
/** @author https://api.github.com/users/orliesaurus */


var Nugget = {
	EVENT_URL : "https://api.github.com/repos/lnug/speakers/milestones",
	SESSIONS_URL : "https://api.github.com/repos/lnug/speakers/issues?milestone=",
	
	/** @param {Date} start */
	/** @param {Date} end */
	/** @param {function} callback([Nugget.Event]) */
	/** @returns void */
	getEvents : function(start, end, callback){
		function onsuccess(data){
			var events = [];
			for(var i = 0; i < data.length; i++){
				events.push(new Nugget.Event(data[i]));
			}
			callback(events);
		}
		var request = new Nugget.Request(EVENT_URL, onsuccess, Nugget.onerror.bind(this));
	},
	
	onerror : function(){}
}


/** @constructor */
/** @param {object} data */
Nugget.Event = function NuggetEvent(data){	/* GitHub Milestone */
	this.__data = data;
}

Nugget.Event.prototype = {
	/** @returns {number} */
	getNumber : function(){
		return this.__data.number;
	},
	
	/** @returns {string} */
	getUrl : function(){
		return this.__data.url;
	},
	
	/** @returns {string} */
	getTitle : function(){
		return this.__data.title;
	},
	
	/** @returns {string} */
	getDescription : function(){
		return this.__data.description;
	},
	
	/** @returns {[Nugget.Person]} */
	getCreator : function(){
		return new Nugget.Person(this.__data.creator);
	},
	
	/** @param {function} callback([Nugget.Session]) */
	/** @returns {void} */
	getSessions : function(callback){
		function onsuccess(data){
			var sessions = [];
			for(var i = 0; i < data.length; i++){
				sessions.push(new Nugget.Session(data[i]));
			}
			callback(sessions);
		}
		var request = new Nugget.Request(SESSIONS_URL +this.getNumber(), onsuccess, Nugget.onerror.bind(this));
	},
	
	/** @returns {Date} */
	getDate : function(){
		return new Date(this.__data.due_on);
	},
	
	/** @returns {Date} */
	getStartTime : function(){},
	
	/** @returns {Date} */
	getEndTime : function(){},
	
	/** @returns {string} */
	getLocation : function(){}
}


/** @constructor */
/** @param {object} data */
Nugget.Session = function NuggetSession(data){	/* GitHub Issue */
	this.__data = data;
}

Nugget.Session.prototype = {
	/** @returns {string} */
	getTitle : function(){
		return this.__data.title;
	},
	
	/** @returns {Nugget.Description} */
	getDescription : function(){
		return new Nugget.Description(this.__data.description);
	},
	
	/** @returns {Nugget.Person} */
	getSpeaker : function(callback){
		return new Nugget.Person(this.__data.user);
	},
	
	/** @description Files attached to the Github issue */
	getHandouts : function(){}
}


/** @constructor */
/** @param {object} data */
Nugget.Person = function Person(data){
	this.__data = data
}
	
Nugget.Person.prototype = {
	/** @returns {string} */
	getUsername : function(){
		return this.__data.login;
	},
	
	/** @returns {string} */
	getUrl : function(){
		return this.__data.url;
	},
	
	/** @returns {string} */
	getFullName : function(){
		return this.__data.name || this.getUsername;
	},
	
	/** @returns {string} */
	avatar : function(){
		return this.__data.avatar_url;
	},
	
	/** @returns {string} */
	company : function(){
		return this.__data.company || "";
	},
	
	/** @returns {string} */
	email : function(){
		return this.__data.email || "";
	},
	
	/** @returns {string} */
	twitter : function(){
		return "NYI";
	},
	
	/** @returns {string} */
	location : function(){
		return this.__data.location || "";
	}
}


/** @param {string} url */
/** @param {function(Object)} onsuccess */
/** @param {function(number)} [onerror] */
/** @returns {void} */
Nugget.Request = function beginRequest(url, onsuccess, onerror){
	var httpRequest = new XMLHttpRequest();
	httpRequest.open("GET", url);
	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState == 4){
			if(httpRequest.status != 200){
				if(onerror){
					onerror(httpRequest.status);
				}
				var limit = httpRequest.getResponseHeader("X-RateLimit-Remaining");
				if(parseInt(limit) == 0){
					console.log("GitHub Request Limited Exceeded!");
				}
				throw "It's Gone Pete Tong!";
			}
			var data = JSON.parse(httpRequest.responseText);
			onsuccess(data);
		}
	};
	httpRequest.send();
}

/** @constructor */
/** @param {object} data */
Nugget.Description = function Description(data){
	this.__properties = {};
	var lines = data.split("\n");
	for(var i = 0; i < lines.length; i++){
		var keyvalue = lines[i].split(":");
		if(keyvalue.length > 0){
			this.__properties[keyvalue[0].trim()] = keyvalue[1].trim();
		}
	}
}
Nugget.Description.prototype = {
	
	/** @param {string} name */
	/** @returns {string} */
	getProperty : function(name){
		return this.__properties[name] || "";
	}
}
