# curly-octo-sniffle
example of payments with stripe

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


## using the example

from the stripe docs: https://stripe.com/docs/tutorials/checkout
for fake card data to test with

```
Any random, syntactically valid email address (the more random, the better)
One of Stripe's test card numbers, such as 4242 4242 4242 4242
Any three digit CVC code
Any expiration date in the future
```
