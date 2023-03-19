import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

const config = {
    headers: {
        'X-Api-Key': 'j0QdNLH/Uk091x0UqRXpWQ==WWDX90XjUt5Ghuqx',
    }
};


dotenv.config({ path: './config/config.env' });
const data = [
    { name: 'john' }
]
const app = express();

const getWeather = async (city) => {
    const response = await axios.get(`https://api.api-ninjas.com/v1/weather?city=${city}`, config)
    return response.data
}

app.get('/api/weather/:id', async (req, res) => {
    const city = req.params.id
    const response = await getWeather(city)
    res.json(response)
})
app.get('/', (req, res) => res.send('Server running'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));