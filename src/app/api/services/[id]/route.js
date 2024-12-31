import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const GET = async (req, {params}) =>{
    const db = await connectDB();
    const serviceCollection = await db.collection('services');
    const {id} = params;
    const query = {_id: new ObjectId(id)};
    const res = await serviceCollection.findOne(query);
    return Response.json(res)
}