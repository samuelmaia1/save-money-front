import { useContext } from 'react'
import Style from './Header.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import Sun from '../../assets/sol.png'
import Moon from '../../assets/lua.png'

export const Header = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <>
            <header className={Style.header}>
                <ContainerNavbar />

                <div className={Style.accountNav}>
                    <img src={theme === 'light' ? Sun : Moon} alt="" onClick={toggleTheme} className={Style.lightModeImage}/>
                    <button className={Style.loginButton}>
                        Login
                    </button>
                </div>
            </header>
        </>
    )
}

const ContainerNavbar = () => {
    return (
        <div className={Style.containerNavbar}>
            <p>
                Save<strong className={Style.money}>Money</strong>
            </p>

            <nav className={Style.navbar}>
                <Link to="">Ganhos</Link>
                <Link to="">Despesas</Link>
                <Link to="">Investimentos</Link>
                <Link to="">Relatórios</Link>
            </nav>
        </div>
    )
}