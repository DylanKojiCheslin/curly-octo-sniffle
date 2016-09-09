Meteor.methods({
  recurring:function(token){
    publicStripeKey = Meteor.settings.private.stripe.testSecretKey;
    var Stripe = StripeAPI(publicStripeKey);
    Stripe.customers.create({
      description: 'Customer test',
      source: token,
      plan: 666624680067334
    }, function(err, customer) {
    });
  }
});
