import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:CarRental123@cluster0.c7twouf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

async function dbConnect() {
  try {
    await client.connect();
    console.log("MongoDB Connected");

    const db = client.db("carsDB");
    console.log(await db.listCollections().toArray());
  } catch (err) {
    console.log(err);
  }
}

dbConnect();