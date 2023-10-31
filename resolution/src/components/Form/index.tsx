import React, { useState } from 'react'

import './Form.css'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            username: username,
            email: email,
            password: password
        }

        try {
            const request = await fetch('http://localhost:3000/SingUp', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data),
            })

            if (request.ok) {
                alert('Sucesso!')
            } else {
                alert('Falhou!')
            }
        } catch (error) {
            alert(`Erro: ${error}`)
        }
    }

    return (
        <div className='container'>
            <form action="" className="form" onSubmit={submitHandler}>
                <input className='form-input' type="text" placeholder='Digite seu usuário' onChange={(e) => setUsername(e.target.value)} />
                <input className='form-input' type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}/>
                <input className='form-input' type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='form-btn'>Enviar</button>
            </form>
        </div>
    )
}

export default Form