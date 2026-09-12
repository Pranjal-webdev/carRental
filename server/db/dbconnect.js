import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:CarRental123@cluster0.c7twouf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db("carRentalDB");
  return db.collection("cars");
}

export default dbConnect;