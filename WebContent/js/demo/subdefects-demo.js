//subdefects - Chart
new Chart(document.getElementById("subdefects-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan","6-Jan","7-Jan","8-Jan","9-Jan","10-Jan"],
    datasets: [{ 
        data: [12,3,2,4,1,3,2,2,2],
        label: "Functional Defects",
        borderColor: "#dc3545",
        lineTension: 0,
        fill: false
      }]
  },
  options: {
    title: {
      display: true,
      text: 'Functional Defects Per No. of Line - 1st Division'
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