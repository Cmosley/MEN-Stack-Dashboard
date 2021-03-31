// const Chart = require('chart.js');

let myChart = document.getElementById('myChart').getContext('2d');


//  chart js testing 

var salesChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Net Sales by Day',
            data: [7500, 5000, 6200, 3800, 4500, 6000, 7000 ],
            borderColor: "#2c7be5",
            backgroundColor: "rgba(255,255,255,0.4)",
            
        }]
    },
    options: {
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
