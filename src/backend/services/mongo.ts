import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbUri = 'mongodb://localhost:27017/yourdbname'; 
        await mongoose.connect(dbUri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};

connectDB();
