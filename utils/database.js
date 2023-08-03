import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const { connetion } = await mongoose.connect('mongodb+srv://next:1234567890@cluster0.2gzd9tj.mongodb.net/',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: 'nextjs',

            });
        console.log(`Database connected on ${ connetion.host } `)
    } catch (error) {
        console.log(`Error`, error);

    }
}