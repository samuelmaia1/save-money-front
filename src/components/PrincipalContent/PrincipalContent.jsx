import {DoughnutChart, LineChart } from "../ChartHomePage/ChartHomePage.jsx"
import Style from './PrincipalContent.module.css'
import { Link } from "react-router-dom"

export const PrincipalContent = () => {
    return (
        <>
            <div className={Style.container}>
               <PrincialText />

                <DoughnutChart values={{Lazer: 300, Alimentação: 500, Despesas: 200}}/>
            </div>
        </>
    )
}

const PrincialText = () => {
    return (
        <div className={Style.content}>
            <h1 
                style={
                    {
                        fontWeight: 400, 
                        fontSize: '3rem',
                        display: 'inline'
                    }
                }
            >
                Economize dinheiro com o melhor app de <span style={{fontWeight: '400'}} className={Style.strong}>gestão financeira.</span>
            </h1>

            <p>
                Adicione seus ganhos, gastos e receba relatórios personalizados do seu balanço financeiro.
            </p>

            <div style={{display: 'flex', justifyContent: 'start', gap: '5rem', alignItems: 'start', height: '300px'}}>

                <div className={Style.containerChart}>
                    <LineChart key='line-chart'/>
                    <p>Simule o crescimento do seu investimento</p>
                    <Link>Ir para lá</Link>
                </div>
            </div>
        </div>
    )
}