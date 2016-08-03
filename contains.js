{{./hasElem.js}}
function contains(pn,cn){
	if(pn.contains){
		return pn.contains(cn);
	}else if(pn.compareDocumentPosition){
		return pn.compareDocumentPosition(cn)==20 || pn.compareDocumentPosition(cn)==16 || pn==cn;
	}
}