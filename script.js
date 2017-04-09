var fcheck = 0;
var scheck = 0;
function next(element) {
	if (fcheck == 0) {
		document.getElementsByClassName('mnulvl')[0].classList.toggle('active');
		document.getElementsByClassName('mnulvl')[1].classList.toggle('active');
		fcheck = 1;
		scheck = 1;
	} else if (fcheck == 1) {fcheck=1;}
	if (element===1) {document.getElementById("p1").innerHTML = "ASD element selected!";}
	else if (element===2) {document.getElementById("p1").innerHTML = "DSA element selected!";}
	else if (element===3) {document.getElementById("p1").innerHTML = "QWE element selected!";}
}

function check() {
	if (scheck == 0) {return;}
	else if (scheck == 1) {
		scheck = 2;
		document.getElementsByClassName('mnulvl')[0].classList.toggle('move');
	}
	else if (scheck == 2) {return;}
}