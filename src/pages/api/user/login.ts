import { NextApiRequest, NextApiResponse } from 'next'

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { mysql, excuteQuery } from '../../../../database/db'

import cookie from 'cookie'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { email } = request.body;
    const { password } = request.body;
    try {
        await mysql.connect()
        let result = await mysql.query('SELECT * FROM usuario where idUsuario = 1');
        console.log('resultados', result);
    } catch (e) {
        console.log('erro', e);
        
    }

    if (request.method === 'POST') {
        
        if(email === null || email === ""){
            response.json({message: 'Informe um email!'});
        }

        if(password === null || password === ""){
            response.json({message: 'Informe uma senha!'});
        } else if (password != "" && email != ""){
            let query = 'SELECT * FROM usuario WHERE EmailUsuario = ?'
            const person = await excuteQuery({query, values: [email]});                
        }        

    } else {
        response.status(405).json({ message: 'We only support POST' })
    }
    mysql.end()
}