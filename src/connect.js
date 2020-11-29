const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://roshni:mongoDbPwd@cluster0.6eaqw.mongodb.net/narra?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const database = client.db('narra');
        const collection = database.collection('users');
        const query = {username: 'angelahu'};
        const user = await collection.findOne(query);
        console.log(user);

    } 
    finally {
        await client.close();
    }
}

run().catch(console.dir);