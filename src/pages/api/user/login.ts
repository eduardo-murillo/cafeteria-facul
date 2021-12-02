import { NextApiRequest, NextApiResponse } from 'next'

import { compare } from 'bcryptjs'
import * as jwt from '../../../../config/jwt'
import { mysql, excuteQuery } from '../../../../config/db'

import cookie from 'cookie'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'GET') {
        const [,hash] = request.headers.authorization.split(' ')
        const [email, password] = Buffer.from(hash, 'base64').toString().split(':')
        
        // console.log('hash', hash);
        // console.log('email', email);
        // console.log('password', password);



        // Para usos futuros
        //  let results = await mysql.transaction()
        //   .query('INSERT INTO table (x) VALUES(?)', [1])
        //   .query((r) => ['UPDATE table SET x = 1 WHERE id = ?', r.insertId])
        //   .rollback(e => { /* do something with the error */ }) // optional
        //   .commit() // execute the queries
        
        if(!email){
            return response.json({message: 'Informe um email!'});
        }

        if(!password){
            return response.json({message: 'Informe uma senha!'});
        }

        try {
            await mysql.connect()
            let query = 'SELECT * FROM usuario WHERE EmailUsuario = ?'
            const [person] = (await excuteQuery({query, values: [email]}));
            await mysql.end() 
            
            if(person === undefined){
                return response.json({message: 'Usuário ou senha incorretas.'});
            }else{
                compare(password, person.SenhaUsuario, async function(errors, result) {
                    if(!errors && result){
                        const userToken = jwt.sign({user: person.id})

                        response.setHeader('Set-Cookie', cookie.serialize('auth', userToken, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            sameSite: 'strict',
                            maxAge: 86400,
                            path: '/'
                        }) )
                        return response.status(200).json({message: 'Seja bem vindo ao Coffee Mountain :)'});
                    }else{
                        await mysql.end()
                        return response.status(405).json({message: 'Usuário ou senha incorretas.'});
                    }
                });
            }
        } catch (e) {
            await mysql.end()
            return response.status(405).json({message: 'Ops, algo deu errado!'});
        }
    } else {
        return response.status(405).json({ message: 'Só suportamos GET' })
    }
    await mysql.end()
}