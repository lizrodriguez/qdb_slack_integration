require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const qdb = require('qdb-api')

app.listen(process.env.PORT || 3000, function () {
  console.log('Server running ┬──┬◡ﾉ(°-°ﾉ)');
})

//Go to http://localhost:3000/quote to trigger
app.get('/quote', function(req,res){
    qdb.random()
      .then(quote => {
        console.log(quote.id);
        console.log(quote.score);
        console.log(quote.text);
          axios({
            method:'post',
            url: process.env.HOOK_URL,
            data: {
              "text": quote.text
            },
            headers: {'Content-Type': 'application/json'}
          })
          .then((response) => {
            console.log('SUCCEEDED: Sent slack webhook!');
          })
          .catch((error) => {
            console.log('FAILED: error: ', error);
          });
        })
      .catch(reason => {
          console.log(reason);
      });
});
