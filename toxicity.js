
/* Clean data here, and save into 'tweets' */

async function determineToxicity(tweetArray) {
	// PROGRESS BAR
	const numBlocks = Math.floor(tweetArray.length / 100) + 1
	let progress = 0
	document.getElementById('progress').innerText = ''
	for (let i = 0; i < numBlocks; i++) {
		document.getElementById('progress').append('=')
	}

	// Sensitivity
	const threshold = 0.9
	let output = []

	const toxMachine = await toxicity.load(threshold)

	let start = 0
	let end = 100

	while (start <= tweetArray.length) {
		console.log(start, end)

		const results = await toxMachine.classify(tweetArray.slice(start, end))

		for (const tox of results[6].results) {
			output.push(tox.match)
		}

		start = end
		end += 100
		
		document.getElementById('progress').childNodes[progress].textContent = '>'
		progress++
	}

	/* Handle output here */
	console.log(output)

	output = output.join('\n')

	makeTextFile(output)
}





