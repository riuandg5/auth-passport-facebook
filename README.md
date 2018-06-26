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
1. Download repositry
2. Push all files to hosting service
3. Set environment variables
   ```
   APPID = your_app_id
   APPSECRET = your_app_secret
   BACKURL = hosting_service_provided_url
   ```
4. Deploy your app
5. Open app url in your browser