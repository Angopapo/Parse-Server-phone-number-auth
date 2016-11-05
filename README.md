# Parse-Server-phone-number-auth
An module to login users in parse server with phone numbers using Facebook AccountKit.

## Install (Server Inside)
1. Open tour SSH client and enter your credentials
2. Go to your Parse-server-exemple folder and run
   eg. $ cd /home/demo/parse-server-exemple
3. $ npm install -S Parse-Server-phone-number-auth

## Setup (Server Inside)
4. Go to your Parse Server Example index.js file
  eg. $ cd /home/demo/parse-server-exemple
5. Edit index.js file like this
  eg. $ vi index.js or you can edit with your favorite editor

6. Edit the index.js file in parse-server-example and configure ParseServer with oauth, 
     you can find this in parse server docs https://github.com/ParsePlatform/parse-server/wiki/OAuth
     
     var api = new ParseServer({
    ...
    oauth: {
        accountkit: {
            module: 'Parse-Server-phone-number-auth',
            appSecret: 'YOUR_APP_SECRET'
        },
        facebook: {
            appIds: "FACEBOOK"
        }
    }
});

  
## Get YOUR_APP_SECRET (Facebook AccountKit Web site)

7. Go to https://developers.facebook.com/
   if you not have an Developer Account register one then go to the next step
   if you already have one, then just go to the next step
8. Select your facebook app in developer dashboard then go to "Account Kit" Section
   eg. https://developers.facebook.com/apps/XXXXXXXX/account-kit/    (XXXXXXXX is your Facebook App ID)
9. Click on SHOW AccountKit Secret, copy and paste in step 6.

## Android inside

1. Go to...

## iOS inside

1. Go to...
## Web inside

1. Go to...

Note. Ww will update this repo as soon possible.
 


