import $ from "jquery";

// game.js
const game = ()=> {


  var virus = $('.virus');
  var virusWidth = virus.width();
  console.log(virusWidth);

  var montant = 0;
  var texteMontant = $(".sum");
  texteMontant.html(montant);

  virus.click(function(event) {
    // incrémentation montant don
    montant += 2;
    console.log(montant);
    texteMontant.html(montant);

    // réduire la taille de l'image
    var virusWidth = virus.width();
    console.log(virusWidth);
    var widthDecrease = virusWidth * 96/100;
    console.log(widthDecrease);
    // var newWidth = virusWidth - widthDecrease;
    // console.log(newWidth);
    virus.css('width', widthDecrease + 'px');
    // virus.width(newWidth);

    //faire apparaitre des baguettes
  });



};

export { game };

