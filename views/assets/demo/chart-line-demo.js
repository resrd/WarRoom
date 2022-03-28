new Chart("linechart", {
  type: "line",
  data: {
    labels: [50,60,70,80,90,100,110,120,130,140,150],
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,0,255,1.0)",
      borderColor: "rgba(255,0,0,1.0)",
      data: [7,8,8,9,9,9,10,11,14,14,15]
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});