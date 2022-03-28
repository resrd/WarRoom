new Chart("doughnutchart", {
  type: "doughnut",
  data: {
    labels: ["完成度>80%", "完成度>60%", "完成度>40%", "完成度>20%", "完成度>0%"],
    datasets: [{
      backgroundColor: [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
      ],
      data: [55, 49, 44, 24, 15]
    }]
  },
  options: {
    title: {
      display: true
    }
  }
});