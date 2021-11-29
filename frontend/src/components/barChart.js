import React from 'react';
import './barChart.css';

const BarChart = ({ data, labels, images }) => {
  return (
    <div className="barChart">
      {
        data.map((value, i) => {
          let dataPercentage = Math.round(value * 100);
          let size = value * 250;
          let label = labels[i];
          let image = images ? images[i] : null;

          return (
            <div className="barChartItem">
              {image && <img src={image} className="barChartImage" />}
              <div className="barChartLabel">{label}</div>
              <div className="barChartBar" key={i} style={{width: size}}></div>
              <div className="barChartValue">{dataPercentage}%</div>
            </div>
          );
        })
      }
    </div>
  )
}

export default BarChart;
