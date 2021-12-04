import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import * as jwt from '../../../../config/jwt'
import { mysql, excuteQuery } from '../../../../config/db'
import { Logo } from '../../../styles/Login'


export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {        
        const { idUsuario_FK, PrecoTotal, Produtos } = request.body;
        
        if(!idUsuario_FK){
            return response.json({message: 'Erro ao finalizar a compra!'});
        }

        if(!PrecoTotal){
            return response.json({message: 'Erro ao finalizar a compra!'});
        }

        if(!Produtos){
            return response.json({message: 'Erro ao finalizar a compra!'});
        }
        
        try {
            const userToken = jwt.verify(idUsuario_FK)
            
            await mysql.connect()
            const order = 'INSERT INTO venda (idUsuario_FK, PrecoTotal, Produtos) values (?,?,?)';
            
            const insertedOrder = await excuteQuery({query: order, values: [userToken.user, PrecoTotal, Produtos]})   
            await mysql.end()

            if(insertedOrder.error) {
                throw new Error
            }

            return response.status(200).json({message: "Pedido feito. Obrigado por comprar conosco!", order: {id: insertedOrder.insertId}})
        } catch (e) {
            await mysql.end()
            return response.status(405).json({ message: 'Erro ao criar pedido'})
        }
    } else {
        return response.status(405).json({ message: 'Ops, algo deu errado!' })
    }
}