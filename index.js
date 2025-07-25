const express = require('express');
const app = express();
const approutes = require('./app');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(approutes);

app.use((req, res) =>{
    res.status(404).json({ status: 404, message: `miss-match Url}`});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

