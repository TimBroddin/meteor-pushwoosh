#Pushwoosh package for Meteor

Pushwoosh is a service that makes it easy to send push notifications to your (mobile) app.

This package allows you to send (server) and receive (app) push notifications.

## Install

> meteor add timbroddin:pushwoosh

## Usage

### Add your Pushwoosh settings to settings file

	{
  		"pushwoosh": {
   			"appId": "XXXX-XXXX",
    		"token": "XXXXXXXXXXX"
  		}
	}
	
You can request the token in the Pushwoosh admin panel.

## Client (Cordova)

>   Pushwoosh.initPushwoosh(appId);

(replace appId with your appId)

I put this in an iron-router onBeforeAction call:

    Router.onBeforeAction(function() {
    	Pushwoosh.initPushwoosh('XXXX-XXXX');
    	this.next();
    });
    
There's no need to wrap this in an `if(Meteor.isCordova)` call, this method does nothing when called in the browser.

## Server

To send a push notification call:

    Pushwoosh.createMessage({
      "send_date": "now",
      "ignore_user_timezone": true,
      "content": "Your message"
    });
    
When called client-side this method does nothing.

There are a lot of extra parameters available. You can check them [here](https://www.pushwoosh.com/programming-push-notification/pushwoosh-push-notification-remote-api/).

You can pass this method an array if you'd like to send more than one message.


## Todo

Implement other calls.






