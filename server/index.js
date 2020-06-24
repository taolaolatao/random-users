const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/users', async (req, res) => {
	const response = await axios.get(
		'https://randomuser.me/api/?page=1&results=10'
	);
	res.status(200).json(response.data);
});

const PORT = process.env.PORT || 1002;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
