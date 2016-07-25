{{./blur.js}}

var o=document.getElementById('box');
blur(o,function(){
	o.style.display="none";
},[document.getElementById('btn')])
