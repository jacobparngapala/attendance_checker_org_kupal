import { MongoClient } from "mongodb";

const uri = "mongodb+srv://toshinoruuu:dbtoshinorii@attendify.2fnc1.mongodb.net/?retryWrites=true&w=majority";

async function testConnection() {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("✅ Connected to MongoDB successfully!");
        await client.close();
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
    }
}

testConnection();
