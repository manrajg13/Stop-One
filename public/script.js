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

function deleteProduct(){
	try {
		req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if(this.readyState==4 && this.status==200){
				alert("Product deleted successfully.");
				window.location.href = "http://localhost:3000/products";
			} else if(this.readyState== 4 && this.status>400) {
				alert("Oh no! Product failed to delete successfully. Try again");
			}
		}
		let id = document.getElementById("id").value;
		debugger
		req.open("DELETE", `http://localhost:3000/products/${id}`);
		req.send();
	} catch (error) {
		console.log('Unable to delete product')
		console.error(error)
	}

}

function undoDelete(){
	try {
		req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if(this.readyState==4 && this.status==200){
				alert("Product restored successfully.");
				window.location.href = "http://localhost:3000/products";
			} else if(this.readyState== 4 && this.status>400) {
				alert("Oh no! Delete undo failed. Please try again.");
			}
		}
		let id = document.getElementById("id").value;
		req.open("PUT", `http://localhost:3000/products/${id}`);	
		req.send();
	} catch (error) {
		console.log(`Unable to revert deletion of product${id}`)
		console.error(error)
	}

}