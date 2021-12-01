import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import { mysql, excuteQuery } from '../../../../database/db'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { name } = request.body;
    const { email } = request.body;
    const { password } = request.body;
    const { cpf } = request.body;
    
    //To do -> validate email, same email, and password length

    if (request.method === 'POST') {        
            await mysql.connect()
            const signup = 'INSERT INTO Usuario (NomeUsuario, EmailUsuario, SenhaUsuario, CPF) values (?,?,?,?)';
            const person = await excuteQuery({query: signup, values: [name, email, password, cpf]})                
        response.json({message: "Seja bem vindo ao Coffee Mountain :)"})
    } else {
        response.status(405).json({ message: 'Ops, algo deu errado!' })
    }
}