import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'
import prisma from "../../../utility/prisma";
// POST /api/site
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req});
    if (session) {
        if (req.method === "POST") {
            const {
                    name,
                    streetAddress,
                    country,
                    city,
                    pinCode,
                    images,
            } = req.body;
            const result = await prisma.site.create({
                data: {
                        name,
                        streetAddress,
                        country,
                        city,
                        pinCode,
                        images,
                },
            });
            res.json(result);
        }else if (req.method === "GET"){
            const sites = await prisma.site.findMany()
            res.json(sites);
        }else {
            res.status(404).send({message: 'Method is not supported'})
        }


    } else {
        res.status(401).send({message: 'Unauthorized: Access is denied due to invalid credentials'})
    }
}
