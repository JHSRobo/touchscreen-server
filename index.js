const express = require('express');
const shell = require('shelljs');

const app = express();

const port = 3000;
const pathToScript = '~/Github/scripts/shutdown.sh';


app.get('/bottomside-shutdown', (req, res) => {
  if (shell.exec(pathToScript).code !== 0) {
    res.status(400).send("Something went wrong!");
  } else {
    res.status(200).send("Bottomside shutdown!");
  }
});

app.listen(port, () => console.log(`Shell script server listening on port ${port}!`))
