import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react';
import prisma from '../../../../utility/prisma'

// URL /api/user/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query?.id?.toString();
    const session = await getSession({req})
    if (req.method === "DELETE") {
        if (session) {
            const user = await prisma.user.delete({
                where: {id: id},
            });
            res.json(user);
        } else {
            res.status(401).send({message: 'Unauthorized'})
        }
     } else if (req.method === "PUT") {
        const {name,address,email,city,phone,country,zipCode,state} = req.body;
        if (session) {
            const user = await prisma.user.update({
                where :{id:id},
                data :{
                    name,
                    address,
                    email,
                    city,
                    phone,
                    country,
                    zipCode,
                    state
                }
            })
            res.json(user);
        } else {
            res.status(401).send({message: 'Unauthorized'})
        }
    }else if (req.method === "GET") {
        const user = await prisma.user.findUnique({where :{ id:id }})
        res.json(user);
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        );
    }
}
