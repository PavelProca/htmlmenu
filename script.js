var scheck=false;
function toggle(parametr) {
	document.getElementsByClassName('mnulvl')[0].style.transition = 'all 0.5s linear';
	document.getElementsByClassName('mnulvl')[1].style.transition = 'all 0.5s linear';
	if (parametr===true) {
		document.getElementsByClassName('mnulvl')[0].style.width = '50px';
		document.getElementsByClassName('mnulvl')[0].style.background = '#ab4561';
		document.getElementsByClassName('mnulvl')[1].style.width = '190px';	
	} else {
		document.getElementsByClassName('mnulvl')[0].style.width = '240px';
		document.getElementsByClassName('mnulvl')[0].style.background = 'blue';
		document.getElementsByClassName('mnulvl')[1].style.width = '0px';
	}
}

function check(menu) {
	switch(menu) {
		case 1: 
			toggle(false);
			scheck=false;
			document.getElementById("p1").innerHTML = "pressed item1; " + "scheck =" + scheck;
			break;
		case 2:
			toggle(true);
			scheck=true;
			document.getElementById("p1").innerHTML = "pressed item2; " + "scheck =" + scheck;
			document.getElementsByClassName('cont-menu')[0].style.display = 'block';
			document.getElementsByClassName('cont-menu')[1].style.display = 'none';
			break;
		case 3:
			toggle(true);
			scheck=true;
			document.getElementById("p1").innerHTML = "pressed item 3; " + "scheck =" + scheck;
			document.getElementsByClassName('cont-menu')[1].style.display = 'block';
			document.getElementsByClassName('cont-menu')[0].style.display = 'none';
			break;
		default:
			if (scheck===true) {toggle(true);}; 
	}
}

window.onload = function() {
    document.getElementById("p1").innerHTML = "scheck =" + scheck;
};