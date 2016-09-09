Meteor.startup(function() {

  if(Meteor.isClient){
  realKey = Meteor.settings.public.stripe.testPublishableKey;
    Stripe.setPublishableKey(realKey);
  }
});
