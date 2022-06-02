import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react';
import prisma from '../../../utility/prisma'
// DELETE /api/site/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query?.id?.toString();
    const session = await getSession({req})
    if (!session) {
        res.status(401).send({message: 'Unauthorized: Access is denied due to invalid credentials'})
    }
    if (req.method === "DELETE") {
        const site = await prisma.site.delete({
                where: {id: id},
        });
        res.json(site);
     } else if (req.method === "GET") {
        const site = await prisma.site.findUnique({
            where :{id : id},
        })
        res.json(site);
    } else if (req.method === "PUT") {
        const {
                name,
                streetAddress,
                country,
                city,
                pinCode,
                images,
        } = req.body;
        const site = await prisma.site.update({
            where :{id: id},
            data :{
                    name,
                    streetAddress,
                    country,
                    city,
                    pinCode,
                    images,
            }
        })
        res.json(site);
    }else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        );
    }
}
