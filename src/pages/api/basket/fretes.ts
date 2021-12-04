import { NextApiRequest, NextApiResponse } from 'next'

import { mysql, excuteQuery } from '../../../../config/db'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'GET') {
        try {
            await mysql.connect()
            let query = 'SELECT * FROM taxaentrega'
            const fretes = (await excuteQuery({query, values: ''}));
            await mysql.end() 

            if(fretes) {
              return response.status(200).json({fretes: fretes});
            }

            return response.status(405).json({ message: 'Fretes não encontrados' })
        } catch (e) {
            return response.status(405).json({message: 'Ops, algo deu errado!'});
        }
    } else {
        return response.status(405).json({ message: 'Só suportamos GET' })
    }
}