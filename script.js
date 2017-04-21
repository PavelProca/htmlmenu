var scheck=false;
function toggle(parametr) {
	document.getElementsByClassName('mnulvl')[0].style.transition = 'all 0.4s ease';
	document.getElementsByClassName('mnulvl')[1].style.transition = 'all 0.4s ease';
	if (parametr===true) {
		document.getElementsByClassName('mnulvl')[0].style.width = '60px';
		document.getElementsByClassName('mnulvl')[0].style.background = '#1E242A';
		document.getElementsByClassName('mnulvl')[1].style.width = '180px';	
		document.getElementsByName('section-name')[0].style.color = 'transparent';
		document.getElementsByName('section-name')[1].style.color = 'transparent';
	} else {
		document.getElementsByClassName('mnulvl')[0].style.width = '240px';
		document.getElementsByClassName('mnulvl')[0].style.background = '#333D47';
		document.getElementsByClassName('mnulvl')[1].style.width = '0px';
		document.getElementsByName('section-name')[0].style.color = 'inherit';
		document.getElementsByName('section-name')[1].style.color = 'inherit';
	}
}

function check(menu, label) {
	switch(menu) {
		case 1: 
			toggle(false);
			scheck=false;
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		case 2:
			toggle(true);
			scheck=true;
			document.getElementsByClassName('cont-menu')[0].style.display = 'block';
			document.getElementsByClassName('cont-menu')[1].style.display = 'none';
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		case 3:
			toggle(true);
			scheck=true;
			document.getElementsByClassName('cont-menu')[1].style.display = 'block';
			document.getElementsByClassName('cont-menu')[0].style.display = 'none';
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		case 2.1: case 2.2: case 2.3: 
		case 3.1: case 3.2: case 3.3:
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		default:
			if (scheck===true) {toggle(true);}; 
	}
}

function hide(act) {
	document.getElementsByClassName('side-menu')[0].style.transition = 'all 0.3s ease';
	document.getElementsByClassName('main-wrapper')[0].style.transition = 'all 0.3s ease';
	switch(act) {
		case 1:
			document.getElementsByClassName('side-menu')[0].style.width = '0';
			document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
			document.getElementsByClassName('burger')[0].style.display = 'block';
			break;
		case 2:
			document.getElementsByClassName('side-menu')[0].style.width = '240px';
			document.getElementsByClassName('main-wrapper')[0].style.padding = '0 0 0 240px';
			document.getElementsByClassName('burger')[0].style.display = 'none';
			break;
		default: return;
	}
}

function another(im) {
	switch(im) {
		case 2.1:
			document.getElementById('elem2.1').checked = 'true';
			document.getElementById('pic').src = 'images/users.jpg';
			break;
		case 2.2:
			document.getElementById('pic').src = 'images/groups.jpg';
			break;
		case 2.3:
			document.getElementById('pic').src = 'images/roles.jpg';
			break;
		case 3.1:
			document.getElementById('elem3.1').checked = 'true';
			document.getElementById('pic').src = 'images/documents.jpg';
			break;
		case 3.2:
			document.getElementById('pic').src = 'images/workspaces.jpg';
			break;
		case 3.3:
			document.getElementById('pic').src = 'images/trash.jpg';
			break;
		default: return;
	}
}