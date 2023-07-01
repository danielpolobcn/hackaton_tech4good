import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { datosBarriosPosition } from '../data/datosBarriosPosition';
import { DivChart } from './ChartScores.styled';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




const ChartScores = ({ inputScore, resultsRef }) => {

    const orderedData =
        (inputScore === "0")
            ? datosBarriosPosition.toSorted((a, b) => a.score - b.score)
            : datosBarriosPosition.filter(item =>
                (item.score == inputScore)).toSorted((a, b) => a.score - b.score)

    //console.log({ orderedData })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'INDICE DE PROXIMIDAD',
            },
        },
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Barrios Barcelona'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 100
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'índice'
                },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 1
                }
            }
        },
        barValueSpacing: 20,
        maintainAspectRatio: false,
    };

    const labels = orderedData.map(barrio => barrio.name);
    const scores = orderedData.map(barrio => barrio.score.toFixed(2));
    //console.log({ labels }, { scores });

    const data = {
        labels,
        datasets: [
            {
                label: 'índice',
                data: scores,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <DivChart ref={resultsRef}>
            <Bar options={options} data={data} height={700} />
        </DivChart>
    )

}
export default ChartScores;