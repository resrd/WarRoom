// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart2");

var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["", "", "", "", "", ""],
    datasets: [{
      label: "總銷量",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [42, 53, 62, 41, 21, 14],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: '時間'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 5
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 90,
          maxTicksLimit: 5
        },
        gridLines: {
          display: false
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
