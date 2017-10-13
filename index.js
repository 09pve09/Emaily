const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send({'OLOLO': 'LALALA'});
});


const PORT = process.env.PORT || 5000; //using heroku or localhost
app.listen(PORT);
//http://localhost:5000/
