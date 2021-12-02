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
            await mysql.end()

            if(insertedUser.error) {
                throw new Error
            }

            const userToken = jwt.sign({user: insertedUser.insertId})
            response.setHeader('Set-Cookie', cookie.serialize('auth', userToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 86400,
                path: '/'
            }) )
            return response.status(200).json({message: "Seja bem vindo ao Coffee Mountain :)"})
        } catch (e) {
            await mysql.end()
            return response.status(405).json({ message: 'Erro ao cadastrar usuário'})
        }
    } else {
        return response.status(405).json({ message: 'Ops, algo deu errado!' })
    }
}