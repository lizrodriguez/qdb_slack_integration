# QDB Slack Integration

Get a random quote from http://www.qdb.us/ and to post to a slack channel

Using https://www.npmjs.com/package/qdb-api for Quotes Database API

## To Run
* Activate incoming webhooks on your [Slack workspace](https://api.slack.com/incoming-webhooks)
* Add a webhook url to a particular Slack channel
* add the HOOK_URL to your local environment variables file
* Go to http://localhost:3000/quote to see your random quote in the selected Slack channel

## APIs available

* Get a random quote
* Get the latest quote
* Get specific quote by it's id
* Search for a quote

### Get a random quote

```Javascript
qdb.random()
	.then(quote => {
		console.log(quote.id);
		console.log(quote.score);
		console.log(quote.text);
	})
	.catch(reason => {
		console.log(reason);
	});
```

### Get the latest quote

```Javascript
qdb.latest()
	.then(quote => {
		console.log(quote.id);
		console.log(quote.score);
		console.log(quote.text);
	})
	.catch(reason => {
		console.log(reason);
	});
```

### Get a specific quote by it's id

```Javascript
qdb.get(4680)
	.then(quote => {
		console.log(quote.id);
		console.log(quote.score);
		console.log(quote.text);
	})
	.catch(reason => {
		console.log(reason);
	});
```

### Search for a quote

```Javascript
qdb.search('tom', 0, 10)
	.then(quotes => {
		quotes.forEach(quote => {
			console.log(quote.id);
			console.log(quote.score);
			console.log(quote.text);
		});
	})
	.catch(reason => {
		console.log(reason);
	});
```
