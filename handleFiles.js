let data

function readSingleFile(e) {
	let file = document.getElementById('file-input').files[0];
	if (!file) {
		return;
	}
	let reader = new FileReader();
	reader.onload = function (e) {
		let contents = e.target.result;
		contents = contents.split('-\n-')
		//contents.pop()

		determineToxicity(contents)
	};
	reader.readAsText(file)

}

document.getElementById('analyze')
	.addEventListener('click', readSingleFile, false);

let textFile
function makeTextFile(csv) {
	let csvFile = new Blob([csv], { type: 'text/csv' });

	// If we are replacing a previously generated file we need to
	// manually revoke the object URL to avoid memory leaks.
	if (textFile !== null) {
		window.URL.revokeObjectURL(textFile);
	}

	let a = document.createElement('a');
	a.download = 'tox.csv';
	a.href = window.URL.createObjectURL(csvFile);
	a.textContent = 'Download CSV';

	a.dataset.downloadurl = ['text/csv', a.download, a.href].join(':');

	document.querySelector('#output').appendChild(a);

}

// PAGE

document.getElementById('file-input').addEventListener('change', e => {
	document.getElementById('label').innerText = e.target.files[0].name
})