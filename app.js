import express from 'express';
import userRoute from './routes/user.js';
import dotenv from 'dotenv';
import { connectDB } from './utils/features.js';

dotenv.config({
    path: './.env' // Correct path to your .env file
});

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

connectDB(MONGO_URI); // Connect to MongoDB

let app = express();

app.use(express.json());
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('home');
});

console.log('hello');

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});
