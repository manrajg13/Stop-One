var signed_in = false;

window.onload = function () {
	if (signed_in) {
		document.getElementById('account').style.display = "block";
		document.getElementById('sign_in').innerHTML = "<button>SIGN OUT</button>";
		document.getElementById('sign_up').innerHTML = "";
	}
	else {
		document.getElementById('account').style.display = "none";
		document.getElementById('sign_in').innerHTML = "<button>SIGN IN</button>";
		document.getElementById('sign_up').innerHTML = "<button>SIGN UP</button>";
	}
}