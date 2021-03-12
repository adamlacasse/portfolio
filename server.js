const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(`${__dirname}/build`));

app.listen(
    port, 
    () => port === 3000 ? console.log(`Server is up at http://localhost:${port}`) : console.log(`Server is up on port ${port}`)
);
