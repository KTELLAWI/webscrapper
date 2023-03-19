// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { adminDb } from '../../firebaseAdmin';
import * as admin from 'firebase-admin';

type Data = {
  collection_id: string;
  start_eta:number;
}

type Error = {
    error:string
}
export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
)  {

 


    try {
        const {search} = req.body;
        console.log("is Submiting", search);
        const api_key = process.env.BRIGHTDATA_API_KRY;
        const response = await fetch(`https://api.brightdata.com/dca/trigger?collector=c_lf4p5fpcb7ruwkoqy&queue_next=1`,
        {
          method:'POST',
          headers:{
            Authorization:`Bearer ${api_key}`,
            'content-type':'application/json',
          },
          body:JSON.stringify({search}),
        }
        );
      
      const data = await response.json();
      const {collection_id , start_eta} = data;
      await adminDb.collection("search").doc(collection_id).set({
          search,
          start_eta,
          status:"pending",
          updateAt:admin.firestore.Timestamp.now()
      })
        res.status(200).json({ 
          collection_id,
          start_eta,
      
         })
        
    } catch (error:any) {
        console.log('error', error)
        res.status(200).json({ 
            error:error.message,
           
        
           })
        
    }
    
}
