//subabnormality - Chart
new Chart(document.getElementById("subabnormality-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan"],
    datasets: [{ 
        data: [4,6,6,7,8],
        label: "Abnormalities",
        borderColor: "#dc3545",
        fill: false
      }]
  },
  options: {
    title: {
      display: true,
      text: 'Abnormality Statistics as of January 2019'
    },
    scales: {
      yAxes: [{
            display: true,
            ticks: {
            beginAtZero: true,
    }
            }]
    },
          legend: { display: false }
        }
    });