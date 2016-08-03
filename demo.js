function addEvent(o,type,cb){
	if(o.addEventListener){
		o.addEventListener(type,cb,false);
	}else if(o.attachEvent){
		o.attachEvent('on'+type,cb);
	}else{
		o['on'+type]=cb;
	}
}
function hasElem(arr,o){
	for(var i=0,len=arr.length;i<len;i++){
		if(arr[i]==o)	return true;
	}
	return false;
}
function contains(pn,cn){
	if(pn.contains){
		return pn.contains(cn);
	}else if(pn.compareDocumentPosition){
		return pn.compareDocumentPosition(cn)==20 || pn.compareDocumentPosition(cn)==16 || pn==cn;
	}
}


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

var o=document.getElementById('box');
blur(o,function(){
	o.style.display="none";
},[document.getElementById('btn')])
