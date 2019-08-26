import Chart from "chart.js"

const graph = ()=> {

  var ctx = document.getElementById("line-chart").getContext('2d');
  var myData = [{x: 0, y: 0}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 2.3}, {x: 4, y: 1.8}, {x: 5, y: 4.5}, {x: 6, y: 3.5}, {x: 7, y: 3.5}, {x: 8, y: 7}];

  /*** Gradient ***/
  var gradient = ctx.createLinearGradient(0, 0, 0, 550);
  gradient.addColorStop(0, 'rgba(26,49,199,1)');
  gradient.addColorStop(1, 'rgba(26,49,199,0.1)');
  /***************/


  var data = {
    datasets: [{
      data: [myData[0]],
      borderColor: "rgba(26,49,199,1)",
      fill: true,
      lineTension: 0.15,
      backgroundColor : gradient,
      pointRadius: 0, // supprimer si on veut faire apparaitre les points
      borderWidth: 2,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'monotone'
      // strokeColor : "rgba(26,49,199,1)",
      // pointColor : "#fff",
      // pointStrokeColor : "#ff6c23",
      // pointHighlightFill: "#fff",
      // pointHighlightStroke: "#ff6c23",
    }]
  };

  var options = {
    responsive: true,
    showTooltips: false, // pour faire disparaitre les infobulles au hover
    scales: {
      xAxes: [{
        type: 'linear',
        ticks: {min: 0, max: 8} // doit être dynamique - max doit être égal au nombre de hash dans l'array data)
      }],
      yAxes: [{
        ticks: {min: 0, max: 8} // doit être dynamique - max doit être à un num au dessus du montant le plus élevé dans l'array data ?)
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
      setTimeout(next, 150);
    }
  }
  setTimeout(next, 100);

};

const graph2 = ()=> {

  var ctx = document.getElementById("line-chart-2").getContext('2d');
  // var myData = [0, 2, 1, 2.3, 1.8, 4.5, 3.5, 3.5,7];

  /*** Gradients ***/
  var gradient = ctx.createLinearGradient(0, 0, 0, 550);
  gradient.addColorStop(0, 'rgba(26,49,199,1)');
  gradient.addColorStop(1, 'rgba(26,49,199,0.1)');

  var gradientFill = ctx.createLinearGradient(0, 0, 0, 550);
  gradientFill.addColorStop(0, 'rgba(26,49,199,1)');
  gradientFill.addColorStop(1, 'rgba(26,49,199,0.1)');
    /***************/

  var data = {
    labels: [0,1,2,3,4,5,6,7,8],
    datasets: [{
      data: [0,2,1,2.3,1.8,4.5,3.5,3.5,7],
      borderColor: "rgba(26,49,199,1)",
      fill: true,
      lineTension: 0.15,
      backgroundColor : gradient,
      pointRadius: 0, // supprimer si on veut faire apparaitre les points
      borderWidth: 2,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'monotone',
      easing: 'easeOutBack' // not working :((((
    }]
  };

  var options = {
    responsive: true,
    showTooltips: false // pour faire disparaitre les infobulles au hover
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
        var posColour = 'rgba(249,0,66)';
        var negColour = 'rgba(26,49,199)';

        var gradientStroke = ctx.createLinearGradient(0, 0, 0, 900);
        gradientStroke.addColorStop(0, "rgba(249,0,66)");
        // gradientStroke.addColorStop(yPos / c.height, posColour);
        // gradientStroke.addColorStop(yPos / c.height, negColour);
        gradientStroke.addColorStop(1, "rgba(26,49,199)");
        var model = c.data.datasets[0]._meta[Object.keys(dataset._meta)[0]].$filler.el._model;

        model.borderColor = gradientStroke;

      }
    }]
  });

};

export { graph };
export { graph2 };
