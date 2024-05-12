import mongoose from "mongoose";

const URI = `mongodb+srv://iuliuss:Iliamagaria@devdb.drzg56v.mongodb.net/?retryWrites=true&w=majority&appName=devdb`;

let conn = null;;

export async function connectToMongo(): Promise<mongoose.Connection> {
    if(!!conn) {
        return conn;
    }
    
    mongoose.connect(URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.error("Error connecting to MongoDB", error));

    conn = mongoose.connection;
    return conn;
}