// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const uri = process.env.MONGO_URI as string;
    const client = new MongoClient(uri);
    await client.connect();

    const collection = client.db('subscent').collection('waitlist');
    await collection.insertOne({email: req.body.email, date: new Date().getTime()});
    res.status(200).json({ name: 'John Doe' })
}
