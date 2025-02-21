import { ChartHomePage } from "../ChartHomePage/ChartHomePage"
import Style from './PrincipalContent.module.css'


export const PrincipalContent = () => {
    return (
        <>
            <div className={Style.container}>
               <PrincialText />

                <ChartHomePage />
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
        </div>
    )
}