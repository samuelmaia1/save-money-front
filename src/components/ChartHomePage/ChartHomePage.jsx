import Style from './ChartHomePage.module.css'
import { useContext } from 'react'
import {ThemeContext} from '../../context/ThemeContext.jsx'

import { Doughnut, Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from 'chart.js'


ChartJS.register(
CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
)

export const DoughnutChart = ({values}) => {
    const { theme } = useContext(ThemeContext)

    const labels = Object.keys(values)
    const labelsValues = Object.values(values)

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Gastos Mensais',
                data: labelsValues,
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
                labels: {
                    color: theme === 'dark' ? '#ffffff' : '#000000', // Cor da legenda baseada no tema
                },
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

export const LineChart = ({values}) => {
    const data = {
        labels: [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
          'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ],
        datasets: [
          {
            label: 'Crescimento do Investimento',
            data: [5000, 5200, 5400, 5700, 6000, 6300, 6700, 7100, 7600, 8200, 8900, 9600],
            borderColor: '#73D76C',
            backgroundColor: '#73D76C',
            fill: true,
            tension: 0.4,
          },
        ],
      }
    
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Valor (R$)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Meses',
                },
            },
        },
    }
    
    return (
        <div style={{ width: '100%'}}>
            <Line data={data} options={options} />
        </div>
    )
}