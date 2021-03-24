import mongoose from 'mongoose'

const startDatabase = async () => {
    try {
        const dbUrl = 'localhost'
        const dbPort = '27017'
        const mongoURL = `mongodb://${dbUrl}:${dbPort}/test`
        
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    
        console.log('Connected to mongodb')
    } catch (error) {
      throw new Error(error);
    }
}

startDatabase()
