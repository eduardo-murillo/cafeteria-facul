import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import * as jwt from '../../../../config/jwt'
import { mysql, excuteQuery } from '../../../../config/db'
import cookie from 'cookie'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {                
        const { name, email, password, cpf } = request.body;        
    
        if(!name){
            return response.json({message: 'Informe um nome!'});
        }

        if(!email){
            return response.json({message: 'Informe um email!'});
        }

        if(!password){
            return response.json({message: 'Informe uma senha!'});
        }

        if(!cpf){
            return response.json({message: 'Informe um cpf!'});
        }                
        
        try {
            await mysql.connect()            
            
            const signup = 'INSERT INTO usuario (NomeUsuario, EmailUsuario, SenhaUsuario, CPF) values (?,?,?,?)';
            const hashedPassword = await hash(password, 10)                        
            
            const insertedUser = await excuteQuery({query: signup, values: [name, email, hashedPassword, cpf]})   
            
            const searchUser = 'Select * from usuario where IdUsuario = ?';
            const [user] = await excuteQuery({query: searchUser, values: [insertedUser.insertId]})   
            
            await mysql.end()

            if(insertedUser.error) {
                throw new Error
            }

            const userToken = jwt.sign({user: user.IdUsuario})

            return response.status(200).json({message: "Seja bem vindo ao Coffee Mountain :)", user: {id: userToken, name: user.NomeUsuario}})
        } catch (e) {
            await mysql.end()
            return response.status(405).json({ message: 'Erro ao cadastrar usuário'})
        }
    } else {
        return response.status(405).json({ message: 'Ops, algo deu errado!' })
    }
}