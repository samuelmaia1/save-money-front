import Style from './ChartHomePage.module.css'

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

export const ChartHomePage = () => {
    const data = {
        labels: ['Lazer', 'Despesas', 'Alimentação'],
        datasets: [
            {
                label: 'Gastos Mensais',
                data: [300, 500, 200],
                backgroundColor: [
                    '#9E6DC8',
                    'rgba(75, 192, 192, 0.6)',
                    '#ABF6A6',
                ],
                borderColor: [
                    '#9E6DC8',
                    'rgba(75, 192, 192, 1)',
                    '#ABF6A6',
                ],
                borderWidth: 1,
            },
        ],
    }
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Gastos Mensais por Categoria',
            },
        },
    }
    
    return (
        <div style={{ width: '450px', margin: '0' }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}