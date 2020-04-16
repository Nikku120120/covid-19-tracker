import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { getDailydata } from '../../api';

import styles from './Graphs.module.css';

const Graphs = (props) => {

    let infected = props.data.confirmed;
    let recovered = props.data.recovered;
    let deaths = props.data.deaths;
    let countrySelected= props.country

    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
    const fetchDailyData = async () => {
    const initialDailyData = await getDailydata();
    setDailyData(initialDailyData);
    };
    fetchDailyData();
  },[]);

const lineChart = (
   dailyData.length ? (<Line data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map((data) => data.confirmed),
          label: 'Infected',
          borderColor: 'blue',
          fill: true,
        }, {
          data: dailyData.map((data) => data.deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        // }, {
        //     data: dailyData.map((data) => data.recovered),
        //     label: 'Recovered',
        //     borderColor: 'green',
        //     backgroundColor: 'rgba(255, 0, 0, 0.5)',
        //     fill: true,
           },
        ],
      }}/>
    ):null
)
const barChart = (
    infected ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [infected.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Filtered by ${countrySelected}` },
          }}
        />
      ) : null
)

    return (
    <div className={styles.container}>
       {countrySelected ? barChart : lineChart }
    </div>
    )
}

export default Graphs;