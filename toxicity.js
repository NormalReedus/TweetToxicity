
/* Clean data here, and save into 'tweets' */

async function determineToxicity(tweetArray) {
	// Sensitivity
	const threshold = 0.9;

	const toxMachine = await toxicity.load(threshold)
	const results = await toxMachine.classify(tweetArray.slice(0,500))

	const output = []
	for (const tox of results[6].results) {
		output.push(tox.match)
	}

	/* Handle output here */
	console.log(output)
}





