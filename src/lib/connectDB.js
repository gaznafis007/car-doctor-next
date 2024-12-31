import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () =>{
    if(db){
        return db;
    }
    else{
        try{
            const uri= process.env.NEXT_PUBLIC_URI;
            const client = new MongoClient(uri,{
                serverApi:{
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            })
            await client.connect();
            db = client.db('car-doctor-database');
            return db
        }catch(error){
            console.dir(error)
        }
    }
}