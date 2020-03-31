import React, { useState, useEffect } from 'react'

import Chart from 'react-apexcharts'

import { URL_GLOBAL } from '../../../../../constants/constants'

const ChartPie = ({ id, reload }) => {

    const [propChart, setOptions] = useState({
        options: {
            chart: {
                width: 124124124
            },
            colors: [
                'rgb(0, 196, 159)',
                'rgb(0, 136, 254)',
                'rgb(255, 128, 66)',
                'rgb(255, 187, 40)',
                'rgb(247, 19, 84)',
                'rgb(60, 14, 128)',
                'rgb(31, 89, 11 )',
            ],
            responsive: [{
                breakpoint: 900,
                options: {
                    chart: {
                        width: 320,
                    },
                    legend: {
                        position: 'right'
                    },
                },
            }],
            labels: [],
        },
        series: [],
        reload: false
    })

    const consultarCount = async () => {
        let url = `${URL_GLOBAL}/api/tipo-doc/counts/${id}`;

        const respuesta = await fetch(url);
        const chartInfo = await respuesta.json();

        let keys = [];
        let values = [];

        for (let key in chartInfo) {
            keys.push(key)
            values.push(Number(chartInfo[key]));
        }

        setOptions({
            series: values,
            options: {
                labels: keys
            }
        })
    }

    useEffect(() => {
        consultarCount()
    }, [reload])

    return (
        <div id="chart">
            <Chart
                options={propChart.options}
                series={propChart.series}
                type="pie"
                width="380"
            />
        </div>
    )
}

export default ChartPie
