const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080

// log request
app.use(morgan());

app.get('/', (req, res) => {
    res.send('CRUD Application');
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
})