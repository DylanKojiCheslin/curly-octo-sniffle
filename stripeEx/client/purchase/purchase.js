Template.purchase.events({
    'click #purchase-button': function(e) {
      e.preventDefault();
      realKey = Meteor.settings.public.stripe.testPublishableKey

      StripeCheckout.open({
        key: realKey,
        amount: 350, // tree fidy
        name: 'test strip',
        description: 'I need about 3 fiddy',
        panelLabel: 'Pay Now',
        token: function(res) {
          stripeToken = res.id;
          console.info(res);
          Meteor.call('chargeCard', stripeToken);
        }
      });
    }
  });
