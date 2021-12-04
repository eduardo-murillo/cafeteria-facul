import { NextApiRequest, NextApiResponse  } from 'next'
import { mysql, excuteQuery } from '../../../../config/db'

export default async(request: NextApiRequest, response: NextApiResponse) => {
    
    if(request.method === "GET"){
        try {
            const id = request.query.id 
            await mysql.connect()
            let query = 'SELECT * FROM produto WHERE idProduto = ?'
            const [product] = (await excuteQuery({query, values: [id]}));
            mysql.end()
            
            response.status(200).json({product})
        } catch(e) {
            response.status(405).json({message: 'Não foi possível encontrar o produto'})
        }
    }else{
        response.json({message: 'Só suportamos GET'})
    }

}