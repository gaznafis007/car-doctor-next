import { connectDB } from "@/lib/connectDB"

export const GET = async (req) =>{
    const db = await connectDB();
    const serviceCollection = await db.collection('services');
    let query = {};
    const res = await serviceCollection.find(query).toArray();
    return Response.json(res)
}