
let myChart = document.getElementById('myChart').getContext('2d');

var salesChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Net Sales: $',
            data: [7500, 5000, 6200, 3800, 4500, 6000, 7000 ],
            borderColor: '#fff',
            backgroundColor: "rgba(255,255,255,0.4)",
            
        }]
    },
    options: {
        legend: {
          display: false,
        },
        tooltips: {
          mode: "x-axis",
          xPadding: 20,
          yPadding: 10,
          displayColors: false,
        },
        hover: { mode: "label" },
        scales: {
            xAxes: [
              {
                scaleLabel: {
                  show: true,
                  labelString: "Month",
                },
                ticks: {
                  fontColor: "#fff",
                  fontStyle: 600,
                },
                gridLines: {
                  color: "#fff",
                  zeroLineColor: "#fff",
                  lineWidth: 1,
                },
              },
            ],
            yAxes: [{ display: false }],
          },
    }
});

console.log(salesChart.data.datasets[0].data)
let weeklySales = salesChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
console.log(weeklySum)

// module.exports = {weeklySales}
// module.exports = mongoose.model("Weekly", weeklySales);

// module.exports = {
//   weeklySales
// }

// export default weeklySales;