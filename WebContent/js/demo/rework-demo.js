//Rework - Chart
var ctx = document.getElementById("myReworkChart");
var myReworkChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    datasets: [{ 
        data: [10954,81704,3495,413558,18023,26159,2292,3419,11184,23300,12454,9872],
        label: "Total rework",
        backgroundColor: ["rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)",], 
        lineTension: 0
      }
    ]
  },
  options: {plugins: {
    datalabels: {
       // hide datalabels for all datasets
       display: true,
       color: '#fff'
    }
  },
    title: {
      display: true,
      fontSize: 14,
      text: 'Total Rework of 2019'
    },
	legend: { display: true }
  }
});

//SubRework - Chart
var ctx = document.getElementById("rework2-chart");
var myReworkChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan","6-Jan","7-Jan","8-Jan","9-Jan","10-Jan"],
    datasets: [{ 
        data: [1500,2000,3000,4000,3000,5000,2000,1000,3000,4000],
        label: "Total rework",
        borderColor: "#dc3545",
        lineTension: 0,
        fill: false
      }
    ]
  },
  options: {plugins: {
    datalabels: {
       // hide datalabels for all datasets
       display: false
    }
  },
    title: {
      display: true,
      fontSize: 14,
      text: 'Rework of January of 2019'
    },
	legend: { display: true }
  }
});