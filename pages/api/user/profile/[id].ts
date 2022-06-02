import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react';
import prisma from '../../../../utility/prisma'

// URL /api/user/profile/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query?.id?.toString();
    const {description} = req.body;
    const session = await getSession({req})
    // console.log('Update description file')
    if (req.method === "PUT") {
        if (session) {
            const user = await prisma.user.update({
                where :{id:id},
                data :{
                    description
                }
            })
            res.json(user);
        } else {
            res.status(401).send({message: 'Unauthorized'})
        }
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        );
    }
}
