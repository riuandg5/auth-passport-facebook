# auth-passport-facebook
Authentication sample in Express app using facebook strategy of passport.js\
[Live Demo](https://auth-passport-social.herokuapp.com)

## Make a sample app to get App ID and App Secret
+ Open [Facebook for developers](https://developers.facebook.com/apps/) to get your app registered with facebook.
+ Click on `Add a New App` to create a sample app.
+ Enter display name for your app (auth-passport-social) and click on `Create App ID`.
+ 'Add Product' page will open. Look for 'Facebook Login' and click on `Set Up`.
+ 'Quickstart guide' will open. Click on `Web`.
+ Enter site URL (http://localhost:3079) and click `Save`.
+ If you want to deploy your app on some hosting service then goto `Products>Facebook Login>Settings` from left panel. Under 'Client OAuth Settings' enter `Valid OAuth Redirect URIs` as `your_hosted_app_url/signin/facebook/return`. For example my live demo app uses https://auth-passport-social.herokuapp.com/signin/facebook/return. You can set /signin/facebook/return to any other route but you have to change routes and callBackURL correspondingly.
+ Now goto `Settings>Basic` from left panel.
+ In Basic settings copy `App Id` and `App Secret` and paste them in `config\config.json` or set them in environment variables of your hosting service.

## For testing locally
1. Download repository
2. Create config\config.json
   ```
   {
      "appid": "paste_your_app_id_here",
      "appsecret": "paste_your_app_secret_here"
   }
   ```
3. `cd repo_directory`
4. `npm insatll`
5. `node server.js`
6. Open http://localhost:3079 in your browser (port 3079 is used in this repository)

## For deploying on some hosting service
1. Download repository
2. Push all files to hosting service
3. Set environment variables
   ```
   APPID = your_app_id
   APPSECRET = your_app_secret
   BACKURL = hosting_service_provided_url
   ```
4. Deploy your app
5. Open app url in your browser

## Development and Production
+ In the live demo app I have used scope for only `public_profile` and `email` which do not requires app to be submitted for review by facebook. You can use scope for many other user's data like `user_gender`, `user_birthday`, etc. but they require app to be submitted for review and if you don't submit your app for review then you will not get these data about user. For more details on scope and user object read [this](https://developers.facebook.com/docs/facebook-login/permissions).
+ As a developer you can access all data of your facebook account but only in development mode of your app. If you really need more than `public_profile` and `email` of other users than you should submit your app for review. To Submit open [Facebook for developers](https://developers.facebook.com/apps/), select your app, goto `App Review` from left panel and click on `Start a Submission`.
+ After development of your app you have to provide `Privacy Policy URL` for your app to get it public. You can write your own Privacy Policy, host it in public directory of your app and paste its url in your app settings on facebook. But for saving time and if you want your app to be in Production and Public, you can generate your app's Privacy Policy at https://www.iubenda.com. After getting Privacy Policy URL paste it in your app's `Basic Settings` and toggle to `Production` mode (or Live).