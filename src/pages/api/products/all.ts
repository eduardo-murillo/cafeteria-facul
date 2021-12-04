import { NextApiRequest, NextApiResponse } from 'next'

import { mysql, excuteQuery } from '../../../../config/db'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'GET') {
        
        try {
            await mysql.connect()
            let query = 'SELECT * FROM produto'
            const products = (await excuteQuery({query, values: ''}));
            await mysql.end() 
            
            return response.status(200).json({products});
        } catch (e) {
            await mysql.end()
            return response.status(405).json({message: 'Ops, algo deu errado!'});
        }
    } else {
        return response.status(405).json({ message: 'Só suportamos GET' })
    }
    await mysql.end()
}