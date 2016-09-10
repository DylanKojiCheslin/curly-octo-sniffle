# curly-octo-sniffle
example of payments with stripe


## Before you start
Never, EVER send credit card data to your server. You have been warned

## Creating a settings file

This won't work without a file called settings.json in the main folder.

Make sure that your local repos .git/info/exclude has setting.json
If you don't your api keys will be published.


settings.json should be
```
{
  "public":{
      "stripe":{
        "testPublishableKey":"pk_test_zzzYourPublicKey"
      }
  },
  "private":{
    "stripe":{
      "testSecretKey":"sk_test_zzzYourSecretKeyzzz"
    }
  }
}

```
get your self an api key at:
https://stripe.com/


you will need to make a plan for the reoccurring payments
go to your stripe dashboard, click plans => new
create a plan with a name "bronze"
in server/recurring.js change the plan property to match you plans number

ex:

```
ID:111111111111111
Name:bronze
Price:$1.00 USD/day
Trial period:No trial
Statement description:test bronze
```

## using the example

from the stripe docs: https://stripe.com/docs/tutorials/checkout
for fake card data to test with

```
Any random, syntactically valid email address (the more random, the better)
One of Stripe's test card numbers, such as 4242 4242 4242 4242
Any three digit CVC code
Any expiration date in the future
```
the recurring payments example has no UI to show that it has worked,
to confirm look in /subscriptions of your stripe account conformation
