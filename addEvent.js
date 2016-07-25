function addEvent(o,type,cb){
	if(o.addEventListener){
		o.addEventListener(type,cb,false);
	}else if(o.attachEvent){
		o.attachEvent('on'+type,cb);
	}else{
		o['on'+type]=cb;
	}
}