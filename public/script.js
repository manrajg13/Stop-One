var signed_in = false;

/*window.onload = function () {
	if (signed_in) {
		document.getElementById('account').style.display = "block";
		document.getElementById('sign_in').innerHTML = "<button>SIGN OUT</button>";
		document.getElementById('sign_up').innerHTML = "";
	}
	else {
		//document.getElementById('account').style.display = "none";
		document.getElementById('sign_in').innerHTML = "<button>SIGN IN</button>";
		document.getElementById('sign_up').innerHTML = "<button>SIGN UP</button>";
	}
}*/

function deleteUser(){
	try{
		req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if(this.readyState==4 && this.status==200){
				alert("User deleted successfully.");
				window.location.href = "http://localhost:3000/";
			}
		}
		let id = document.getElementById("id").value;
		req.open("DELETE", `http://localhost:3000/users/${id}`);
		req.send();
	} catch (error) {
		console.log("Unable to delete user.");
		console.error(error);
	}
}