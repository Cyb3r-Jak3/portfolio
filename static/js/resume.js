$("#resume_form").submit(function downloadFile(evt) {
	evt.preventDefault();
	var formData = new FormData($(this)[0]);
	var req = new XMLHttpRequest();
	req.setRequestHeader("X-API-LOCATION", window.location.hostname)
	req.open("POST", "https://api.cyberjake.xyz/encrypted_resume", true);
	req.responseType = "blob";
	req.onload = function (event) {
		var blob = req.response;
		try {
			var fileName = req.getResponseHeader('content-disposition').split("filename=")[1];
		} catch (err) {
			var fileName = "jwhite_signed_resume.pdf.gpg"
		}
		var link=document.createElement('a');
		link.href=window.URL.createObjectURL(blob);
		link.download=fileName;
		link.click();
	};

	req.send(formData);
})