let data

function readSingleFile(e) {
	let file = e.target.files[0];
	if (!file) {
		return;
	}
	let reader = new FileReader();
	reader.onload = function (e) {
		let contents = e.target.result;
		contents = contents.split('-\n-')
		contents.pop()
		
		determineToxicity(contents)
	};
	reader.readAsText(file)
	
}

document.getElementById('file-input')
	.addEventListener('change', readSingleFile, false);