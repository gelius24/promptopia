import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'promptopiaDB'
    });
    isConnected = true
    console.log("connected to mongoDB")
  } catch (error) {
    console.log(error)
  }
}