Meteor.methods({
    'chargeCard': function(stripeToken) {
      check(stripeToken, String);
      var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);

      Stripe.charges.create({
        source: stripeToken,
        amount: 350, //tree fidy
        currency: 'usd'
      }, function(err, charge) {
        console.log(err, charge);
      });
    }
  });
