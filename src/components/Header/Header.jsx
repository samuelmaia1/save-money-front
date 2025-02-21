import { useContext } from 'react'
import Style from './Header.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import Sun from '../../assets/sol.png'
import Moon from '../../assets/lua.png'

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

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={Style.accountNav}>
            <img src={theme === 'light' ? Sun : Moon} alt="" onClick={toggleTheme} className={Style.lightModeImage}/>
            <button className={Style.loginButton}>
                Login
            </button>
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