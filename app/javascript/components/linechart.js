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
    // animation: true,
    animationEasing: "easeOutBack",
    animationSteps: 60,
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
      setTimeout(next, 120);
    }
  }
  setTimeout(next, 100);

  // Chart.defaults.global.animation.duration = 3000;

};

const graph2 = ()=> {

  var ctx = document.getElementById("line-chart-2").getContext('2d');
  // var myData = [0, 2, 1, 2.3, 1.8, 4.5, 3.5, 3.5,7];

  /*** Gradients ***/
  var gradient = ctx.createLinearGradient(0, 0, 0, 550);
  gradient.addColorStop(0, 'rgba(26,49,199,1)');
  gradient.addColorStop(1, 'rgba(26,49,199,0.1)');
  /***************/

  var data = {
    labels: [0,1,2,3,4,5,6,7,8],
    datasets: [{
      data: [0,2,1,2.3,1.8,4.5,3.5,3.5,7],
      borderColor: "rgba(26,49,199,1)",
      fill: true,
      lineTension: 0.15,
      // backgroundColor : gradient,
      backgroundColor : 'rgba(26,49,199,0.1)',
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
        var yPos = yScale.getPixelForValue(2);
        var posColour = 'rgba(249,0,66)';
        var negColour = 'rgba(26,49,199, 1)';
        var posColourFill = 'rgba(249,0,66,1)';
        var negColourFill = 'rgba(26,49,199,0.1)';

        console.log(yPos);
        // console.log(c.height);
        // console.log(yPos / c.height);
        // console.log(yPos / c.height - 0.01);

        // var gradientFill = ctx.createLinearGradient(0, 0, 0, yPos);
        // gradientFill.addColorStop(0, posColourFill);
        // gradientFill.addColorStop(yPos / c.height, posColourFill);
        // gradientFill.addColorStop(yPos / c.height , negColourFill);
        // gradientFill.addColorStop(1, negColourFill);

        var gradientStroke = ctx.createLinearGradient(0, 0, 0, yPos);
        gradientStroke.addColorStop(0, posColour);
        gradientStroke.addColorStop(yPos / c.height + 0.3, 'rgba(249,0,66,1)');
        gradientStroke.addColorStop(1, negColour);

        var model = c.data.datasets[0]._meta[Object.keys(dataset._meta)[0]].$filler.el._model;
        // model.backgroundColor = gradientFill;
        model.borderColor = gradientStroke;

      }
    }]
  });

  Chart.defaults.global.animation = {

    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeInOutBack"
  };

  Chart.defaults.global.animation.duration = 300;
};

export { graph };
export { graph2 };
