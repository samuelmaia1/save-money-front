import { useState } from 'react'
import Style from './Login.module.css'

export const LoginForm = () => {

    const [userName, setUserName] = useState('')

    return (
        <>
            <div className={Style.containerLoginForm}>
                <h1 
                    style={{
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}
                >
                    Login
                </h1>

                <form className={Style.form}>

                    <div className={Style.containerInputForm}>
                        <label htmlFor="">Nome de usuário:</label>
                        <input type="text" className={Style.inputForm}/>
                    </div>
                    <div className={Style.containerInputForm}>
                        <label htmlFor="">Senha:</label>
                        <input type="password" className={Style.inputForm}/>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                        <button type="submit" className={Style.buttonSubmit}>Entrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}