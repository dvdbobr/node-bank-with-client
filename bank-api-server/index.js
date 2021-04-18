const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 5000;
const userRoute = require('./routes/users.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
    res.json({ success: { id: 1, email: 'asfasf@asfasf.com' } })
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at 5000`)
})