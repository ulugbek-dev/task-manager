import React from 'react';
import { ChartStyled } from './styled';
import { Card } from '../../elements/Card';
import Chart from "react-apexcharts";
import { primaryColor } from '../../variables';

function PieChart({ completed, total }) {
    const data = {
        series: [completed, total-completed],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          labels: ['Completed', 'Incomplete'],
          fill: {
            colors: [primaryColor, '#E8ECEC']
          },
          dataLabels: {
            enabled: false
          },
          label: {
            enabled: true
          },
          legend: {
            show: false
          }
        }
    };

    return (
        <Card>
            <ChartStyled>
                <Chart options={data.options} series={data.series} type="pie" />
            </ChartStyled>
        </Card>
    );
}

export default PieChart;