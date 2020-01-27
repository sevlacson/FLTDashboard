//subclaim - Chart
new Chart(document.getElementById("subclaim-chart"), {
  type: 'line',
  data: {
    labels: ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
    datasets: [{ 
        data: [10,20,30,40,50,60,70,80,90,100,110,120],
        label: "Claim",
        borderColor: "#dc3545",
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }]
  },
  options: {
    title: {
      display: true,
      text: 'Customer Claim of 2019'
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

    //subclaim1 - Chart
new Chart(document.getElementById("subclaim1-chart"), {
  type: 'line',
  data: {
    labels: ["Jan-1","Jan-2","Jan-3","Jan-4","Jan-5","Jan-6","Jan-7","Jan-8","Jan-9","Jan-10","Jan-11","Jan-12"],
    datasets: [{ 
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        label: "Claim",
        borderColor: "#dc3545",
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }]
  },
  options: {
    title: {
      display: true,
      text: 'Customer Claim January of 2019'
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