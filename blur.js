{{./addEvent.js}}
{{./contains.js}}
{{./hasElem.js}}

function blur(o,callback,filters){
	var body=document.body;
	addEvent(body,'click',function(e){
		var e=e || window.event,
			target=e.target || e.srcElement;
		if(!contains(o,target)){
			callback();
		}
	})
}