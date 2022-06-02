import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'
import prisma from "../../../utility/prisma";

// POST /api/user
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req});
    
    if (session) {
        
        if (req.method === "DELETE") {
            let selectedIds = req.body;
            await prisma.user.deleteMany({
                    where : {id : { in:selectedIds }}
                })
            res.json({message: "Record deleted successfully ......"});
            
        } else if (req.method === "GET"){
            const users = await prisma.user.findMany()
            res.json(users);
        } else {
            res.status(404).send({message: 'Method is not supported'})
        }
    } else {
        res.status(401).send({message: 'Unauthorized: Access is denied due to invalid credentials'})
    }
}
