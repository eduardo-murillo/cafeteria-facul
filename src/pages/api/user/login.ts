import { NextApiRequest, NextApiResponse } from 'next'

import { compare } from 'bcryptjs'
import * as jwt from '../../../../config/jwt'
import { mysql, excuteQuery } from '../../../../config/db'

import cookie from 'cookie'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { email, password } = request.body;
    
    if (request.method === 'POST') {
        try {
            let query = 'SELECT * FROM usuario WHERE EmailUsuario = ?'
            const person = (await excuteQuery({query, values: [email]}))[0];
            
            if(person === undefined){
                response.json({message: 'wrong email'});
            }else{
                compare(password, person.SenhaUsuario, function(errors, result) {
                    if(!errors && result){
                        const userToken = jwt.sign({user: person.id})

                        response.setHeader('Set-Cookie', cookie.serialize('auth', userToken, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            sameSite: 'strict',
                            maxAge: 86400,
                            path: '/'
                        }) )
                        response.status(200).json({message: 'Welcome to the app!'});
                    }else{
                        response.status(405).json({message: 'wrong password'});
                    }
                });
            }
        
            mysql.end()
        } catch (e) {
            console.log('Erro no login', e);
            
        }
    } else {
        response.status(405).json({ message: 'We only support POST' })
    }
}