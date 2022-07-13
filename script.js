var signed_in = false;

window.onload = function () {
	if (signed_in) {
		document.getElementById('account').style.display = "block";
		document.getElementById('sign_in').innerHTML = "<button>SIGN OUT</button>";
	}
	else {
		document.getElementById('account').style.display = "none";
		document.getElementById('sign_in').innerHTML = "<button>SIGN IN</button>";
	}
}