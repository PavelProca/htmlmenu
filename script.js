var flag = 0;
function next() {
	document.getElementsByClassName('mnulvl')[0].classList.toggle('active');
	document.getElementsByClassName('mnulvl')[1].classList.toggle('active');
	flag = 1;
}

function check() {
	if (flag == 0) {return;}
	else if (flag == 1) {
		flag = 2;
		document.getElementsByClassName('mnulvl')[0].classList.toggle('move');
	}
	else if (flag == 2) {return;}
}