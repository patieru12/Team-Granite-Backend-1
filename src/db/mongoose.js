import mongoose from 'mongoose';

const connectToDatabase = () => {

	const {
	  	MONGO_USERNAME,
	  	MONGO_PASSWORD,
	  	MONGO_HOSTNAME,
	  	MONGO_PORT,
	  	MONGO_DB
	} = process.env;

	const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    mongoose.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
	  	reconnectTries: Number.MAX_VALUE,
	  	reconnectInterval: 500, 
	  	connectTimeoutMS: 10000,
    });
    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
};

// mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db

export default connectToDatabase;