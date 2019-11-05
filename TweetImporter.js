const fs = require('fs')

let tsv = fs.readFileSync('Toxicity-Tweets.tsv', 'utf-8')

tsv = tsv.split('-\n-')

tsv.pop()

for (let i = 0; i < tsv.length; i++) {
	if (tsv[i] == '') {
		console.log(i)
	}
}


exports.tsv = tsv