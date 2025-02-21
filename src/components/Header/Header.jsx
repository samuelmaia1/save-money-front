import Style from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className={Style.header}>
                <ContainerNavbar />

                <div className={Style.accountNav}>
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