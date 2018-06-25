# auth-passport-facebook
Authentication sample in Express app using facebook strategy of passport.js

## Make a sample app to get App ID and App Secret
+ Open [Facebook for developers](https://developers.facebook.com/apps/) to get your app registered with facebook.
+ Click on `Add a New App` to create a sample app.
+ Enter display name for your app (auth-passport-facebook) and click on `Create App ID`.
+ 'Add Product' page will open. Look for 'Facebook Login' and click on `Set Up`.
+ 'Quickstart guide' will open. Click on 'Web'.
+ Enter site URL (http://localhost:3079), click `Save` and then `Continue`.
+ Now goto `Settings>Basic` from left panel.
+ In Basic settings copy `App Id` and `App Secret` and paste them in `server.js` where passport is configured to use facebook strategy.
