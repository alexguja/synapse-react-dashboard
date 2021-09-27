import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData, chartName }) => {

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, 'orange');
    gradientStroke.addColorStop(1, 'red');

    const gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(37, 39, 153, 0.1)");
    gradientFill.addColorStop(1, "rgba(249, 87, 59, 0.5)");

    return {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [{
            label: chartName,
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: chartData,
        }]
    }
  };


 const options = {
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 0,
          padding: 20,
          fontColor: "#9a9b9c",
          maxTicksLimit: 5 
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
          // fontColor: axesColor,
        },
      },
    ],
  },
};

  return (
      <Line data={data} options={options} />
    );
}
 
export default LineChart;
