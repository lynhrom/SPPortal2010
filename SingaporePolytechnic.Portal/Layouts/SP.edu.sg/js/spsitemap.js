function compactMenu(objectId, autoCollapseDepth) {
	if( !document.getElementsByTagName || !document.childNodes || !document.createElement ) { return; }
	var baseElement = document.getElementById( objectId ); if( !baseElement ) { return; }
	compactChildren( baseElement, 0, objectId, 1, autoCollapseDepth, baseElement.tagName.toUpperCase());
}
function compactChildren( baseObject, currentLevel, baseObjectId, currentDepth, autoCollapseDepth, oT) {
	for( var x = 0, y = baseObject.childNodes; x < y.length; x++ ) {
	  if( y[x].tagName ) {
		var theNextUL = y[x].getElementsByTagName( oT )[0];
		if( theNextUL ) {
			//create a link for expanding/collapsing
			var newLink = document.createElement('A');
			newLink.setAttribute( 'href', '#' );
			newLink.setAttribute( 'class', 'inline');
			newLink.onclick = new Function( 'clickSmack(this,' + currentLevel + ',\'' + baseObjectId + '\',\'' + escape(oT) + '\');return false;' );

			//wrap everything upto the child U/OL in the link
			y[x].insertBefore(newLink,y[x].childNodes[0]);
			
			// set collapse/expand based on pre-defined collapse depth
			if (currentDepth>=autoCollapseDepth) {
			  theNextUL.style.display = 'none';
			  y[x].childNodes[0].innerHTML = '+ ';
			}
			else {
			  theNextUL.style.display = 'block';
			  y[x].childNodes[0].innerHTML = '&minus; ';
			}
			compactChildren( theNextUL, currentLevel + 1, baseObjectId, currentDepth+1, autoCollapseDepth, oT);
		}
	  }
	}
}
function clickSmack( oThisOb, oLevel, oBsID, oT ) {
	if( oThisOb.blur ) { 
		oThisOb.blur();
	}

	oParentOb =  oThisOb.parentNode;
	oThisOb = oParentOb.getElementsByTagName( unescape(oT) )[0];
	
	if (oThisOb.style.display == 'block') {
	oThisOb.style.display = 'none';
	  oParentOb.childNodes[0].innerHTML='+ ';
	}
	else {
	  oThisOb.style.display =  'block'; 
	  oParentOb.childNodes[0].innerHTML='&minus; ';
	}
}