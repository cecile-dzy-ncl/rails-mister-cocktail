import Chart from "chart.js"

const graph = ()=> {
  // var ctx = document.getElementById("myChart").getContext('2d');
  // // var shares = document.getElementById("myChart").dataset.share.split(",");
  // // var labels = document.getElementById("myChart").dataset.label.split(",");
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     // labels: ["GNU/Linux", "Android Development", "Core Java", "Frontend HTML/CSS", "UI / UX", "Blogging", "Database", "Javascript", "Windows", "CMS(Wordpress)"],
  //     datasets: [{
  //       label: "2017",
  //       fill: true,
  //       backgroundColor: "rgba(51,133,255,0.2)",
  //       borderColor: "rgba(51,133,255,1)",
  //       pointBorderColor: "#fff",
  //       pointBackgroundColor: "rgba(51,133,255,1)",
  //       data: [33, 49, 50, 67, 39, 80, 60, 50, 90,80]
  //     }, {
  //       label: "2018",
  //       fill: true,
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       pointBorderColor: "#fff",
  //       pointBackgroundColor: "rgba(255,99,132,1)",
  //       pointBorderColor: "#fff",
  //       data: [60, 67, 80, 68, 50, 90, 80, 60, 90,81]
  //     }]
  //   },

  //   options: {
  //     scale: {
  //       responsive: true,
  //     },
  //   },
  // });

  // var ctx2 = document.getElementById('myChart2').getContext('2d');
  // var myChart = new Chart(ctx2, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },

  //   options: {
  //     scale: {
  //       responsive: true,
  //     },
  //   },
  // });

  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });



};

export { graph };
