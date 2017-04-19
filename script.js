var scheck=false;
function toggle(parametr) {
	document.getElementsByClassName('mnulvl')[0].style.transition = 'all 0.5s linear';
	document.getElementsByClassName('mnulvl')[1].style.transition = 'all 0.5s linear';
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

function check(menu) {
	switch(menu) {
		case 1: 
			toggle(false);
			scheck=false;
			break;
		case 2:
			toggle(true);
			scheck=true;
			document.getElementsByClassName('cont-menu')[0].style.display = 'block';
			document.getElementsByClassName('cont-menu')[1].style.display = 'none';
			break;
		case 3:
			toggle(true);
			scheck=true;
			document.getElementsByClassName('cont-menu')[1].style.display = 'block';
			document.getElementsByClassName('cont-menu')[0].style.display = 'none';
			break;
		default:
			if (scheck===true) {toggle(true);}; 
	}
}