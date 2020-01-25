const express = require('express');
const shell = require('shelljs');

const app = express();

const port = 3000;
const pathToScript = '~/Github/scripts/shutdown.sh';


app.get('/bottomside-shutdown', (req, res) => {
  shell.exec(pathToScript);
  res.status(200).send("Bottomside shutdown!");
});

app.listen(port, () => console.log(`Shell script server listening on port ${port}!`))
