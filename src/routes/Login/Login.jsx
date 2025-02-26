import Style from './Login.module.css'
import { Card } from './Card'
import { LoginForm } from './LoginForm'

export const Login = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '6rem'}} className={Style.loginContainer}>
                <LoginForm />
                <Card />
            </div>
        </>
    )
}