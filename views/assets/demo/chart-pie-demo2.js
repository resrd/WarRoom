

var data1 = 100+Math.floor(Math.random() * 11)
var data2 = 100+Math.floor(Math.random() * 11)
var data3 = 100+Math.floor(Math.random() * 11)
var data4 = 100+Math.floor(Math.random() * 11)

// Pie Chart Example
var ctx = document.getElementById("myPieChart2").getContext("2d");;
var myPieChart2 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [100,100,100,100],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  // options: {
  //   animation: {
  //       duration: 0
  //   }}
});

