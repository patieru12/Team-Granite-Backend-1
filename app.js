import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectToDatabase from './src/db/mongoose.js';
import User from './src/models/user.js';

dotenv.config();
connectToDatabase();

// const routes = require('./src/routes/index');
import routes from './src/routes/index.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Adding our routes
app.use('/', routes);

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));