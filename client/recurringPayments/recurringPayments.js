
Template.recurringPayments.events({
  "click #recurring-payment": function(e){
    e.preventDefault();
    realKey = Meteor.settings.public.stripe.testPublishableKey;
    Stripe.setPublishableKey(realKey);

    ccNum = $('#ccnum').val();
    cvc = $('#cvc').val();
    expMo = $('#exp-month').val();
    expYr = $('#exp-year').val();
    //create a token
    Stripe.card.createToken({
        number: ccNum,
        cvc: cvc,
        exp_month: expMo,
        exp_year: expYr,
    }, function(status, response) {
        stripeToken = response.id;
        Meteor.call("recurring", stripeToken, function(error, result){
          if(error){
            console.log("error", error);
          }
          if(result){
             console.log(result);
          }
        });
    });
  }
});
