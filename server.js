const express = require('express');
const PORT = 9000;

const app = express();
app.set("port", PORT);

app.use(express.static(`${__dirname}/`));

app.listen(PORT, () => {
  console.log(`App running on: ${PORT}`);
});
