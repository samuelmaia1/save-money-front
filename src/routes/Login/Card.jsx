import Style from './Login.module.css'
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        <>
            <div className={Style.card}>
                <div className={Style.cardTitles}>

                    <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                        <h1 
                            style={{marginBottom: '0', fontWeight: 'bold'}}>
                            Junte-se a nós!
                        </h1>

                        <p 
                            style={{
                                marginTop: '0'
                            }}
                        >
                            Reúna todas suas finanças em um só lugar!

                        </p>
                    </div>

                    <ul style={{margin: '0'}}>
                        <li>Gráficos de investimentos</li>
                        <li>Relatórios de gastos</li>
                        <li>Controle de finanças</li>
                        <li>Controle de vencimentos</li>
                    </ul>

                    <div style={{marginTop: '1.5rem'}}>

                        De <span style={{margin: 0}}> R$ 49,99</span>

                        <p 
                            style={{
                                fontWeight: 'bold', 
                                marginTop: '0', 
                                fontSize: '2rem'
                            }}
                        >
                                Por R$ 29,99
                        </p>

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Link className={Style.registerButton}>
                                Cadastre-se
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}