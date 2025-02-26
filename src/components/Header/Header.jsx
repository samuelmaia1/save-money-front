import { useContext, useEffect } from 'react'
import Style from './Header.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import Sun from '../../assets/sol.png'
import Moon from '../../assets/lua.png'
import { LoginContext } from '../../context/LoginContext'

export const Header = () => {
    return (
        <>
            <header className={Style.header}>
                <ContainerNavbar />

                <AccountNav />
            </header>
        </>
    )
}

const AccountNav = () => {

    const {isLogged, user} = useContext(LoginContext)
    const {theme, toggleTheme} = useContext(ThemeContext)

    console.log(user)

    return (
        <div className={Style.accountNav}>
            <img src={theme === 'light' ? Sun : Moon} alt="" onClick={toggleTheme} className={Style.lightModeImage}/>
            <Link className={Style.loginButton} to={isLogged ? user.userName : '/login'}>
                {isLogged ? user.userName : 'Login'}
            </Link>
        </div>
    )
}

const ContainerNavbar = () => {
    return (
        <div className={Style.containerNavbar}>
            <Link>
                Save<strong className={Style.money}>Money</strong>
            </Link>

            <nav className={Style.navbar}>
                <Link to="">Ganhos</Link>
                <Link to="">Despesas</Link>
                <Link to="">Investimentos</Link>
                <Link to="">Relatórios</Link>
            </nav>
        </div>
    )
}