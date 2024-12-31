import { connectDB } from "@/lib/connectDB"
import bcrypt from 'bcrypt'

export const POST = async (req) =>{
    const user = await req.json();
    const encryptedPass = bcrypt.hashSync(user?.password, 14)
    // console.log(encryptedPass)
    try{
        const db = await connectDB();
        const userCollection = db.collection('users');
        const registered = await userCollection.findOne({email: user?.email});
        if(registered){
            return Response.json({message: 'User already exist!'})
        }
        else{
            const res = await userCollection.insertOne({...user, password: encryptedPass});
            return Response.json(res)
        }
    }catch(error){
        return Response.json({message: 'Something went wrong', status: 404})
    }
}