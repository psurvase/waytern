import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react';
import prisma from '../../../../../utility/prisma'

// DELETE /api/user/:id/update
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query?.id?.toString();
    const session = await getSession({req})
    if (req.method === "PUT") {
        if (session) {
            const { status } = req.body;
            const user = await prisma.user.update({
                where :{id: id},
                data :{
                    status,
                }
            })
            res.json(user);
        } else {
            res.status(401).send({message: 'Unauthorized'})
        }
    }else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        );
    }
}
