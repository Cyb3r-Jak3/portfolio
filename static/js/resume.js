const resume_api_endpoint = "https://api.cyberjake.xyz/encrypted_resume"

$("#resume_form").submit(function downloadFile(evt) {
	evt.preventDefault();
	var formData = new FormData($(this)[0]);
	fetch(
		resume_api_endpoint,
		{
			method: "POST",
			headers: {
				"User-Agent": "Portfolio",
				"X-API-LOCATION": window.location.hostname
			},
			body: formData
		}
	).then( response => {
		response.blob().then(blob => {
			try {
				var fileName = response.headers.get('content-disposition').split("filename=")[1];
			} catch (err) {
				var fileName = "jwhite_signed_resume.pdf.gpg"
			}
			var link=document.createElement('a');
			link.href=window.URL.createObjectURL(blob);
			link.download=fileName;
			link.click();
		}
		)
	}
	)
})