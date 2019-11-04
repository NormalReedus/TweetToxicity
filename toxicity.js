const toxicity = require('@tensorflow-models/toxicity')

/* Clean data here, and save into 'tweets' */

// Sensitivity
const threshold = 0.9;

// Tweets to determine tox-levels of
const tweets = ['You suck', 'Make me', 'Have Fun', "You're a dick"]

async function determineToxicity(tweetArray) {
	const toxMachine = await toxicity.load(threshold)
	const results = await toxMachine.classify(tweetArray)

	const output = []
	for (const tox of results[6].results) {
		output.push(tox.match)
	}

	/* Handle output here */
	console.log(output)
}

determineToxicity(tweets)








