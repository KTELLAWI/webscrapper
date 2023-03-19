import type { NextApiRequest, NextApiResponse, } from 'next'

// type Body ={
//     search:string;
// }

// export async function GET(req: Request) {
//     //const cookieStore = cookies();
//     //const token = cookieStore.get('token');
  
//     return new Response('Hello, Next.js!', {
//       status: 200,
//      // headers: { 'Set-Cookie': `token=${token}` },
//     });
//   }
  export async function POST(req:NextApiRequest) {

    const search = req.body.search;
    console.log("is Submiting", search);


  }