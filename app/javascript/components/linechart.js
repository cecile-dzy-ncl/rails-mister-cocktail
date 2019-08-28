import Chart from "chart.js"

const graph = ()=> {

  var ctx = document.getElementById("line-chart").getContext('2d');
  // suivi du compte
  var myData =  [{x: 0, y: 0}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 2.3}, {x: 4, y: 1.8}, {x: 5, y: 4.5}, {x: 6, y: 3.5}, {x: 7, y: 3.5}, {x: 8, y: 7}];
  // prévisionnel
  var myData2 = [{x: 8, y: 7}, {x: 9, y: 7.5}, {x: 10, y: 9}, {x: 11, y: 9.3}];
  // objectif
  var myData3 = [{x: 0, y: 9.8}, {x: 1, y: 9.8}, {x: 2, y: 9.8}, {x: 3, y: 9.8}, {x: 4, y: 9.8}, {x: 5, y: 9.8}, {x: 6, y: 9.8}, {x: 7, y: 9.8}, {x: 8, y: 9.8}, {x: 9, y: 9.8}, {x: 10, y: 9.8}, {x: 11, y: 9.8}];

  /*** Gradient ***/
  var gradient = ctx.createLinearGradient(0, 0, 0, 550);
  gradient.addColorStop(0, 'rgba(40,224,178,1)');
  gradient.addColorStop(1, 'rgba(40,224,178,0.1)');

  // var gradientBorder2 = ctx.createLinearGradient(0, 0, 0, 250);
  // gradientBorder2.addColorStop(0, 'rgba(40,224,178,1)');
  // gradientBorder2.addColorStop(0.5, 'rgba(40,224,178,0.5)');
  // gradientBorder2.addColorStop(1, 'rgba(40,224,178,0.1)');
  /***************/


  var data = {
    datasets: [{
      data: [myData[0]],
      borderColor: "rgba(40,224,178,1)",
      fill: true,
      lineTension: 0.15,
      backgroundColor : gradient,
      pointRadius: 0, // supprimer si on veut faire apparaitre les points
      borderWidth: 4,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'monotone'
    }, {
      data: [myData2[0]],
      borderColor: 'rgba(40,224,178,1)',
      fill: true,
      lineTension: 0.15,
      backgroundColor : "#fff0",
      pointRadius: 0, // supprimer si on veut faire apparaitre les points
      borderWidth: 4,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'monotone',
      borderDash: [10,5]
    }, {
      data: [myData3[0]],
      borderColor: "rgba(206,224,19,1)",
      fill: true,
      lineTension: 0.15,
      backgroundColor : "#fff0",
      pointRadius: 0, // supprimer si on veut faire apparaitre les points
      borderWidth: 6,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'monotone',
      borderDash: [8,5]
    }]
  };

  var options = {
    responsive: true,
    showTooltips: false, // pour faire disparaitre les infobulles au hover
    // animation: true,
    // animationEasing: "easeOutBack",
    // animationSteps: 60,
    scales: {
      xAxes: [{
        type: 'linear',
        ticks: {min: 0, max: 12} // doit être dynamique - max doit être égal au nombre de hash dans l'array data)
      }],
      yAxes: [{
        ticks: {min: 0, max: 10} // doit être dynamique - max doit être à un num au dessus du montant le plus élevé dans l'array data ?)
      }]
    }
  };

  var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var next = function() {
    var data = myChart.data.datasets[0].data;
    var count = data.length;
    data[count] = data[count - 1];
    myChart.update({duration: 0});
    data[count] = myData[count];
    myChart.update();
    if (count < myData.length) {
      setTimeout(next, 100);
    }
  }
  setTimeout(next, 100);

  var next2 = function() {
    var data = myChart.data.datasets[1].data;
    var count = data.length;
    data[count] = data[count - 1];
    myChart.update({duration: 0});
    data[count] = myData2[count];
    myChart.update();
    if (count < myData2.length) {
      setTimeout(next2, 100);
    }
  }
  setTimeout(next2, 1000);

  var next3 = function() {
    var data = myChart.data.datasets[2].data;
    var count = data.length;
    data[count] = data[count - 1];
    myChart.update({duration: 0});
    data[count] = myData3[count];
    myChart.update();
    if (count < myData3.length) {
      setTimeout(next3, 0);
    }
  }
  setTimeout(next3, 0);
};

const graph2 = ()=> {

  var ctx = document.getElementById("line-chart-2").getContext('2d');
  // var myData = [0, 2, 1, 2.3, 1.8, 4.5, 3.5, 3.5,7];

  /*** Gradients ***/
  var gradient = ctx.createLinearGradient(0, 0, 0, 550);
  gradient.addColorStop(0, 'rgba(40,224,178,1)');
  gradient.addColorStop(1, 'rgba(40,224,178,0.1)');
  /***************/

  var data = {
    labels: [0,1,2,3,4,5,6,7,8],
    datasets: [{
      data: [0,2,1,2.3,1.8,4.5,3.5,3.5,7],
      borderColor: "rgba(40,224,178,1)",
      fill: true,
      lineTension: 0.15,
      backgroundColor : 'rgba(40,224,178,0.1)',
      pointRadius: 0, // supprimer si on veut faire apparaitre les points
      borderWidth: 2,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'monotone',
    }]
  };

  var options = {
    responsive: true,
    showTooltips: false, // pour faire disparaitre les infobulles au hover
    // animation: true,
    animationEasing: 'easeOutBack'
  };

  var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
    plugins: [{
      beforeRender: function(c, options) {
        var dataset = c.data.datasets[0];
        var yScale = c.scales['y-axis-0'];
        var yPos = yScale.getPixelForValue(4);
        var posColour = 'rgba(2224,0,66)';
        var negColour = 'rgba(40,224,178, 1)';
        var posColourFill = 'rgba(224,0,66,1)';
        var negColourFill = 'rgba(40,224,178,0.1)';

        console.log(yPos);
        console.log(c.height);
        console.log(yPos / c.height);
        console.log(yPos / c.height - 0.01);

        // var gradientFill = ctx.createLinearGradient(0, 0, 0, yPos);
        // gradientFill.addColorStop(0, posColourFill);
        // gradientFill.addColorStop(yPos / c.height, posColourFill);
        // gradientFill.addColorStop(yPos / c.height , negColourFill);
        // gradientFill.addColorStop(1, negColourFill);

        var gradientStroke = ctx.createLinearGradient(0, 0, 0, yPos);
        gradientStroke.addColorStop(0, posColour);
        gradientStroke.addColorStop(yPos / c.height + 0.3, 'rgba(224,0,66,1)');
        gradientStroke.addColorStop(1, negColour);

        var model = c.data.datasets[0]._meta[Object.keys(dataset._meta)[0]].$filler.el._model;
        // model.backgroundColor = gradientFill;
        model.borderColor = gradientStroke;

      }
    }]
  });
};

export { graph };
export { graph2 };
